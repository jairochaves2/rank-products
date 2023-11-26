import Express from "express";
import { Server } from "http";
import HttpServer from "../../domain/interfaces/http-server";

export default class ExpressAdapter implements HttpServer {
  start(port: number): Server {
    return Express().listen(port);
  }
  stop(server: Server): void {
    server.close();
  }
}
