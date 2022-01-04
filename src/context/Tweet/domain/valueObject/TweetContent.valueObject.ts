import { NotNull } from "../../../Shared/domain/notNull";
import { ValueObject } from "../../../Shared/domain/valueObject.interface";

export class TweetContent extends NotNull implements ValueObject {
  public readonly value: string;

  constructor(value: string) {
    super(value, "TweetContent");
    this.value = value;
  }
}
