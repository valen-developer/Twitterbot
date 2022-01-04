export class HTTPException implements Error {
  public readonly name: string;
  public readonly message: string;
  public readonly statusCode: number;

  constructor(
    message: string,
    statusCode: number,
    name = "Http exception error"
  ) {
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}
