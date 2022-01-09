import request from "supertest";
import { setAppUses } from "../../../../../src/apps/API/helpers/setExpressAppUses";
import { Server } from "../../../../../src/apps/API/server";
import { MongoConnection } from "../../../../../src/config/setUpMongoDB";

export const setSupertestApi = (): request.SuperTest<request.Test> => {
  const server = new Server(3200);
  const app = server.app;
  setAppUses(app);
  const api = request(app);

  const mongoConnection = new MongoConnection().connect();

  return api;
};
