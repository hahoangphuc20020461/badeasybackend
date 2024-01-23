// const app = require('./app');
// const db = require('./config/db');
// const userModel = require('./model/usermodel');

// const port = 3001;

// app.get('/', (req, res) => {
//     res.send("hello hehe")
// });

// app.listen(port,() => {
//     console.log('listening on http://localhost:3001');
// });

import app from "./app.js";

const port = 3001

app.use('/', (req, res) => {
    res.send("hello")
})
