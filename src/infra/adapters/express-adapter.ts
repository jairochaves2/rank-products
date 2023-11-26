import express from "express";
import { Server } from "http";
import HttpServer from "../../domain/interfaces/http-server";

export default class ExpressAdapter implements HttpServer {
  private app: express.Application;

  constructor() {
    this.app = express();
  }
  start(port: number): Server {
    return this.app.listen(port);
  }
  stop(server: Server): void {
    server.close();
  }
}
