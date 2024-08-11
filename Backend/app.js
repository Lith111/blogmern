const express = require('express')
require("dotenv").config();
const connect = require("./config/connnectToDb")
const app = express()
const port = process.env.PORT || 8000
app.use(express.json());
connect();
app.listen(port, () => console.log(`Example app listening on port ${port}!`))