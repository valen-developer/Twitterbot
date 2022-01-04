import { TweetCreator } from "../../../../src/context/Tweet/application/TweetCreator";
import { TweetFecher } from "../../../../src/context/Tweet/application/TweetFecher";
import { FakeTweetRepository } from "../infrastructure/FakeTweetRepository";
import { FakeTwitterClient } from "../infrastructure/FakeTwitterClient";

describe("Tweet fecher", () => {
  const tweetCreator = new TweetCreator(new FakeTweetRepository());
  const tweetFecher = new TweetFecher(new FakeTwitterClient(), tweetCreator);

  describe("When fetch tweets by keyword", () => {
    test("should return an array of tweets", async () => {
      const tweets = await tweetFecher.fetchTweetsByKeyword("keyword");
      expect(tweets).toBeInstanceOf(Array);
    });
  });
});
