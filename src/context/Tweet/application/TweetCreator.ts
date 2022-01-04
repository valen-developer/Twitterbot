import { TweetRepository } from "../domain/interfaces/TweetRepository.interface";
import { Tweet } from "../domain/Tweet.model";

export class TweetCreator {
  constructor(private tweetRepository: TweetRepository) {}

  public async createTweet(tweet: Tweet): Promise<void> {
    await this.tweetRepository.save(tweet);
  }
}
