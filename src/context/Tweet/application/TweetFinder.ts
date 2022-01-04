import { QueryBuilder } from "../../Shared/domain/queryBuilder.interface";
import { TweetRepository } from "../domain/interfaces/TweetRepository.interface";
import { Tweet } from "../domain/Tweet.model";

export class TweetFinder {
  constructor(
    private tweetRepository: TweetRepository,
    private queryBuilder: QueryBuilder<any>
  ) {}

  public async findByQuery(
    query: string,
    from = 0,
    size = 10,
    sorting_by?: string,
    order?: string
  ): Promise<Tweet[]> {
    from ?? 0;
    size ?? 10;
    sorting_by ?? "createAt";
    order ?? "desc";

    return await this.tweetRepository.findByQuery(
      this.queryBuilder.build(query),
      from,
      size,
      sorting_by,
      order
    );
  }

  public async filter(): Promise<any> {}
}
