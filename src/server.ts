import { ApolloServer } from "apollo-server";

import { resolvers } from "./resolvers"
import { schema } from "./schema"

const server = new ApolloServer({ schema, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});