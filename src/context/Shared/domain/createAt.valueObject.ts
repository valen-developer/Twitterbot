import { NotNull } from "./notNull";
import { ValueObject } from "./valueObject.interface";

export class CreateAt extends NotNull implements ValueObject {
  public readonly value: Date;

  constructor(value: Date) {
    super(value, "CreateAt");
    this.value = value;
  }
}
