import { FakeTweetRepository } from "../infrastructure/FakeTweetRepository";
import { TweetCreator } from "../../../../src/context/Tweet/application/TweetCreator";
import { Tweet } from "../../../../src/context/Tweet/domain/Tweet.model";
import { HTTPException } from "../../../../src/context/Shared/domain/HttpException";

describe("Tweet Creator", () => {
  const tweetCreator = new TweetCreator(new FakeTweetRepository());

  describe("When save a tweet", () => {
    const tweet = new Tweet({
      id: "123",
      content: "Hello world",
      authorId: "123",
      createdAt: new Date(),
      favoriteCount: 0,
      retweetCount: 0,
      user: {
        id: "123",
        name: "Fake User",
        screenName: "fakeuser",
      },
    });

    test("should not throw any exception", () => {
      expect(async () => {
        await tweetCreator.createTweet(tweet);
      }).not.toThrowError(HTTPException);
    });
  });
});
