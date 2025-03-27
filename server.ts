import { Socket } from "socket.io";
import {
  addEstimation,
  addUser,
  getUserInfo,
  removeUser,
  Rooms,
} from "./src/utils/room";
import { Room, Submit, User } from "./src/utils/types";
import { parseTicketString } from "./src/utils/tickets";

const rooms: Rooms = {};

// Couldn't find the correct io type (yet)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const socketEvents = (io: any, socket: Socket) => {
  const id = socket.id;
  socket.on(User.CONNECTED, ({ roomId, name }) => {
    addUser(rooms, roomId, { id: id, name: name });
    socket.join(roomId);
    socket.emit(Room.UPDATE, rooms);
    io.to(roomId).emit(User.CONNECTED, { id, name });
  });

  socket.on("disconnect", () => {
    const { roomId } = getUserInfo(rooms, id);
    removeUser(rooms, id);
    io.to(roomId).emit(User.DISCONNECTED, id);
  });

  socket.on(Submit.ESTIMATION, ({ estimation, roomId, name }) => {
    addEstimation(rooms, roomId, id, estimation);
    io.to(roomId).emit(Submit.ESTIMATION, { id, estimation, name });
  });

  socket.on(Submit.NEXT, ({ roomId }) => {
    const room = rooms[roomId];
    if (room) {
      room.users.forEach((user) => {
        user.estimation = "???";
      });
      if (room.tickets.length > room.activeTicketNo + 1) {
        room.activeTicketNo++;
        io.to(roomId).emit(Room.UPDATE, rooms);
      }
    }
  });

  socket.on(Submit.ADD_TICKET, ({ tickets, roomId }) => {
    const room = rooms[roomId];
    const parsedTickets = parseTicketString(tickets);
    if (room) {
      room.tickets = [...room.tickets, ...parsedTickets];
      io.to(roomId).emit(Room.UPDATE, rooms);
    }
  });
};
