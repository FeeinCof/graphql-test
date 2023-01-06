const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

module.exports = mongoose.model("authors", Schema);
