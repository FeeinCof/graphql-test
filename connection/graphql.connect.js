const app = require("express")();
const { ApolloServer } = require("apollo-server-express");
// Load schemal & resolver
const typeDefs = require("../schemal/schemal");
const resolvers = require("../resolver/resolver");

const server = (apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
}));

const startServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

module.exports = { startServer, server };
