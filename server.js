// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Sample route to fetch data from PostgreSQL
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user'); // Replace 'your_table' with your actual table name
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { user_name, password } = req.body; // Destructure username and password
//     const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
//     const result = await pool.query(query, [user_name, password]);

//     if (!result.rows.length) {
//       res.status(401).json({ message: "Invalid username/password" });
//     } else {
//       // User authenticated (modify as needed for your specific use case)
//       res.status(200).json({ message: "Success" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.post("/add-details", async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name } = req.body;

//     const query = `
//       INSERT INTO dim_user (user_name, parent_name, domain_name)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//     const result = await pool.query(query, [user_name, parent_name, domain_name]);

//     if (result.rows.length) {
//       res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
//     } else {
//       res.status(400).json({ message: "Failed to add details" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.get('/user-details', async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name, category_name } = req.query;
//     let query = 'SELECT user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
//     const queryParams = [];

//     if (user_name) {
//       queryParams.push(user_name);
//       query += ` AND user_name = $${queryParams.length}`;
//     }
//     if (parent_name) {
//       queryParams.push(parent_name);
//       query += ` AND parent_name = $${queryParams.length}`;
//     }
//     if (domain_name) {
//       queryParams.push(domain_name);
//       query += ` AND domain_name = $${queryParams.length}`;
//     }
//     if (category_name) {
//       queryParams.push(category_name);
//       query += ` AND category_name = $${queryParams.length}`;
//     }

//     const result = await pool.query(query, queryParams);

//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


//---------------------------------------------------------------
//new

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Sample route to fetch data from PostgreSQL
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user'); // Replace 'your_table' with your actual table name
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { user_name, password } = req.body; // Destructure username and password
//     const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
//     const result = await pool.query(query, [user_name, password]);

//     if (!result.rows.length) {
//       res.status(401).json({ message: "Invalid username/password" });
//     } else {
//       // User authenticated (modify as needed for your specific use case)
//       res.status(200).json({ message: "Success" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.post("/add-details", async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name } = req.body;

//     const query = `
//       INSERT INTO dim_user (user_name, parent_name, domain_name)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//     const result = await pool.query(query, [user_name, parent_name, domain_name]);

//     if (result.rows.length) {
//       res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
//     } else {
//       res.status(400).json({ message: "Failed to add details" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.get('/user-details', async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name, category_name } = req.query;
//     let query = 'SELECT user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
//     const queryParams = [];

//     if (user_name) {
//       queryParams.push(user_name);
//       query += ` AND user_name = $${queryParams.length}`;
//     }
//     if (parent_name) {
//       queryParams.push(parent_name);
//       query += ` AND parent_name = $${queryParams.length}`;
//     }
//     if (domain_name) {
//       queryParams.push(domain_name);
//       query += ` AND domain_name = $${queryParams.length}`;
//     }
//     if (category_name) {
//       queryParams.push(category_name);
//       query += ` AND category_name = $${queryParams.length}`;
//     }

//     const result = await pool.query(query, queryParams);

//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//---------------------------------------------------------------------
//new2 after using change_log

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Endpoint to add user details and log changes
// app.post("/add-details", async (req, res) => {
//   try {
//     const { user_dimid, user_name, parent_name, domain_name } = req.body;

//     // Begin a transaction to ensure atomicity
//     const client = await pool.connect();
//     try {
//       await client.query('BEGIN');

//       // Insert into dim_user table
//       // const insertQuery = `
//       //   INSERT INTO dim_user (user_name, parent_name, domain_name)
//       //   VALUES ($1, $2, $3)
//       //   RETURNING *;
//       // `;
//       // const insertValues = [user_name, parent_name, domain_name];
//       // const result = await client.query(insertQuery, insertValues);

//       const insertQuery = `
//       INSERT INTO dim_user (user_dimid, user_name, parent_name, domain_name)
//       VALUES ($1, $2, $3, $4)
//       RETURNING *;
//     `;
//     const insertValues = [user_dimid, user_name, parent_name, domain_name];
//     const result = await client.query(insertQuery, insertValues);
    

//       if (result.rows.length > 0) {
//         // Log changes into change_log table
//         const logEntries = [];


//         if (user_dimid) {
//           logEntries.push({
//             change_column: 'user_dimid',
//             old_value: '',
//             new_value: user_dimid
//           });
//         }
//         if (user_name) {
//           logEntries.push({
//             change_column: 'user_name',
//             old_value: null,
//             new_value: user_name
//           });
//         }
//         if (parent_name) {
//           logEntries.push({
//             change_column: 'parent_name',
//             old_value: null,
//             new_value: parent_name
//           });
//         }
//         if (domain_name) {
//           logEntries.push({
//             change_column: 'domain_name',
//             old_value: null,
//             new_value: domain_name
//           });
//         }

//         for (const entry of logEntries) {
//           const logQuery = `
//             INSERT INTO change_log (change_date, change_column, old_value, new_value)
//             VALUES (CURRENT_TIMESTAMP, $1, $2, $3);
//           `;
//           const logValues = [entry.change_column, entry.old_value, entry.new_value];
//           await client.query(logQuery, logValues);
//         }

//         await client.query('COMMIT');
//         res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
//       } else {
//         res.status(400).json({ message: "Failed to add details" });
//       }
//     } catch (err) {
//       await client.query('ROLLBACK');
//       console.error("Error executing transaction", err.stack);
//       res.status(500).send("Server Error");
//     } finally {
//       client.release();
//     }
//   } catch (err) {
//     console.error("Error connecting to database", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// // Sample route to fetch data from PostgreSQL (for testing purposes)
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// // Your other routes (e.g., login, fetching user details) remain unchanged
// // Ensure they handle requests properly and follow your application's logic

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// -----------------------new3-----------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Endpoint to add user details and log changes
// app.post('/add-details', async (req, res) => {
//   try {
//     const { user_dimid, user_name, parent_name, domain_name } = req.body;

//     // Begin a transaction to ensure atomicity
//     const client = await pool.connect();
//     try {
//       await client.query('BEGIN');

//       // Insert into dim_user table with ON CONFLICT to handle duplicates
//       const insertQuery = `
//         INSERT INTO dim_user (user_dimid, user_name, parent_name, domain_name)
//         VALUES ($1, $2, $3, $4)
//         ON CONFLICT (user_dimid) DO NOTHING
//         RETURNING *;
//       `;
//       const insertValues = [user_dimid, user_name, parent_name, domain_name];
//       const result = await client.query(insertQuery, insertValues);

//       if (result.rows.length > 0) {
//         // Log changes into change_log table
//         const logEntries = [];

//         if (user_dimid) {
//           logEntries.push({
//             change_column: 'user_dimid',
//             old_value: '',
//             new_value: user_dimid,
//           });
//         }
//         if (user_name) {
//           logEntries.push({
//             change_column: 'user_name',
//             old_value: null,
//             new_value: user_name,
//           });
//         }
//         if (parent_name) {
//           logEntries.push({
//             change_column: 'parent_name',
//             old_value: null,
//             new_value: parent_name,
//           });
//         }
//         if (domain_name) {
//           logEntries.push({
//             change_column: 'domain_name',
//             old_value: null,
//             new_value: domain_name,
//           });
//         }

//         for (const entry of logEntries) {
//           const logQuery = `
//             INSERT INTO change_log (change_date, change_column, old_value, new_value)
//             VALUES (CURRENT_TIMESTAMP, $1, $2, $3);
//           `;
//           const logValues = [entry.change_column, entry.old_value, entry.new_value];
//           await client.query(logQuery, logValues);
//         }

//         await client.query('COMMIT');
//         res.status(201).json({ message: 'Details added successfully', user: result.rows[0] });
//       } else {
//         await client.query('ROLLBACK');
//         res.status(400).json({ message: 'Failed to add details or duplicate entry' });
//       }
//     } catch (err) {
//       await client.query('ROLLBACK');
//       console.error('Error executing transaction', err.stack);
//       res.status(500).send('Server Error');
//     } finally {
//       client.release();
//     }
//   } catch (err) {
//     console.error('Error connecting to database', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// // Sample route to fetch data from PostgreSQL (for testing purposes)
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// // Your other routes (e.g., login, fetching user details) remain unchanged
// // Ensure they handle requests properly and follow your application's logic

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


//-----------------------new4---------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Sample route to fetch data from PostgreSQL (for testing purposes)
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { user_name, password } = req.body; // Destructure username and password
//     const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
//     const result = await pool.query(query, [user_name, password]);

//     if (!result.rows.length) {
//       res.status(401).json({ message: "Invalid username/password" });
//     } else {
//       // User authenticated (modify as needed for your specific use case)
//       res.status(200).json({ message: "Success" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.post("/add-details", async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name } = req.body;

//     const query = `
//       INSERT INTO dim_user (user_name, parent_name, domain_name)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//     const result = await pool.query(query, [user_name, parent_name, domain_name]);

//     if (result.rows.length) {
//       res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
//     } else {
//       res.status(400).json({ message: "Failed to add details" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// // Endpoint to fetch user details and log changes
// app.get('/user-details', async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name, category_name } = req.query;
//     let query = 'SELECT user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
//     const queryParams = [];

//     const filters = { user_name, parent_name, domain_name, category_name };

//     // Filter the query based on provided parameters
//     Object.keys(filters).forEach((key) => {
//       if (filters[key]) {
//         queryParams.push(filters[key]);
//         query += ` AND ${key} = $${queryParams.length}`;
//       }
//     });

//     const result = await pool.query(query, queryParams);

//     if (result.rows.length > 0) {
//       // Log changes into change_log table
//       const client = await pool.connect();
//       try {
//         await client.query('BEGIN');

//         for (const key of Object.keys(filters)) {
//           if (filters[key]) {
//             const logQuery = `
//               INSERT INTO change_log (change_date, change_column, old_value, new_value)
//               VALUES (CURRENT_TIMESTAMP, $1, $2, $3);
//             `;
//             const logValues = [key, null, filters[key]]; // Assuming no old_value for new searches
//             await client.query(logQuery, logValues);
//           }
//         }

//         await client.query('COMMIT');
//       } catch (err) {
//         await client.query('ROLLBACK');
//         console.error('Error logging changes', err.stack);
//         res.status(500).send('Server Error');
//       } finally {
//         client.release();
//       }
//     }

//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// // Other routes...

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//new5

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Sample route to fetch data from PostgreSQL (for testing purposes)
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });


// app.post("/login", async (req, res) => {
//   try {
//     const { user_name, password } = req.body; // Destructure username and password
//     const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
//     const result = await pool.query(query, [user_name, password]);

//     if (!result.rows.length) {
//       res.status(401).json({ message: "Invalid username/password" });
//     } else {
//       // User authenticated (modify as needed for your specific use case)
//       res.status(200).json({ message: "Success" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.post("/add-details", async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name } = req.body;

//     const query = `
//       INSERT INTO dim_user (user_name, parent_name, domain_name)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//     const result = await pool.query(query, [user_name, parent_name, domain_name]);

//     if (result.rows.length) {
//       res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
//     } else {
//       res.status(400).json({ message: "Failed to add details" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// // Endpoint to fetch user details and log changes
// app.get('/user-details', async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name, category_name } = req.query;
//     let query = 'SELECT user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
//     const queryParams = [];

//     const filters = { user_name, parent_name, domain_name, category_name };

//     // Filter the query based on provided parameters
//     Object.keys(filters).forEach((key) => {
//       if (filters[key]) {
//         queryParams.push(filters[key]);
//         query += ` AND ${key} = $${queryParams.length}`;
//       }
//     });

//     const result = await pool.query(query, queryParams);

//     if (result.rows.length > 0) {
//       // Log changes into change_log table
//       const client = await pool.connect();
//       try {
//         await client.query('BEGIN');

//         for (const key of Object.keys(filters)) {
//           if (filters[key]) {
//             // Check if there is an existing entry in change_log
//             const oldValueQuery = `
//               SELECT new_value 
//               FROM change_log 
//               WHERE change_column = $1 
//               ORDER BY change_date DESC 
//               LIMIT 1;
//             `;
//             const oldValueResult = await client.query(oldValueQuery, [key]);
//             const old_value = oldValueResult.rows.length ? oldValueResult.rows[0].new_value : null;

//             const logQuery = `
//               INSERT INTO change_log (change_date, change_column, old_value, new_value)
//               VALUES (CURRENT_TIMESTAMP, $1, $2, $3);
//             `;
//             const logValues = [key, old_value, filters[key]];
//             await client.query(logQuery, logValues);
//           }
//         }

//         await client.query('COMMIT');
//       } catch (err) {
//         await client.query('ROLLBACK');
//         console.error('Error logging changes', err.stack);
//         res.status(500).send('Server Error');
//       } finally {
//         client.release();
//       }
//     }

//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// // Other routes...

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//------------------new after user_dimid---------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Sample route to fetch data from PostgreSQL (for testing purposes)
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { user_name, password } = req.body; // Destructure username and password
//     const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
//     const result = await pool.query(query, [user_name, password]);

//     if (!result.rows.length) {
//       res.status(401).json({ message: "Invalid username/password" });
//     } else {
//       // User authenticated (modify as needed for your specific use case)
//       res.status(200).json({ message: "Success" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.post("/add-details", async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name } = req.body;

//     const query = `
//       INSERT INTO dim_user (user_name, parent_name, domain_name)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//     const result = await pool.query(query, [user_name, parent_name, domain_name]);

//     if (result.rows.length) {
//       res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
//     } else {
//       res.status(400).json({ message: "Failed to add details" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// // Endpoint to fetch user details and log changes
// app.get('/user-details', async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name, category_name } = req.query;

//     let query = 'SELECT user_dimid, user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
//     const queryParams = [];

//     const filters = { user_name, parent_name, domain_name, category_name };

//     // Filter the query based on provided parameters
//     Object.keys(filters).forEach((key) => {
//       if (filters[key]) {
//         queryParams.push(filters[key]);
//         query += ` AND ${key} = $${queryParams.length}`;
//       }
//     });

//     const result = await pool.query(query, queryParams);

//     if (result.rows.length > 0) {
//       // Log changes into change_log table
//       const client = await pool.connect();
//       try {
//         await client.query('BEGIN');

//         for (const row of result.rows) {
//           const { user_dimid, user_name, parent_name, domain_name, category_name } = row;

//           if (user_dimid) {
//             await logChange(client, user_dimid, 'category_name', category_name);
//             await logChange(client, user_dimid, 'user_name', user_name);
//             await logChange(client, user_dimid, 'parent_name', parent_name);
//             await logChange(client, user_dimid, 'domain_name', domain_name);
//           }
//         }

//         await client.query('COMMIT');
//       } catch (err) {
//         await client.query('ROLLBACK');
//         console.error('Error logging changes', err.stack);
//         res.status(500).send('Server Error');
//       } finally {
//         client.release();
//       }
//     }

//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// // Function to log change for a specific column
// async function logChange(client, user_dimid, change_column, new_value) {
//   try {
//     // Check if there is an existing entry in change_log
//     const oldValueQuery = `
//       SELECT new_value
//       FROM change_log
//       WHERE change_column = $1 AND user_dimid = $2
//       ORDER BY change_date DESC
//       LIMIT 1;
//     `;
//     const oldValueResult = await client.query(oldValueQuery, [change_column, user_dimid]);
//     const old_value = oldValueResult.rows.length ? oldValueResult.rows[0].new_value : null;

//     const logQuery = `
//       INSERT INTO change_log (change_date, change_column, old_value, new_value, user_dimid)
//       VALUES (CURRENT_TIMESTAMP, $1, $2, $3, $4);
//     `;
//     const logValues = [change_column, old_value, new_value, user_dimid];
//     await client.query(logQuery, logValues);
//   } catch (error) {
//     console.error('Error logging change', error.stack);
//     throw error; // Propagate error for centralized error handling
//   }
// }

// // Other routes...

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


//new 

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Sample route to fetch data from PostgreSQL (for testing purposes)
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { user_name, password } = req.body; // Destructure username and password
//     const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
//     const result = await pool.query(query, [user_name, password]);

//     if (!result.rows.length) {
//       res.status(401).json({ message: "Invalid username/password" });
//     } else {
//       // User authenticated (modify as needed for your specific use case)
//       res.status(200).json({ message: "Success" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.post("/add-details", async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name } = req.body;

//     const query = `
//       INSERT INTO dim_user (user_name, parent_name, domain_name)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//     const result = await pool.query(query, [user_name, parent_name, domain_name]);

//     if (result.rows.length) {
//       res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
//     } else {
//       res.status(400).json({ message: "Failed to add details" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// // Endpoint to fetch user details and log changes
// app.get('/user-details', async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name, category_name } = req.query;
//     let query = 'SELECT user_dimid, user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
//     const queryParams = [];

//     const filters = { user_name, parent_name, domain_name, category_name };

//     // Filter the query based on provided parameters
//     Object.keys(filters).forEach((key) => {
//       if (filters[key]) {
//         queryParams.push(filters[key]);
//         query += ` AND ${key} = $${queryParams.length}`;
//       }
//     });

//     const result = await pool.query(query, queryParams);

//     if (result.rows.length > 0) {
//       // Log changes into change_log table
//       const client = await pool.connect();
//       try {
//         await client.query('BEGIN');

//         for (const key of Object.keys(filters)) {
//           if (filters[key]) {
//             for (const row of result.rows) {
//               // Check if there is an existing entry in change_log
//               const oldValueQuery = `
//                 SELECT new_value, user_dimid
//                 FROM change_log
//                 WHERE change_column = $1 AND user_dimid = $2
//                 ORDER BY change_date DESC
//                 LIMIT 1;
//               `;
//               const oldValueResult = await client.query(oldValueQuery, [key, row.user_dimid]);
//               const old_value = oldValueResult.rows.length ? oldValueResult.rows[0].new_value : null;

//               const logQuery = `
//                 INSERT INTO change_log (change_date, change_column, old_value, new_value, user_dimid)
//                 VALUES (CURRENT_TIMESTAMP, $1, $2, $3, $4);
//               `;
//               const logValues = [key, old_value, filters[key], row.user_dimid];
//               await client.query(logQuery, logValues);
//             }
//           }
//         }

//         await client.query('COMMIT');
//       } catch (err) {
//         await client.query('ROLLBACK');
//         console.error('Error logging changes', err.stack);
//         res.status(500).send('Server Error');
//       } finally {
//         client.release();
//       }
//     }

//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// // Other routes...

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//new2

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Sample route to fetch data from PostgreSQL (for testing purposes)
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { user_name, password } = req.body; // Destructure username and password
//     const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
//     const result = await pool.query(query, [user_name, password]);

//     if (!result.rows.length) {
//       res.status(401).json({ message: "Invalid username/password" });
//     } else {
//       // User authenticated (modify as needed for your specific use case)
//       res.status(200).json({ message: "Success" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.post("/add-details", async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name } = req.body;

//     const query = `
//       INSERT INTO dim_user (user_name, parent_name, domain_name)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//     const result = await pool.query(query, [user_name, parent_name, domain_name]);

//     if (result.rows.length) {
//       res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
//     } else {
//       res.status(400).json({ message: "Failed to add details" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// // Endpoint to fetch user details and log changes
// app.get('/user-details', async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name, category_name } = req.query;
//     let query = 'SELECT user_dimid, user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
//     const queryParams = [];

//     const filters = { user_name, parent_name, domain_name, category_name };

//     // Filter the query based on provided parameters
//     Object.keys(filters).forEach((key) => {
//       if (filters[key]) {
//         queryParams.push(filters[key]);
//         query += ` AND ${key} = $${queryParams.length}`;
//       }
//     });

//     const result = await pool.query(query, queryParams);

//     if (result.rows.length > 0) {
//       // Log changes into change_log table
//       const client = await pool.connect();
//       try {
//         await client.query('BEGIN');

//         for (const key of Object.keys(filters)) {
//           if (filters[key]) {
//             // Check if there is an existing entry in change_log
//             const oldValueQuery = `
//               SELECT new_value, user_dimid
//               FROM change_log
//               WHERE change_column = $1
//               ORDER BY change_date DESC
//               LIMIT 1;
//             `;
//             const oldValueResult = await client.query(oldValueQuery, [key]);
//             const old_value = oldValueResult.rows.length ? oldValueResult.rows[0].new_value : null;
//             const user_dimid = result.rows[0].user_dimid; // Get user_dimid from the query result

//             const logQuery = `
//               INSERT INTO change_log (change_date, change_column, old_value, new_value, user_dimid)
//               VALUES (CURRENT_TIMESTAMP, $1, $2, $3, $4);
//             `;
//             const logValues = [key, old_value, filters[key], user_dimid];
//             await client.query(logQuery, logValues);
//           }
//         }

//         await client.query('COMMIT');
//       } catch (err) {
//         await client.query('ROLLBACK');
//         console.error('Error logging changes', err.stack);
//         res.status(500).send('Server Error');
//       } finally {
//         client.release();
//       }
//     }

//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// // Other routes...

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//new3

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 1111;

// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//   user: 'azamp_target',
//   host: '127.0.0.1',
//   database: 'edb',
//   password: 'azamp_target',
//   port: 5435,
// });

// pool.on('connect', () => {
//   console.log('Connected to the PostgreSQL database');
// });

// // Sample route to fetch data from PostgreSQL (for testing purposes)
// app.get('/data', async (req, res) => {
//   try {
//     console.log('Fetching data');
//     const result = await pool.query('SELECT * FROM dim_user');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { user_name, password } = req.body;
//     const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
//     const result = await pool.query(query, [user_name, password]);

//     if (!result.rows.length) {
//       res.status(401).json({ message: "Invalid username/password" });
//     } else {
//       res.status(200).json({ message: "Success" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// app.post("/add-details", async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name } = req.body;

//     const query = `
//       INSERT INTO dim_user (user_name, parent_name, domain_name)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//     const result = await pool.query(query, [user_name, parent_name, domain_name]);

//     if (result.rows.length) {
//       res.status(201).json({ message: "Details added successfully", user: result.rows[0] });
//     } else {
//       res.status(400).json({ message: "Failed to add details" });
//     }
//   } catch (err) {
//     console.error("Error executing query", err.stack);
//     res.status(500).send("Server Error");
//   }
// });

// // Endpoint to fetch user details and log changes
// app.get('/user-details', async (req, res) => {
//   try {
//     const { user_name, parent_name, domain_name, category_name } = req.query;
//     let query = 'SELECT user_dimid, user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
//     const queryParams = [];

//     const filters = { user_name, parent_name, domain_name, category_name };

//     // Filter the query based on provided parameters
//     Object.keys(filters).forEach((key) => {
//       if (filters[key]) {
//         queryParams.push(filters[key]);
//         query += ` AND ${key} = $${queryParams.length}`;
//       }
//     });

//     const result = await pool.query(query, queryParams);

//     if (result.rows.length > 0) {
//       // Log changes into change_log table for each user_dimid
//       const client = await pool.connect();
//       try {
//         await client.query('BEGIN');

//         // Iterate over each row from dim_user result
//         for (const row of result.rows) {
//           const user_dimid = row.user_dimid;

//           // Check and log changes for each filter parameter
//           for (const key of Object.keys(filters)) {
//             if (filters[key]) {
//               // Get the latest entry from change_log for the specific user_dimid and change_column
//               const oldValueQuery = `
//                 SELECT new_value
//                 FROM change_log
//                 WHERE change_column = $1 AND user_dimid = $2
//                 ORDER BY change_date DESC
//                 LIMIT 1;
//               `;
//               const oldValueResult = await client.query(oldValueQuery, [key, user_dimid]);
//               const old_value = oldValueResult.rows.length ? oldValueResult.rows[0].new_value : null;

//               // Insert new log entry into change_log
//               const logQuery = `
//                 INSERT INTO change_log (change_date, change_column, old_value, new_value, user_dimid)
//                 VALUES (CURRENT_TIMESTAMP, $1, $2, $3, $4);
//               `;
//               const logValues = [key, old_value, filters[key], user_dimid];
//               await client.query(logQuery, logValues);
//             }
//           }
//         }

//         await client.query('COMMIT');
//       } catch (err) {
//         await client.query('ROLLBACK');
//         console.error('Error logging changes', err.stack);
//         res.status(500).send('Server Error');
//       } finally {
//         client.release();
//       }
//     }

//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error executing query', err.stack);
//     res.status(500).send('Server Error');
//   }
// });

// // Other routes...

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//newww

// ... other routes (unchanged)

// Endpoint to fetch user details and log changes

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

// Sample route to fetch data from PostgreSQL (for testing purposes)
app.get('/data', async (req, res) => {
  try {
    console.log('Fetching data');
    const result = await pool.query('SELECT * FROM dim_user');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Server Error');
  }
});

app.post("/login", async (req, res) => {
  try {
    const { user_name, password } = req.body;
    const query = 'SELECT * FROM dim_user WHERE user_name = $1 AND password = $2';
    const result = await pool.query(query, [user_name, password]);

    if (!result.rows.length) {
      res.status(401).json({ message: "Invalid username/password" });
    } else {
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

// Endpoint to fetch user details and log changes
app.get('/user-details', async (req, res) => {
  try {
    const { user_name, parent_name, domain_name, category_name } = req.query;
    let query = 'SELECT user_dimid, user_name, parent_name, domain_name, category_name FROM dim_user WHERE 1=1';
    const queryParams = [];

    const filters = { user_name, parent_name, domain_name, category_name };

    // Filter the query based on provided parameters
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        queryParams.push(filters[key]);
        query += ` AND ${key} = $${queryParams.length}`;
      }
    });

    const result = await pool.query(query, queryParams);

    if (result.rows.length > 0) {
      // Log changes into change_log table for each user_dimid
      const client = await pool.connect();
      try {
        await client.query('BEGIN');

        // Iterate over each row from dim_user result
        for (const row of result.rows) {
          const user_dimid = row.user_dimid;

          // Check and log changes for each filter parameter
          for (const key of Object.keys(filters)) {
            if (filters[key]) {
              // Get the latest entry from change_log for the specific user_dimid and change_column
              const oldValueQuery = `
                SELECT new_value
                FROM change_log
                WHERE change_column = $1 AND user_dimid = $2
                ORDER BY change_date DESC
                LIMIT 1;
              `;
              const oldValueResult = await client.query(oldValueQuery, [key, user_dimid]);
              const old_value = oldValueResult.rows.length ? oldValueResult.rows[0].new_value : null;

              // Update old value only if the current filter value is different from the latest new_value
              if (filters[key] !== old_value) {
                const logQuery = `
                  INSERT INTO change_log (change_date, change_column, old_value, new_value, user_dimid)
                  VALUES (CURRENT_TIMESTAMP, $1, $2, $3, $4);
                `;
                const logValues = [key, old_value, filters[key], user_dimid];
                await client.query(logQuery, logValues);
              }
            }
          }
        }

        await client.query('COMMIT');
      } catch (err) {
        await client.query('ROLLBACK');
        console.error('Error logging changes', err.stack);
        res.status(500).send('Server Error');
      } finally {
        client.release();
      }
    }

    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Server Error');
  }
});

// Other routes...

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
