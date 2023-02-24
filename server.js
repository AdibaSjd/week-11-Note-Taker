const express = require('express');
const path = require('path');
const router = require ("express").Router();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
//const store = require("../db/db.json");
const fs = require ("fs");
//const { json } = require("body-parser");

//Port created
const PORT = process.env.PORT || 3001;
//Initialize app
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Server to port
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`));


