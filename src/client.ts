import { io } from "socket.io-client";
import { Rooms } from "./utils/room";
import { addUserCard, removeUserCard } from "./components/user-container";
import { generateRoom } from "./utils/general";
import { Room, Submit, User } from "./utils/types";

const socket = io();

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const roomId = urlParams.get("room") ?? "";
const baseArgs = { roomId: roomId, name: name };
const pokerArgs = urlParams.get("poker") ?? "";

const pokerInputs =
  pokerArgs === "custom" ? urlParams.get("custom") : pokerArgs;

socket.on("connect", () => {
  socket.emit(User.CONNECTED, { ...baseArgs, pokerArgs, pokerInputs });
});

socket.on(User.CONNECTED, ({ id, name }) => {
  addUserCard(id, name, "???");
});

socket.on(Room.UPDATE, (rooms: Rooms) => {
  const room = rooms[roomId];
  if (room) {
    generateRoom(room);
  }
});

socket.on(User.DISCONNECTED, (id) => {
  removeUserCard(id);
});

socket.on(Submit.ESTIMATION, ({ estimation, id, name }) => {
  addUserCard(id, name, estimation.toString());
});

export const emitEstimation = (estimation: string) => {
  socket.emit(Submit.ESTIMATION, { estimation: estimation, ...baseArgs });
};

export const emitNext = () => {
  socket.emit(Submit.NEXT, baseArgs);
};

export const emitAddTicket = (tickets: string) => {
  socket.emit(Submit.ADD_TICKET, { tickets: tickets, ...baseArgs });
};
