import { IOC } from "dic-ioc";
import { TweetCreator } from "../../context/Tweet/application/TweetCreator";
import { TweetFecher } from "../../context/Tweet/application/TweetFecher";
import { TweetFinder } from "../../context/Tweet/application/TweetFinder";

import { Repositories } from "./repositories.injection";
import { Utils } from "./utils.injection";

export enum TweetUseCases {
  TweetFetcher = "TweetFetcher",
  TweetCreator = "TweetCreator",
  TweetFinder = "TweetFinder",
}

export const injectTweetUseCases = (container: IOC) => {
  const tweetCreator = new TweetCreator(
    container.get(Repositories.TweetRepository)
  );

  container.setService(TweetUseCases.TweetCreator, () => tweetCreator);

  container.setService(
    TweetUseCases.TweetFetcher,
    (c) => new TweetFecher(c.get(Utils.TwitterClient), tweetCreator)
  );

  container.setService(
    TweetUseCases.TweetFinder,
    (c) =>
      new TweetFinder(
        c.get(Repositories.TweetRepository),
        c.get(Utils.QueryBuilder)
      )
  );
};
