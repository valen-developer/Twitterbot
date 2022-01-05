import { HTTPException } from "../domain/HttpException";

export const mongoErrorHandler = (error: any) => {
  const keyPattern = error.keyPattern;
  if (!keyPattern) {
    throw new HTTPException("server error", 500);
  }

  const keys = Object.keys(keyPattern);
  throw new HTTPException(`${keys[0]} already exist`, 400);
};
