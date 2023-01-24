const router = require ("express").Router();
 const path = require ("path");
// //presents notes.html (2nd page)
 router.get("/notes", (req, res) => {
 res.sendFile(path.join(__dirname, "../public/notes.html"))
 });

//presents index.html to any other response (1st page)

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;