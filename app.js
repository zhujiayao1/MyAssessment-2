//RESTful API

//This JS file is the a continuation of Part 1.
//So the first few lines of this file are the same as those in the "crowdfunding_db.js" file which in Part1

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// statics，CSS、JavaScript
app.use(express.static('public'));

// router
app.get('/', (req, res) => {
  //index.html
  res.sendFile(__dirname + '/Part3/index.html');
});


// Create a database connection.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crowdfunding_db'
});

// Establish a database connection.
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// To start an Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//fundraisers
app.get('/fundraisers', (req, res) => {
  const query = `
    SELECT * FROM fundraiser;
  `;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


//search by categorie name
app.get('/search_by_cName', (req, res) => {
  const categorieName = req.query.cName
  const query = `
	SELECT fundraiser.*
	FROM fundraiser
	JOIN category ON fundraiser.category_id = category.category_id
	WHERE category.name = ?;
  `;
  connection.query(query, categorieName, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//search by city
app.get('/search_by_city', (req, res) => {
  const city = req.query.city; 
  const query = `
    SELECT *
    FROM fundraiser
    WHERE city = ?;
  `;
  connection.query(query, city, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//search fundraiser by id
app.get('/fundraiser/:id', (req, res) => {
  const fundraiserId = req.params.id;
  const query = `
    SELECT *
    FROM fundraiser
    WHERE fundraiser_id = ?;
  `;
  connection.query(query, fundraiserId, (err, results) => {
    if (err) throw err;
    res.json(results); 
  });
});

// Err exec
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Close db
process.on('SIGINT', () => {
  connection.end(err => {
    if (err) console.error('Error closing the connection:', err.stack);
    console.log('Closed the database connection.');
    process.exit();
  });
});
