const mongoose = require("mongoose");
const reviews = require("../../shoe-data-generator/shoeData.json");
mongoose.connect("mongodb://localhost/fike");

let reviewSchema = mongoose.Schema({
  reviews: [
    {
      user: String,
      date: String,
      stars: String,
      title: String,
      description: String
    }
  ]
});

let customerReview = mongoose.model("customerReview", reviewSchema);

let save = (file, callBack) => {
  customerReview.insertMany(file, (err, res) => {
    if (err) {
      callBack(err, null);
    } else {
      callBack(null, res);
    }
  });
};

let findAll = (obj, callBack) => {
  Repo.find(obj, function(err, docs) {
    if (err) {
      console.log("I AM GETTING AN ERRO");
    } else {
      callBack(null, docs);
    }
  });
};

//save(reviews);

module.exports.findAll = findAll;
module.exports.save = save;
