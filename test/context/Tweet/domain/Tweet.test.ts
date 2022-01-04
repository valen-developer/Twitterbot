import { HTTPException } from "../../../../src/context/Shared/domain/HttpException";
import {
  Tweet,
  TweetArguments,
} from "../../../../src/context/Tweet/domain/Tweet.model";

describe("Tweet model", () => {
  const validTweetArgs: TweetArguments = {
    id: "12345678-1234-1234-1234-123456789012",
    content: "Tweet content",
    authorId: "12345678-1234-1234-1234-123456789012",
    createdAt: new Date(),
    retweetCount: 0,
    favoriteCount: 0,
    user: {
      id: "12345678-1234-1234-1234-123456789012",
      name: "Twitter User",
      screenName: "twitter_user",
    },
  };

  const invalidTweetArgs: TweetArguments = {
    id: null as unknown as string,
    content: "Tweet content",
    authorId: "12345678-1234-1234-1234-123456789012",
    createdAt: new Date(),
    retweetCount: 0,
    favoriteCount: 0,
    user: {
      id: "12345678-1234-1234-1234-123456789012",
      name: "Twitter User",
      screenName: "twitter_user",
    },
  };

  test("should create a valid tweet", () => {
    const tweet = new Tweet(validTweetArgs);
    expect(tweet.id.value).toBe(validTweetArgs.id);
    expect(tweet.content.value).toBe(validTweetArgs.content);
    expect(tweet.authorId.value).toBe(validTweetArgs.authorId);
    expect(tweet.createdAt.value).toBe(validTweetArgs.createdAt);
    expect(tweet.retweetCount).toBe(validTweetArgs.retweetCount);
    expect(tweet.favoriteCount).toBe(validTweetArgs.favoriteCount);
    expect(tweet.user.id.value).toBe(validTweetArgs.user.id);
    expect(tweet.user.name.value).toBe(validTweetArgs.user.name);
    expect(tweet.user.screenName.value).toBe(validTweetArgs.user.screenName);
  });

  test("should throw an error when creating an invalid tweet", () => {
    expect(() => new Tweet(invalidTweetArgs)).toThrowError(HTTPException);
  });
});
