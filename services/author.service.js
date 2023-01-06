const Author = require("../models/Author");

const methods = {
  find: async (data) => await Author.find(data),
  findById: async (id) => await Author.findById(id).exec(),
  save: async (data) => {
    let newAuthor = new Author(data);
    return await newAuthor.save();
  },
};

module.exports = methods;
