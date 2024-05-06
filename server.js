import { WebSocketServer } from "ws";
import http from "http";
import express from "express";

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", function incoming() {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
