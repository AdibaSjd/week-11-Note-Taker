const router = require("express").Router();
const store = require("../db/db.json");
const fs = require ("fs");
const { json } = require("body-parser");


// get notes from data base
router.get("/notes", (req, res) => {
let data = fs.readFileSync("./db/db.json");
console.log(data)
console.log(JSON.parse(data))
res.json(JSON.parse(data))
});

//post not out of the data base
router.post("/notes", (req, res) => {
    console.log(data)
    var data = req.body;
    fs.writeFile("./db/db.json");
  


    
    
    // store
    // .addNotes(req.body)
    // .then((note) => res.json(note))
    // .catch((err) => res.status(500).json(err));
});

//delete not equal to params.id
 router.delete("/notes/:note_id", (req, res) => {
    store
    .removeNote(req, params.note_id)
    .then(() => res.json ({ok: true}))
    .catch((err) => res.status(500).json(err))
 });

 module.exports = router;

