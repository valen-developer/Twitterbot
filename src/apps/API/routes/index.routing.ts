import { Router } from "express";
import { tweetsRoutes } from "./tweet.routes";

export const routes = Router();

routes.use("/tweets", tweetsRoutes);
