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
})

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 8080);



app.use('/', (req, res) => {
  res.render('index');
});

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
});

