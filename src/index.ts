import { server } from "./apps/API";
import { Server } from "./apps/API/server";
import { MongoConnection } from "./config/setUpMongoDB";

const mongoConnection = new MongoConnection();

const initApplication = async (port?: number): Promise<Server> => {
  await mongoConnection.connect().catch((error) => {
    console.log("Error connecting to mongoDB");
  });

  server.start();

  return server;
};

initApplication();
