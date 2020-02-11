const express = require("express");
const app = express();
const server = app.listen(8800);
const socketio = require("socket.io");
const io = socketio(server);
const namespaces = require("./data/namespaces");

io.on("connection", socket => {
  socket.emit(
    "namespaces",
    namespaces.map(ele => {
      return {
        img: ele.img,
        name: ele.name,
        id: ele.id,
        endpoint: ele.endpoint
      };
    })
  );
});

namespaces.forEach(namespace => {
  io.of(namespace.endpoint).on("connection", socket => {
    socket.emit("nsrooms", namespace.rooms);
    socket.on("joinroom", (name, userscallback) => {
      const prev = Object.keys(socket.rooms)[1];
      socket.leave(prev);
      socket.join(name);
      console.log(socket.rooms);

      const messages = namespace.rooms.find(ele => ele.name === name).history;
      io.of(namespace.endpoint)
        .in(name)
        .clients((err, number) => {
          userscallback(number.length, messages);
        });
    });
    socket.on("msg", data => {
      const roomTitle = Object.keys(socket.rooms)[1];
      const msg = {
        name: data.name,
        text: data.text,
        image: "https://via.placeholder.com/30",
        time: Date.now()
      };
      const room = namespace.rooms.find(ele => ele.name === roomTitle);
      console.log(room);
      if (room) {
        room.addMessage(msg);
      }
      io.of(namespace.endpoint)
        .to(roomTitle)
        .emit("msg", msg);
    });
  });
});
