import { Controller } from "./controller.interface";

import { Request, Response } from "express";
import { TweetFecher } from "../../../context/Tweet/application/TweetFecher";
import { httpErrorHandler } from "../helpers/httpErrorHandler";

import { TweetUseCases } from "../../../config/dic/tweetUseCases.injection";
import { DIC } from "../../../config/dic/DIC";

export class FetchTweetsController implements Controller {
  public async run(req: Request, res: Response): Promise<void> {
    const keyword = req.query.keyword as string;

    try {
      const container = DIC.instance().container;

      const tweetFecher: TweetFecher = container.get(
        TweetUseCases.TweetFetcher
      );
      const tweets = await tweetFecher.fetchTweetsByKeyword(keyword);

      res.json(tweets.map((tweet) => tweet.toJson()));
    } catch (error) {
      console.log(
        "🚀 ~ file: FetchTweets.controller.ts ~ line 29 ~ FetchTweetsController ~ run ~ error",
        error
      );
      httpErrorHandler(res, error, "FetchTweetsController");
    }
  }
}
