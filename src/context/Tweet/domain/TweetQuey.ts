export interface TweetQuery {
  OR?: TweetQuery[];
  content_contains?: string;
  content_starts_with?: string;
  content_ends_with?: string;
  createdAt_gt?: Date;
  createdAt_lt?: Date;
  createdAt_gte?: Date;
  createdAt_lte?: Date;
  retweetCount_gt?: number;
  retweetCount_lt?: number;
  retweetCount_gte?: number;
  retweetCount_lte?: number;
  favoriteCount_gt?: number;
  favoriteCount_lt?: number;
  favoriteCount_gte?: number;
  "user.name_contains"?: string;
  "user.name_starts_with"?: string;
  "user.screenName_contains"?: string;
  "user.screenName_starts_with"?: string;
}
