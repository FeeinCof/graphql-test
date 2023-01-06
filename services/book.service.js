const Book = require("../models/Book");

const methods = {
  find: async (data) => await Book.find(data),
  findById: async (id) => await Book.findById(id).exec(),
  save: async (data) => {
    let newBook = new Book(data);
    return await newBook.save();
  },
};

module.exports = methods;
