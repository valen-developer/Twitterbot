import { IOC } from "dic-ioc";
import { MongoTweetRepository } from "../../context/Tweet/infrastructure/MongoTweetRepository";

export enum Repositories {
  TweetRepository = "TweetRepository",
}

export const injectRepositories = (container: IOC) => {
  container.setService(
    Repositories.TweetRepository,
    () => new MongoTweetRepository()
  );
};
