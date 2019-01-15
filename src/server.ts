import "reflect-metadata";

import { ApolloServer } from "apollo-server";

import * as path from "path";

import { buildSchema } from "type-graphql";

const PORT = process.env.PORT || 5437;

export async function bootstrap() {
  const schema = await buildSchema({
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    resolvers: [__dirname + "/**/*.resolvers.js"]
  });
  const server = new ApolloServer({
    playground: true,
    schema
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, GrapQL playground is availiable at "${url}`);
}

bootstrap();
