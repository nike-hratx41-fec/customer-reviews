const express = require("express");
let app = express();
const bodyparser = require("body-parser");

const mongo = require("../database/index");
let port = 3000;

app.use(bodyparser.json());
app.use(express.static("../client/dist/index.html"));

// app.get("/reviews", (req, res) => {
//   mongo.findAll({}, (err, reviews) => {
//     if (err) {
//       console.log("error inside findall: ", err);
//     } else {
//       // console.log(reviews);
//       res.send(reviews);
//     }
//   });

// });

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Customer Reviews</title>
//   </head>

//   <body>
//     <div id="customer-reviews"> CHECKING</div>

//     <script type="text/javascript" src="bundle.js"></script>
//   </body>
// </html>
