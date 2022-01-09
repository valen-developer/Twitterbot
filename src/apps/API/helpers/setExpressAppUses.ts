import cors from "cors";
import express from "express";

import { json, urlencoded } from "express";
import { routes } from "../routes/index.routing";

export const setAppUses = (app: express.Application) => {
  app.use(urlencoded({ extended: false }));
  app.use(json());
  app.use(cors());
  app.use("/api/v1", routes);
};
