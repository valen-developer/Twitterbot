export abstract class QueryBuilder<T> {
  public abstract build(query: any): T;
}
