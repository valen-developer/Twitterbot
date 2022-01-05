import cors from "cors";
import { json, urlencoded } from "express";
import { enviroment } from "../../config/enviroment";
import { routes } from "./routes/index.routing";
import { Server } from "./server";

export const initApi = async (): Promise<void> => {
  const server = new Server(enviroment.port);

  // set middlewares
  server.app.use(urlencoded({ extended: false }));
  server.app.use(json());
  server.app.use(cors());

  // set routes
  server.app.use("/api/v1", routes);

  server.start();
};
