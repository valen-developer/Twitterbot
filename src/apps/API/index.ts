import { enviroment } from "../../config/enviroment";
import { setAppUses } from "./helpers/setExpressAppUses";
import { Server } from "./server";

export const server = new Server(enviroment.port);
setAppUses(server.app);
