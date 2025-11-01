const fs = require('fs');
const http = require('http');
const sql = require('mysql2');

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});

connection.connect(err => {
  if(err){
    console.error("Unable to connect to MySQL", err);
  }else{
    console.log("MySQL connection established");
  }
});

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.end('Success');
    }
});

server.listen(2170, "0.0.0.0", () => {
    console.log("Server is listening on port 2170");
});

// /Users/adekunlemichael/documents/code/dummyProject.  /home/ubuntu.  