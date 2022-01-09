import request from "supertest";
import { setAppUses } from "../../../../src/apps/API/helpers/setExpressAppUses";
import { Server } from "../../../../src/apps/API/server";
import { MongoConnection } from "../../../../src/config/setUpMongoDB";
import { TweetArguments } from "../../../../src/context/Tweet/domain/Tweet.model";
import { TweetQuery } from "../../../../src/context/Tweet/domain/TweetQuey";

const server = new Server(3200);
const app = server.app;
setAppUses(app);
const api = request(app);

const mongoConnection = new MongoConnection().connect();

describe("search Tweets", () => {
  it("should return 200", async () => {
    const response = await api.post("/api/v1/tweets/search");
    expect(response.status).toBe(200);
  });

  it("should return an array of tweets", async () => {
    const response = await api.post("/api/v1/tweets/search");
    const { result, count } = response.body;

    expect(result).toBeInstanceOf(Array);
  });

  it("should return an array of tweets with the correct length", async () => {
    const response = await api.post("/api/v1/tweets/search");
    const { result, count } = response.body;

    expect(result.length).toBe(count);
  });

  const query: TweetQuery = {
    content_contains: "javascript",
  };
  // test that array of tweets contains the "javascript" keyword in content
  it('should return an array of tweets with all items contain "javascript" in content', async () => {
    const sort_by: keyof TweetArguments = "createdAt";

    const response = await api.post("/api/v1/tweets/search").query({
      ...query,
      sort_by,
    });
    const { result } = response.body;

    // regex to match "*javascript*" in content
    const regex = new RegExp(`.*${query.content_contains}.*`, "i");

    // check if all tweets contain "javascript" in content
    result.forEach((tweet: TweetArguments) => {
      expect(regex.test(tweet.content)).toBe(true);
    });
  });

  // test that verify that the tweets are sorted by createdAt in descending order
  it("should return an array of tweets sorted by createdAt in descending order", async () => {
    const sort_by: keyof TweetArguments = "createdAt";
    const order: "asc" | "desc" = "desc";

    const response = await api.post("/api/v1/tweets/search").query({
      ...query,
      sort_by,
      order,
    });
    const result = response.body.result as TweetArguments[];

    // function that compare two tweets by createdAt
    const compare = (a: TweetArguments, b: TweetArguments) => {
      const aCreatedAt = new Date(a.createdAt);
      const bCreatedAt = new Date(b.createdAt);

      if (aCreatedAt > bCreatedAt) return -1;
      return 1;
    };

    expect([...result].sort(compare)).toEqual(result);
  });
});
