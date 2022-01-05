import TwitterClient from "twitter-api-v2";
import { enviroment } from "../../../config/enviroment";
import { cleanArray } from "../../../helpers/cleanArray";

import { ITwitterClient } from "../domain/interfaces/TwitterClient.interface";
import { Tweet, TweetArguments } from "../domain/Tweet.model";

export class TwitterClientV2 implements ITwitterClient {
  private _apiKeys = {
    consumer_key: enviroment.twitterApi.consumerKey,
    consumer_secret: enviroment.twitterApi.consumerSecret,
    access_token_key: enviroment.twitterApi.accessToken,
    access_token_secret: enviroment.twitterApi.accessTokenSecret,
  };

  private _client: TwitterClient;
  private _max_results = 10;

  constructor() {
    this._client = new TwitterClient({
      appKey: this._apiKeys.consumer_key,
      appSecret: this._apiKeys.consumer_secret,
      accessToken: this._apiKeys.access_token_key,
      accessSecret: this._apiKeys.access_token_secret,
    });
  }

  public async getTweetsByKeyword(keyword: string): Promise<Tweet[]> {
    const tweetsData = await this._client.v2.search(keyword, {
      "tweet.fields": "author_id,public_metrics,created_at",
      "user.fields": "id,name",
      max_results: this._max_results,
      expansions: ["author_id"],
    });

    const tweetsInfo = tweetsData.data.data;
    const tweetUsers = tweetsData.includes?.users ?? [];

    const tweets: any[] = tweetsInfo.map((tweet: any) => {
      const user = tweetUsers.find((u) => u.id === tweet.author_id);

      if (!user) return null;

      return {
        id: tweet.id,
        authorId: tweet.author_id ?? "",
        content: tweet.text,
        createdAt: new Date(tweet.created_at ?? new Date()),
        retweetCount: tweet.public_metrics?.retweet_count ?? 0,
        favoriteCount: tweet.public_metrics?.like_count ?? 0,
        user: {
          id: user.id,
          name: user.name,
          screenName: user.username,
        },
      };
    });

    const tweetJsonArray = cleanArray<TweetArguments>(tweets);
    return tweetJsonArray.map((tweet) => new Tweet(tweet));
  }
}
