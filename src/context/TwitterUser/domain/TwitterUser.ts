import { UUID } from "../../Shared/domain/uuid.valueObject";
import { TwitterScreenName } from "./valueObjects/TwitterScreenName.valueObject";
import { TwitterUserName } from "./valueObjects/TwitterUserName.valueObject";

export class TwitterUser {
  public readonly id: UUID;
  public readonly name: TwitterUserName;
  public readonly screenName: TwitterScreenName;

  constructor(twitterUserArgs: TwitterUserArgs) {
    this.id = new UUID(twitterUserArgs.id);
    this.name = new TwitterUserName(twitterUserArgs.name);
    this.screenName = new TwitterScreenName(twitterUserArgs.screenName);
  }

  public toJson(): TwitterUserArgs {
    return {
      id: this.id.value,
      name: this.name.value,
      screenName: this.screenName.value,
    };
  }
}

export interface TwitterUserArgs {
  id: string;
  name: string;
  screenName: string;
}
