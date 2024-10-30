import 'reflect-metadata';
import {Server, IncomingMessage, ServerResponse} from 'http';
import * as http from 'node:http';
import { AppDataSource } from './data-source';
import { MainRouter} from "./routers/MainRouter";

AppDataSource.initialize();

const hostname: string = "localhost";
const port: number = 8080;
const server: Server = http.createServer(async (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-type", "text/html");
    MainRouter.mapRoutes(request,response);
});
server.listen(port, hostname,()=>{
    console.log(`Node JS server is started at http://${hostname}:${port}`);
})