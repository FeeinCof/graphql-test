const mongoose = require("mongoose");

const Schemal = mongoose.Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: mongoose.Types.ObjectId,
  },
});

module.exports = mongoose.model("books", Schemal);
