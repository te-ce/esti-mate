import { io } from "socket.io-client";
import { generateButton } from "./generateButtons";
import { addUser, removeUser, Room } from "./utils/room";

const socket = io();

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const roomId = urlParams.get("room");
const baseArgs = { roomId: roomId, name: name };

const room: Room = { users: [] };

socket.on("connect", () => {
  socket.emit("connected", { ...baseArgs });
});

socket.on("user:connected", ({ id, name }) => {
  addUser(room, { id, name });
  console.log(room);
});

socket.on("user:disconnected", (id) => {
  removeUser(room, id);
  console.log(room);
});

export const emitEstimation = (estimation: number) => {
  socket.emit("submit:estimation", { estimation: estimation, ...baseArgs });
};

socket.on("submit:estimation", () => {
  console.log("Estimation submitted");
});
generateButton();
