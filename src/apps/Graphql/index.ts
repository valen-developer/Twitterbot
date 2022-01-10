import { ApolloServer, gql } from "apollo-server-express";
import { Server } from "../API/server";
import { tweetResolvers } from "./Tweets/resolvers";
import { typeDefs as types } from "./Tweets/typedefs";

export const setApolloServer = async (apiServer: Server) => {
  const typeDefs = types;

  const resolvers = tweetResolvers;

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app: apiServer.app });
};
