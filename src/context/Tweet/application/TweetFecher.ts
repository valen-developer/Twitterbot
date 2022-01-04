import { asyncForEach } from "../../../helpers/asyncForEach";
import { ITwitterClient } from "../domain/interfaces/TwitterClient.interface";
import { Tweet } from "../domain/Tweet.model";
import { TweetCreator } from "./TweetCreator";

export class TweetFecher {
  constructor(
    private twitterClient: ITwitterClient,
    private tweetCreator: TweetCreator
  ) {}

  public async fetchTweetsByKeyword(keyword: string): Promise<Tweet[]> {
    const tweets = await this.twitterClient.getTweetsByKeyword(keyword);

    await this.saveTweets(tweets);
    return tweets;
  }

  private async saveTweets(tweets: Tweet[]): Promise<void> {
    await asyncForEach(tweets, async (tweet) => {
      await this.tweetCreator.createTweet(tweet);
    });
  }
}
