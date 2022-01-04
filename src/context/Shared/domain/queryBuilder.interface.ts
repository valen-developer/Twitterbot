export abstract class QueryBuilder<T> {
  public abstract build(query: string): T;
}
