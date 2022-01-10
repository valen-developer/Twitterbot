import { server as apiServer, server } from "./apps/API";
import { setApolloServer } from "./apps/Graphql";
import { MongoConnection } from "./config/setUpMongoDB";

const mongoConnection = new MongoConnection();

const initApplication = async (port?: number): Promise<void> => {
  await mongoConnection.connect().catch((error) => {
    console.log("Error connecting to mongoDB");
  });

  await setApolloServer(apiServer);

  apiServer.start();
};

initApplication();
