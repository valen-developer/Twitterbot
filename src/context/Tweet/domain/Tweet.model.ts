import { CreateAt } from "../../Shared/domain/createAt.valueObject";
import { UUID } from "../../Shared/domain/uuid.valueObject";
import {
  TwitterUser,
  TwitterUserArgs,
} from "../../TwitterUser/domain/TwitterUser";
import { TweetContent } from "./valueObject/TweetContent.valueObject";

export class Tweet {
  public readonly id: UUID;
  public readonly authorId: UUID;
  public readonly content: TweetContent;
  public readonly createdAt: CreateAt;

  public retweetCount: number;
  public favoriteCount: number;

  public user: TwitterUser;

  constructor(tweetArgs: TweetArguments) {
    this.id = new UUID(tweetArgs.id);
    this.authorId = new UUID(tweetArgs.authorId);
    this.content = new TweetContent(tweetArgs.content);
    this.createdAt = new CreateAt(tweetArgs.createdAt);

    this.retweetCount = tweetArgs.retweetCount;
    this.favoriteCount = tweetArgs.favoriteCount;

    this.user = new TwitterUser(tweetArgs.user);
  }

  public toJson(): TweetArguments {
    return {
      id: this.id.value,
      authorId: this.authorId.value,
      content: this.content.value,
      createdAt: this.createdAt.value,
      retweetCount: this.retweetCount,
      favoriteCount: this.favoriteCount,
      user: this.user.toJson(),
    };
  }
}

export interface TweetArguments {
  id: string;
  authorId: string;
  content: string;
  retweetCount: number;
  favoriteCount: number;
  createdAt: Date;
  user: TwitterUserArgs;
}
