import { TweetRepository } from "../../../../src/context/Tweet/domain/interfaces/TweetRepository.interface";
import { Tweet } from "../../../../src/context/Tweet/domain/Tweet.model";

export class FakeTweetRepository implements TweetRepository {
  private fakeTweets: Tweet[] = [];

  public async save(tweet: Tweet): Promise<void> {
    this.fakeTweets.push(tweet);
  }

  public findByQuery(query: string): Promise<Tweet[]> {
    //TODO: Implement this method
    return Promise.resolve(this.fakeTweets);
  }
}
