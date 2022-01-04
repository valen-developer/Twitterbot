import { NotNull } from "../../../Shared/domain/notNull";
import { ValueObject } from "../../../Shared/domain/valueObject.interface";

export class TwitterUserName extends NotNull implements ValueObject {
  public readonly value: string;

  constructor(value: string) {
    super(value, "TwitterUser");
    this.value = value;
  }
}
