import { createServer } from "http";
import app from "./app.js";

const port = process.env.PORT || 1002;

const server = createServer(app);
console.log(`server is running at port: ${port}...`);
// const wss = new WebSocket.Server({ server });

server.listen(port);
