const express = require("express");
let app = express();
const bodyparser = require("body-parser");
//const shoeDataGenerator = require("../../shoe-data-generator");
const mongo = require("../database/index");
let port = 3008;

app.use(bodyparser.json());
app.use(express.static(__dirname + "/../client/dist"));

// app.get("/reviews", (req, res) => {
//   mongo.findAll({}, (err, response) => {
//     if (err) {
//       console.log("error inside findall: ", err);
//     } else {
//       res.send(response);
//     }
//   });
// });

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
