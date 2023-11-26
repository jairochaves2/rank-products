import { Server } from "http";

export default interface HttpServer {
  start(port: number): Server;
  stop(server: Server): void;
}
