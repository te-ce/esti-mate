import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vitePluginSocketIO from "vite-plugin-socket-io";
import {
  addUserToRooms,
  getUserInfo,
  removeUserFromRooms,
} from "./src/utils/room.ts";

const rooms = {};

const socketEvents = (io, socket) => {
  const id = socket.id;
  console.log(`[${id}] connected`);

  socket.on("connected", ({ roomId, name }) => {
    console.log(`${name} [${id}] connected to ${roomId}`);
    socket.join(roomId);
    addUserToRooms(rooms, roomId, { id: id, name: name });
    io.to(roomId).emit("user:connected", { id, name });
  });

  socket.on("disconnect", () => {
    const { user, roomId } = getUserInfo(rooms, id);
    console.log(`${user.name} [${id}] disconnected from ${roomId}`);
    removeUserFromRooms(rooms, id, socket);
    io.to(roomId).emit("user:disconnected", id);
  });

  socket.on("submit:estimation", ({ estimation, roomId, name }) => {
    console.log("submit:estimation", { id, estimation });
    io.to(roomId).emit("submit:estimation", { id, estimation, name });
  });
};

export default defineConfig({
  plugins: [tailwindcss(), vitePluginSocketIO({ socketEvents })],
});
