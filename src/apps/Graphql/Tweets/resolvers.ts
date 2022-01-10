import { DIC } from "../../../config/dic/DIC";
import { TweetUseCases } from "../../../config/dic/tweetUseCases.injection";
import { TweetFinder } from "../../../context/Tweet/application/TweetFinder";
import { TweetQuery } from "../../../context/Tweet/domain/TweetQuey";

export const tweetResolvers = {
  Query: {
    tweets: async (root: any, data: { filter: TweetQuery | any }) => {
      const query = buildQuery(data.filter);
      const container = DIC.instance().container;
      const tweetFinder: TweetFinder = container.get(TweetUseCases.TweetFinder);
      const tweets = await tweetFinder.findByQuery(query);
      return tweets.map((tweet) => tweet.toJson());
    },
  },
};

const buildQuery = (filter: TweetQuery | any) => {
  const query: TweetQuery = {
    content_contains: filter.content_contains,
    content_starts_with: filter.content_starts_with,
    content_ends_with: filter.content_ends_with,
    createdAt_gt: filter.createdAt_gt,
    createdAt_lt: filter.createdAt_lt,
    createdAt_gte: filter.createdAt_gte,
    createdAt_lte: filter.createdAt_lte,
    retweetCount_gt: filter.retweetCount_gt,
    retweetCount_lt: filter.retweetCount_lt,
    retweetCount_gte: filter.retweetCount_gte,
    retweetCount_lte: filter.retweetCount_lte,
    favoriteCount_gt: filter.favoriteCount_gt,
    favoriteCount_lt: filter.favoriteCount_lt,
    favoriteCount_gte: filter.favoriteCount_gte,
    "user.name_contains": filter.user.name_contains,
    "user.name_starts_with": filter.user.name_starts_with,
    "user.screenName_contains": filter.user.screenName_contains,
    "user.screenName_starts_with": filter.user.screenName_starts_with,
  };

  return query;
};
