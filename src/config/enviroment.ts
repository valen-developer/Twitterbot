import { loadEnv } from "./loadEnv";
loadEnv();

export const enviroment = {
  port: process.env.PORT || "",
  twitterApi: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY || "",
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET || "",
    accessToken: process.env.TWITTER_ACCESS_TOKEN || "",
    accessTokenSecret: process.env.TWITTER_ACCESS_SECRET || "",
  },
  db: {
    uri: process.env.DATABASE_URI || `mongodb://localhost/twitter`,
    db: process.env.DB || "twitter",
    host: process.env.DATABASE_HOST || "host",
    user: process.env.DATABASE_USER || "admin",
    password: process.env.DATABASE_PASSWORD || "admin",
  },
};
