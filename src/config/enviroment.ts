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
  elasticSearch: {
    url: process.env.ELASTICSEARCH_URL || "",
  },
};
