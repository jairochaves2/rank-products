import HttpServer from "./domain/interfaces/http-server";
import ExpressAdapter from "./infra/adapters/express-adapter";

const server: HttpServer = new ExpressAdapter();

server.start(3000);

