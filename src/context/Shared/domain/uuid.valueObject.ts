import { NotNull } from "./notNull";
import { ValueObject } from "./valueObject.interface";

export class UUID extends NotNull implements ValueObject {
  public readonly value: string;

  constructor(value: string) {
    super(value, "UUID");
    this.value = value;
  }
}
