import { initApi } from "./apps/API";
import { buildContainer } from "./config/dic/buildContainer.injection";
import { MongoConnection } from "./config/setUpMongoDB";

export const container = buildContainer();
export const mongoConnection = new MongoConnection();

mongoConnection
  .connect()
  .then(() => {
    initApi();
  })
  .catch((error) => {
    console.log("Error connecting to mongoDB");
  });
