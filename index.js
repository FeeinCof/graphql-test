require("dotenv").config();
const connectDB = require("./connection/mongoose.connect");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemal/schemal");
const resolvers = require("./resolver/resolver");

const bookService = require("./services/book.service");
const authorService = require("./services/author.service");

const server = (apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    bookService,
    authorService,
  }),
}));

const startServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

app.listen(PORT, () => {
  connectDB();
  startServer();
  console.log(
    `App is listening on http://localhost:${PORT + server.graphqlPath}...`
  );
});

module.exports = app;
