require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 8080);

app.get('/api/recipients', (req, res) => {
  db.any(`SELECT * FROM recipient`)
    .then(data => res.json(data))
    .catch(error => res.json({ error: error.message }));
});

//adds a new recipient to the database
app.post('/api/recipient', (req, res) => {
  const { recipient } = req.body;
  bcrypt
    .hash(recipient.password, saltRounds)
    .then(function(hash) {
      return db.one(
        'INSERT INTO recipient (first_name, last_name, tel, photo, username, password, qrcode) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
        [
          recipient.first_name,
          recipient.last_name,
          recipient.tel,
          recipient.photo,
          recipient.username,
          hash,
          recipient.qrcode
        ]
      );
    })
    .then(result => {
      return db.one(
        'INSERT INTO biography (recipient_id, bio_1, bio_2, bio_3) VALUES ($1, $2, $3, $4)RETURNING recipient_id',
        [result.id, recipient.bio_1, recipient.bio_2, recipient.bio_3]
      );
    })
    .then(result => res.json(result))
    .catch(error => res.json({ error: error.message }));
});

//add donation to the database
app.post('/api/donation', (req, res) => {
  const { donation } = req.body;
  return db.one(
      'INSERT INTO donation (recipient_id, donor_id, amount, stripe_id) VALUES ($1, $2, $3, $4) RETURNING id',
      [
        donation.recipient_id,
        donation.donor_id,
        donation.amount,
        donation.stripe_id
      ]
    )
    .then(result => {
      const json = {
        recipient_name: donation.recipient_name,
        donor_name: donation.donor_name,
        amount: donation.amount,
        transaction_id: result.id
      };
      sendSMS(donation.recipient_name, donation.tel)
      return res.json(json);
    })
    .catch(error => res.json({ error: error.message }));
});

// Sends confirmation message via Twilio
const sendSMS = (first_name, tel) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;
  const client = require('twilio')(accountSid, authToken);
  const number = tel;
  client.messages
    .create({
      body: `${first_name} says thank you for your donation!`,
      from: fromNumber,
      to: number
    })
    .then(message => console.log(message.sid))
    .done();
};

app.use('/', (req, res) => {
  res.render('index');
});

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
