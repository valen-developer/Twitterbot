import { TweetArguments } from "../../../../src/context/Tweet/domain/Tweet.model";
import { setSupertestApi } from "./helpers/setSupertestApi";

const api = setSupertestApi();

describe("Fetch tweets", () => {
  it("should return 200", async () => {
    const response = await api.post("/api/v1/tweets/fetch?keyword=javascript");
    expect(response.status).toBe(200);
  });

  it('should return 500 if not query param "keyword"', async () => {
    const response = await api.post("/api/v1/tweets/fetch");
    expect(response.status).toBe(500);
  });

  it('should return 500 if query param "keyword" is empty', async () => {
    const response = await api.post("/api/v1/tweets/fetch?keyword=");
    expect(response.status).toBe(500);
  });

  it("should return an array of tweets", async () => {
    const response = await api.post("/api/v1/tweets/fetch?keyword=javascript");
    expect(response.body).toBeInstanceOf(Array);
  });
});
