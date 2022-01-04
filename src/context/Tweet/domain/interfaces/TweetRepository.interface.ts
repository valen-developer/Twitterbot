import { Tweet } from "../Tweet.model";

export abstract class TweetRepository {
  public abstract save(tweet: Tweet): Promise<void>;
  public abstract findByQuery(
    query: string,
    from: number,
    size: number,
    sorting_by?: string,
    order?: string
  ): Promise<Tweet[]>;
}
