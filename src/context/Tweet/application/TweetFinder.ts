import { QueryBuilder } from "../../Shared/domain/queryBuilder.interface";
import { TweetRepository } from "../domain/interfaces/TweetRepository.interface";
import { Tweet } from "../domain/Tweet.model";
import { TweetQuery } from "../domain/TweetQuey";

export class TweetFinder {
  constructor(
    private tweetRepository: TweetRepository,
    private queryBuilder: QueryBuilder<any>
  ) {}

  public async findByQuery(
    query: TweetQuery,
    from = 0,
    size = 10,
    sorting_by: string = "createAt",
    order: string = "desc"
  ): Promise<Tweet[]> {
    from = from ? from : 0;
    size = size ? size : 10;
    sorting_by = sorting_by ? sorting_by : "createAt";
    order = order ? order : "desc";

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
