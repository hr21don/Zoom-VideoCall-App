
// server.js
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000", // allow all origins (for dev)
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("🔌 New client connected:", socket.id);

  // Send the client its own ID
  socket.emit("me", socket.id);

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("❌ Client disconnected");
    socket.broadcast.emit("callEnded");
  });

  // Forward "callUser" events
  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("callUser", {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });
  });

  // Forward "answerCall" events
  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
