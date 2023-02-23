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




//const store = require("../db/db.json");
//const fs = require ("fs");
//const { json } = require("body-parser");


//get notes from data base
// router.get("/notes", (req, res) => {
// let data = fs.readFileSync("./db/db.json");
// console.log(data)
// console.log(JSON.parse(data))
// res.json(JSON.parse(data))
// });

// //post not out of the data base
// router.post("/api/notes", (req, res) => {
//     var data = req.body;
//     fs.writeFile("./db/db.json");
//     console.log(data)
// });






//presents notes.html (2nd page)
// router.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/notes.html"))
// });

// //presents index.html to any other response (1st page)

// router.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// });



// //delete not equal to params.id
//  router.delete("/notes/:note_id", (req, res) => {
//     store
//     .removeNote(req, params.note_id)
//     .then(() => res.json ({ok: true}))
//     .catch((err) => res.status(500).json(err))
//  });




// Server to port
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`));


