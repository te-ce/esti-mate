import { Socket } from "socket.io";
import {
  addEstimation,
  addUser,
  getUserInfo,
  removeUser,
} from "./src/utils/room";

const rooms = {};

// Couldn't find the correct io type (yet)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const socketEvents = (io: any, socket: Socket) => {
  const id = socket.id;
  console.log(`[${id}] connected`);

  socket.on("connected", ({ roomId, name }) => {
    console.log(`${name} [${id}] connected to ${roomId}`);
    socket.join(roomId);
    socket.emit("rooms:update", rooms);
    addUser(rooms, roomId, { id: id, name: name });
    io.to(roomId).emit("user:connected", { id, name });
  });

  socket.on("disconnect", () => {
    const { user, roomId } = getUserInfo(rooms, id);
    console.log(`${user.name} [${id}] disconnected from ${roomId}`);
    removeUser(rooms, id);
    io.to(roomId).emit("user:disconnected", id);
  });

  socket.on("submit:estimation", ({ estimation, roomId, name }) => {
    console.log("submit:estimation", { id, estimation });
    addEstimation(rooms, roomId, id, estimation);
    io.to(roomId).emit("submit:estimation", { id, estimation, name });
  });
};
