require('dotenv').config();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
// passport
const passport = require('passport');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const LocalStrategy = require('passport-local').Strategy;


const db = pgp({
  host: 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});
const bcrypt = require('bcrypt');

const saltRounds = 10;

// PASSPORT helper function to get user by username
function getUserByUsername(username) {
  return db.one('SELECT id, first_name, username, password FROM recipient WHERE username=$1', [username]);
}

// PASSPORT
function getUserById(id) {
  console.log('5. Use user id to load user from DB')
    return db.one('SELECT id, first_name, username, password FROM recipient WHERE username=$1', [id])
};

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'some random text #^*%!!', // used to generate session ids
  resave: false,
  saveUninitialized: false,
}));

app.set('port', process.env.PORT || 8080);

// PASSPORT serialise user into session
passport.serializeUser(function(user, done) {
  console.log("4. Extract user id from user for serialisation")
  done(null, user.id);
});

// PASSPORT deserialise user from session
passport.deserializeUser(function(id, done) {
  const user = getUserById(id);
  done(null, user);
});

// PASSPORT configure passport to use local strategy
// that is use locally stored credentials
passport.use(new LocalStrategy(
  function(username, password, done) {
    const user = getUserByUsername(username);
    if (!user) return done(null, false);
    bcrypt.compare(password, user.hash, function(err,res){
      if(err){
      return done(null, false)
      } else {
      return  done(null,user)
      }
  })}
))

// PASSPORT initialise passport and session
app.use(passport.initialize());
app.use(passport.session());

// PASSPORT middleware function to check user is logged in
function isLoggedIn(req, res, next){
  console.log('6. Check that we have a logged in user before allowing access to protected route')
  if( req.user && req.user.id ){
    next();
  } else {
    // set response to error 401 not authorised
    res.redirect('/');
  }
}

// PASSPORT
app.get('/', function(req, res){
  res.render('index', {});
});

// PASSORT login page
app.get('/', function(req, res){
  console.log('1. Receive username and password')
  res.render('login', {});
})

// PASSPORT route to accept logins
app.post('/api/login', passport.authenticate('local', { session: true }), function(req, res) {
  res.status(200).end();
});

// PASSPORT profile page - only accessible to logged in users
app.get('/wallet', isLoggedIn, function(req, res){
  // send user info. It should strip password at this stage
  console.log("5. Use user id to load user from DB")
  res.render('wallet', {user:req.user});
});

// PASSPORT route to log out users
app.get('/logout', function(req, res){
  console.log("7. Log user out")
  // log user out and redirect them to home page
  req.logout();
  // have res.json ('Sucessfully logged out!')
  res.redirect('/');
});

// configure the keys for accessing AWS
AWS.config.update({
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  };
  const s3 = new AWS.S3();
  return s3.upload(params).promise();
};

// POST route for S3 uploads
app.post('/api/upload', (request, response) => {
  const form = new multiparty.Form();
  form.parse(request, async (error, fields, files) => {
    try {
      if (error) throw new Error(error);
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = fileType(buffer);
      const timestamp = Date.now().toString();
      const fileName = `${timestamp}-lg`;
      const data = await uploadFile(buffer, fileName, type);
      return response.status(200).send(data);
    } catch (error) {
      return response.status(400).send(error);
    }
  });
});

app.get('/api/recipient', (req, res) => {
  db.any('SELECT * FROM recipient')
    .then(data => res.json(data))
    .catch(error => res.json({ error: error.message }));
});

// retrieve recipient by id
app.get('/api/recipient/:id', (req, res) => {
  const { id } = req.params;
  return db
    .one('SELECT id, first_name, password, photo FROM recipient WHERE id=$1', [id])
    .then(data => db
      .one('SELECT * FROM biography WHERE id = $1', [data.id])
    /* eslint-disable camelcase */
      .then(({ bio_1, bio_2, bio_3 }) => {
        res.json(Object.assign({}, data, { bio: [bio_1, bio_2, bio_3] }));
      }))
    .catch(error => res.json({ error: error.message }));
  /* eslint-enable camelcase */
});

// add new recipient to the database
app.post('/api/recipient', (req, res) => {
  const { recipient } = req.body;
  bcrypt
    .hash(recipient.password, saltRounds)
    .then(hash => db.one(
      'INSERT INTO recipient (first_name, last_name, tel, photo, username, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [
        recipient.first_name,
        recipient.last_name,
        recipient.tel,
        recipient.photo,
        recipient.username,
        hash,
      ],
    ))
    .then(result => db.one(
      'INSERT INTO biography (recipient_id, bio_1, bio_2, bio_3) VALUES ($1, $2, $3, $4)RETURNING recipient_id',
      [result.id, recipient.bio_1, recipient.bio_2, recipient.bio_3],
    ))
    .then(result => res.json(result))
    .catch(error => res.json({ error: error.message }));
});

// Sends confirmation message via Twilio
const sendSMS = (name, tel) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;
  const client = require('twilio')(accountSid, authToken);
  const number = tel;
  client.messages
    .create({
      body: `${name} says thank you for your donation!`,
      from: fromNumber,
      to: number,
    })
    .then(message => console.log(message.sid))
    .done();
};

// add donation to the database
app.post('/api/donation', (req, res) => {
  const { donation } = req.body;
  return db
    .one(
      'INSERT INTO donation (recipient_id, donor_id, amount, stripe_id) VALUES ($1, $2, $3, $4) RETURNING id',
      [donation.recipient_id, donation.donor_id, donation.amount, donation.stripe_id],
    )
    .then((result) => {
      // the below code is commented out until we can add new donors and send text messages
      const json = {
        // recipient_name: donation.recipient_name,
        // donor_name: donation.donor_name,
        // amount: donation.amount,
        // transaction_id: result.id,
        transaction_id: result.id,
      };
      // sendSMS(donation.recipient_name, donation.tel);
      return res.json(json);
    })
    .catch(error => res.json({ error: error.message }));
});

// add new donor to the database
app.post('/api/donor', (req, res) => {
  const { donor } = req.body;
  bcrypt
    .hash(donor.password, saltRounds)
    .then(hash => db.one(
      'INSERT INTO donor (first_name, last_name, email, password, tel, stripe) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [donor.first_name, donor.last_name, donor.email, hash, donor.tel, donor.stripe],
    ))
    .then(result => res.json(result))
    .catch(error => res.json({ error: error.message }));
});

// retrieve all donations for recipient
app.get('/api/donations/:id', (req, res) => {
  const { id } = req.params;
  return db
    .any('SELECT SUM(amount) FROM donation WHERE recipient_id=$1', [id])
    .then(amounts => res.json(amounts))
    .catch(error => res.json({ error: error.message }));
});

app.use('/', (req, res) => {
  res.render('index');
});

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
