




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 1111;

app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection setup
const pool = new Pool({
  user: 'azamp_target',
  host: '127.0.0.1',
  database: 'edb',
  password: 'azamp_target',
  port: 5435,
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

// Sample route to fetch data from PostgreSQL
app.get('/data', async (req, res) => {
  try {
    console.log('Fetching data');
    const result = await pool.query('SELECT * FROM dim_user'); // Replace 'your_table' with your actual table name
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Server Error');
  }
});

app.post("/login", async (req, res) => {
  try {
    const { user_name, password } = req.body; // Destructure username and password
    const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
    const result = await pool.query(query, [user_name, password]);

    if (!result.rows.length) {
      res.status(401).json({ message: "Invalid username/password" });
    } else {
      // User authenticated (modify as needed for your specific use case)
      res.status(200).json({ message: "Success" });
    }
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Server Error");
  }
});

app.post("/add-details", async (req, res) => {
  try {
    const { user_name, parent_name, domain_name } = req.body;

    const query = `
      INSERT INTO dim_user (user_name, parent_name, domain_name)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const result = await pool.query(query, [user_name, parent_name, domain_name]);

    if (result.rows.length) {
      res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
    } else {
      res.status(400).json({ message: "Failed to add details" });
    }
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Server Error");
  }
});

app.get('/user-details', async (req, res) => {
  try {
    const { user_name, parent_name, domain_name, category_name } = req.query;
    let query = 'SELECT user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
    const queryParams = [];

    if (user_name) {
      queryParams.push(user_name);
      query += ` AND user_name = $${queryParams.length}`;
    }
    if (parent_name) {
      queryParams.push(parent_name);
      query += ` AND parent_name = $${queryParams.length}`;
    }
    if (domain_name) {
      queryParams.push(domain_name);
      query += ` AND domain_name = $${queryParams.length}`;
    }
    if (category_name) {
      queryParams.push(category_name);
      query += ` AND category_name = $${queryParams.length}`;
    }

    const result = await pool.query(query, queryParams);

    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Server Error');
  }
});

// New Api to Be created. 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});