// const router = require("express").Router();
// const store = require("../db/db.json");
// const fs = require ("fs");
// const { json } = require("body-parser");


// // get notes from data base
// router.get("/notes", (req, res) => {
// let data = fs.readFileSync("./db/db.json");
// console.log(data)
// console.log(JSON.parse(data))
// res.json(JSON.parse(data))
// });

// //post not out of the data base
// router.post("/notes", (req, res) => {
//     console.log(data)
//     var data = req.body;
//     fs.writeFile("./db/db.json");
  


    
    
//     // store
//     // .addNotes(req.body)
//     // .then((note) => res.json(note))
//     // .catch((err) => res.status(500).json(err));
// });

// //delete not equal to params.id
//  router.delete("/notes/:note_id", (req, res) => {
//     store
//     .removeNote(req, params.note_id)
//     .then(() => res.json ({ok: true}))
//     .catch((err) => res.status(500).json(err))
//  });

//  module.exports = router;

const router = require("express").Router();
const store = require("../db/db.json");
const fs = require("fs");
const { json } = require("body-parser");
const { v4: uuidv4 } = require("uuid");
// get notes from data base
router.get("/notes", (req, res) => {
  let data = fs.readFileSync("./db/db.json");
  console.log(data);
  console.log(JSON.parse(data));
  res.json(JSON.parse(data));
});
//post not out of the data base
router.post("/notes", (req, res) => {
  console.log(req.body);
  console.log("saving note");
  var newPost = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      //converted the string into a javascript json object
      const parsedNotes = JSON.parse(data);
      //pushes the new review into the existing data object
      parsedNotes.push(newPost);
      //writing the new updates data back to the file and stringify
      fs.writeFile("./db/db.json", JSON.stringify(parsedNotes), (err) =>
        err
          ? console.error(err)
          : console.info("note has been added to database")
      );
    }
  });
  // store
  // .addNotes(req.body)
  // .then((note) => res.json(note))
  // .catch((err) => res.status(500).json(err));
});
//delete not equal to params.id
router.delete("/notes/:note_id", (req, res) => {
  console.log(req.params.note_id);
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      //converted the string into a javascript json object
      const parsedNotes = JSON.parse(data);
      //pushes the new review into the existing data object
      console.log(parsedNotes);
      const newNotes = parsedNotes.filter(
        (note) => note.id !== req.params.note_id
      );
      fs.writeFile("./db/db.json", JSON.stringify(newNotes), (err) =>
        err ? console.error(err) : console.info("note has been deleted")
      );
    }
  });
  //   store
  //     .removeNote(req, params.id)
  //     .then(() => res.json({ ok: true }))
  //     .catch((err) => res.status(500).json(err));
});
module.exports = router;

