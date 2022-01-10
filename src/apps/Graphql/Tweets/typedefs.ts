import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    tweets(filter: TweetFilter): [Tweet]
  }

  type Tweet {
    id: String!
    authorId: String!
    content: String!
    retweetCount: Int!
    favoriteCount: Int!
    createdAt: String!
    user: TwitterUser!
  }

  type TwitterUser {
    id: String!
    name: String!
    screenName: String!
  }

  input TweetFilter {
    content_contains: String
    content_starts_with: String
    content_ends_with: String
    createdAt_gt: String
    createdAt_lt: String
    createdAt_gte: String
    createdAt_lte: String
    retweetCount_gt: Int
    retweetCount_lt: Int
    retweetCount_gte: Int
    retweetCount_lte: Int
    favoriteCount_gt: Int
    favoriteCount_lt: Int
    favoriteCount_gte: Int
    favoriteCount_lte: Int
    user: TwitterUserFilter
  }

  input TwitterUserFilter {
    name_contains: String
    name_starts_with: String
    screenName_contains: String
    screenName_starts_with: String
  }
`;
