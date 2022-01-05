import { Request, Response } from "express";
import { container } from "../../..";
import { TweetUseCases } from "../../../config/dic/tweetUseCases.injection";
import { MongoQueryBuilder } from "../../../context/Shared/infrastructure/MongoQueryBuilder";
import { TweetFinder } from "../../../context/Tweet/application/TweetFinder";
import { TweetQuery } from "../../../context/Tweet/domain/TweetQuey";
import { httpErrorHandler } from "../helpers/httpErrorHandler";
import { Controller } from "./controller.interface";

export class SearchTweetsController implements Controller {
  public async run(req: Request, res: Response): Promise<void> {
    const query = req.query;

    const sort = (query.sort_by as string) ?? "createAt";
    const order = (query.order as string) ?? "desc";
    const size = Number((query.size as string) ?? 10);
    const from = Number((query.from as string) ?? 0);

    const q: TweetQuery = {
      content_contains: query.content_contains as string,
      content_starts_with: query.content_starts_with as string,
      content_ends_with: query.content_ends_with as string,
      createdAt_gt: new Date(query.createdAt_gt as string),
      createdAt_lt: new Date(query.createdAt_lt as string),
      createdAt_gte: new Date(query.createdAt_gte as string),
      createdAt_lte: new Date(query.createdAt_lte as string),
      retweetCount_gt: Number(query.retweetCount_gt as string),
      retweetCount_lt: Number(query.retweetCount_lt as string),
      retweetCount_gte: Number(query.retweetCount_gte as string),
      retweetCount_lte: Number(query.retweetCount_lte as string),
      favoriteCount_gt: Number(query.favoriteCount_gt as string),
      favoriteCount_lt: Number(query.favoriteCount_lt as string),
      favoriteCount_gte: Number(query.favoriteCount_gte as string),
      "user.name_contains": query["user.name_contains"] as string,
      "user.name_starts_with": query["user.name_starts_with"] as string,
      "user.screenName_contains": query["user.screenName_contains"] as string,
      "user.screenName_starts_with": query[
        "user.screenName_starts_with"
      ] as string,
    };

    try {
      const tweetFinder: TweetFinder = container.get(TweetUseCases.TweetFinder);
      const tweets = await tweetFinder.findByQuery(q, from, size, sort, order);

      res.json({
        result: tweets.map((tweet) => tweet.toJson()),
        count: tweets.length,
      });
    } catch (error) {
      httpErrorHandler(res, error, "SearchTweetsController");
    }
  }
}
