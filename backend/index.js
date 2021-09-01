const { ApolloServer, gql } = require("apollo-server");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  })
  .catch(err => {
    console.log(err);
  });
