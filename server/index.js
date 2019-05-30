const express = require("express");
let app = express();
const bodyparser = require("body-parser");

const mongo = require("../database/index.js");
let port = 3008;

app.use(bodyparser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/reviews", (req, res) => {
  mongo.findAll({}, (err, reviews) => {
    if (err) {
      console.log("error inside findall: ", err);
    } else {
      console.log("server side get complete");
      res.send(reviews);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
