import { IOC } from "dic-ioc";
import { MongoQueryBuilder } from "../../context/Shared/infrastructure/MongoQueryBuilder";
import { TwitterClientV2 } from "../../context/Tweet/infrastructure/TwitterClientV2";
export enum Utils {
  "TwitterClient" = "TwitterClient",
  "QueryBuilder" = "QueryBuilder",
}

export const injectUtils = (container: IOC) => {
  container.setService(Utils.TwitterClient, () => new TwitterClientV2());

  container.setService(Utils.QueryBuilder, (c) => new MongoQueryBuilder());
};
