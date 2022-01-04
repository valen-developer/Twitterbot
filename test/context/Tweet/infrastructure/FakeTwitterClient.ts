import { ITwitterClient } from "../../../../src/context/Tweet/domain/interfaces/TwitterClient.interface";
import { Tweet } from "../../../../src/context/Tweet/domain/Tweet.model";

export class FakeTwitterClient implements ITwitterClient {
  private fakeTweets: Tweet[] = [
    new Tweet({
      id: "1",
      content: "I'm a tweet",
      authorId: "1",
      createdAt: new Date(),
      favoriteCount: 0,
      retweetCount: 0,
      user: {
        id: "1",
        name: "Fake User",
        screenName: "fakeuser",
      },
    }),
  ];

  public async getTweetsByKeyword(keyword: string): Promise<Tweet[]> {
    const tweets = this.fakeTweets.filter((tweet) =>
      tweet.content.value.includes(keyword)
    );
    return tweets;
  }
}
