// app.js
const mysql = require('mysql2');

const mysql = require('mysql2');


// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'base1'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
  
// Record the end time
const endTime = new Date();
  
// Calculate the time taken to connect
const timeTaken = endTime - startTime;
console.log(`Conectado CONEXION BASICA Tiempo de ejecucion: ${timeTaken} ms`);

  // Example query
  connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  });

  // Close the connection
  connection.end();
});



const mysql = require('mysql2/promise');

//base de datos por promesas

async function main() {
  try {
    // Connect to the database using promises
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'base1'
    });
    
    console.log('Connected to MySQL Database!');

    // Record the end time
const endTime = new Date();
  
// Calculate the time taken to connect
const timeTaken = endTime - startTime;
console.log(`Conectado CONEXION POR PROMESAS Tiempo de ejecucion: ${timeTaken} ms`);

    
    // Execute a query using promise
    const [rows, fields] = await connection.execute('SELECT * FROM users');
    console.log('Query Result:', rows);
    
    // Close the connection
    await connection.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

main();


// Record the start time
const startTime = new Date();

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'base1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Record the end time
const endTime = new Date();
  
// Calculate the time taken to connect
const timeTaken = endTime - startTime;
console.log(`Conectado CONEXION POOL Tiempo de ejecucion: ${timeTaken} ms`);


// Query the database using a pooled connection
pool.query('SELECT * FROM users', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});


