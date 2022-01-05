import { mongoErrorHandler } from "../../Shared/infrastructure/MongoErrorHandler";
import { TweetRepository } from "../domain/interfaces/TweetRepository.interface";
import { Tweet, TweetArguments } from "../domain/Tweet.model";
import { TweetMongoModel } from "./MongoTweetModel";

export class MongoTweetRepository implements TweetRepository {
  public async save(tweet: Tweet): Promise<void> {
    const tweetModel = new TweetMongoModel(tweet.toJson());

    try {
      await tweetModel.save();
    } catch (error) {
      console.log(
        "🚀 ~ file: MongoTweetRepository.ts ~ line 13 ~ MongoTweetRepository ~ save ~ error",
        error
      );
      mongoErrorHandler(error);
    }
  }

  public async findByQuery(
    query: any,
    from: number,
    size: number,
    sorting_by: string,
    order: string
  ): Promise<Tweet[]> {
    const tweetsArgs: TweetArguments[] = await TweetMongoModel.find(query)
      .limit(size)
      .skip(from)
      .sort({ [sorting_by]: order })
      .exec();
    return tweetsArgs.map((tweet) => new Tweet(tweet));
  }
}
