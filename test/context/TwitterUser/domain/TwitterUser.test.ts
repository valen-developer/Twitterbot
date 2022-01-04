import { HTTPException } from "../../../../src/context/Shared/domain/HttpException";
import {
  TwitterUser,
  TwitterUserArgs,
} from "../../../../src/context/TwitterUser/domain/TwitterUser";

describe("Twitter user model", () => {
  const validUserArgs: TwitterUserArgs = {
    id: "12345678-1234-1234-1234-123456789012",
    name: "Twitter User",
    screenName: "twitter_user",
  };

  const invalidUserArgs: TwitterUserArgs = {
    id: null as unknown as string,
    name: "Twitter User",
    screenName: "twitter_user",
  };

  test("should create a valid user", () => {
    const twitterUser = new TwitterUser(validUserArgs);
    expect(twitterUser.id.value).toBe(validUserArgs.id);
    expect(twitterUser.name.value).toBe(validUserArgs.name);
    expect(twitterUser.screenName.value).toBe(validUserArgs.screenName);
  });

  test("should throw an error when creating an invalid user", () => {
    expect(() => new TwitterUser(invalidUserArgs)).toThrow(HTTPException);
  });
});
