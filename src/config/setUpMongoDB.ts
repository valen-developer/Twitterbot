import mongoose from "mongoose";
import { enviroment } from "./enviroment";

export class MongoConnection {
  private _connection!: mongoose.Connection;

  get connection(): mongoose.Connection {
    return (this._connection = mongoose.connection);
  }

  public async connect(): Promise<mongoose.Connection> {
    return new Promise((resolve, reject) => {
      this._connection = mongoose.connection;

      mongoose.connect(
        enviroment.db.uri,
        {
          authSource: "admin",
          auth: {
            username: enviroment.db.user,
            password: enviroment.db.password,
          },
        },
        (error) => {
          console.log(
            "🚀 ~ file: setUpMongoDB.ts ~ line 33 ~ MongoConnection ~ this._connection.on ~ error",
            error
          );

          reject(error);
        }
      );

      this._connection.on("error", (error) => {
        console.log(
          "🚀 ~ file: setUpMongoDB.ts ~ line 33 ~ MongoConnection ~ this._connection.on ~ error",
          error
        );

        reject(error);
      });

      this._connection.once("open", () => {
        console.log("Connected to mongoDB");
        resolve(this._connection);
      });
    });
  }
}
