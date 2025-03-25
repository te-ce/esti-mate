import { io } from "socket.io-client";
import { Rooms } from "./utils/room";
import { addUserCard, removeUserCard } from "./components/user-container";

const socket = io();

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const roomId = urlParams.get("room") ?? "";
const baseArgs = { roomId: roomId, name: name };

socket.on("connect", () => {
  socket.emit("connected", { ...baseArgs });
});

socket.on("user:connected", ({ id, name }) => {
  addUserCard(id, name, "???");
});

socket.on("rooms:update", (rooms: Rooms) => {
  const curRoom = rooms[roomId];
  for (const user of curRoom.users) {
    addUserCard(user.id, user.name, user.estimation ?? "???");
  }
});

socket.on("user:disconnected", (id) => {
  removeUserCard(id);
});

export const emitEstimation = (estimation: number) => {
  socket.emit("submit:estimation", { estimation: estimation, ...baseArgs });
};

socket.on("submit:estimation", ({ estimation, id, name }) => {
  addUserCard(id, name, estimation.toString());
});
