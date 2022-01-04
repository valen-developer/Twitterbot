import { QueryBuilder } from "../../../../../src/contexts/twitterbot/Shared/domain/QueryBuilder.interface";

export class FakeQueryBuilder implements QueryBuilder<any> {
  public build(query: string): any {
    return {
      query: query,
    };
  }
}
