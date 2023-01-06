const resolver = {
  Query: {
    books: async (parent, args, { bookService }) => await bookService.find(),
    book: async (parent, args, { bookService }) =>
      await bookService.findById(args.id),
    authors: async (parent, args, { authorService }) =>
      await authorService.find(),
    author: async (parent, args, { authorService }) =>
      await authorService.findById(args.id),
  },
  Book: {
    author: async (parent, args, { authorService }) =>
      await authorService.findById(parent.authorId.toString()),
  },
  Author: {
    books: async (parent, agrs, { bookService }) =>
      await bookService.find({ authorId: parent.id.toString() }),
  },
  Mutation: {
    createAuthor: async (parent, args, { authorService }) => {
      return await authorService.save(args);
    },
    createBook: async (parent, args, { bookService }) => {
      return await bookService.save(args);
    },
  },
};

module.exports = resolver;
