import { Router } from "express";
export const tweetsRoutes = Router();

// Controllers
import { SearchTweetsController } from "../controllers/SearchTweets.controller";
import { FetchTweetsController } from "../controllers/FetchTweets.controller";

tweetsRoutes.post("/search", new SearchTweetsController().run);
tweetsRoutes.post("/fetch", new FetchTweetsController().run);
