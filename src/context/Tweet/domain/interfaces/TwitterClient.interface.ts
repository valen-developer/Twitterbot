import { Tweet } from "../Tweet.model";

export abstract class ITwitterClient {
  public abstract getTweetsByKeyword(keyword: string): Promise<Tweet[]>;
}
