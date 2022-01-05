import mongoose from "mongoose";

const { Schema } = mongoose;

const TweetSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  authorId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  retweetCount: {
    type: Number,
    required: true,
    default: 0,
  },
  favoriteCount: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  user: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    screenName: {
      type: String,
      required: true,
    },
  },
});

export const TweetMongoModel: mongoose.Model<any, any, any> = mongoose.model(
  "tweet",
  TweetSchema
);
