import { Ticket } from "./tickets";

export type Room = {
  id: string;
  users: User[];
  tickets: Ticket[];
  activeTicketNo: number;
  pokerInputs: string[];
};

export type Rooms = Record<string, Room>;

export type User = {
  id: string;
  name: string;
  estimation?: string;
};

const createRoom = (rooms: Rooms, id: string, pokerInputs: string[]) => {
  rooms[id] = {
    id: id,
    users: [],
    tickets: [],
    activeTicketNo: 0,
    pokerInputs: pokerInputs,
  };
};

export const addUser = (
  rooms: Rooms,
  roomId: string,
  user: User,
  pokerInputs: string,
) => {
  if (!rooms[roomId]) {
    const inputs = pokerInputs
      .split(",")
      .map((input) => input.trim())
      .filter((input) => input !== "");

    createRoom(rooms, roomId, inputs);
  }
  rooms[roomId].users.push(user);
};

export const removeUser = (rooms: Rooms, userId: string) => {
  for (const roomId in rooms) {
    rooms[roomId].users = rooms[roomId].users.filter(
      (user) => user.id !== userId,
    );

    if (rooms[roomId].users.length === 0) {
      delete rooms[roomId];
    }
  }
};

export const addEstimation = (
  rooms: Rooms,
  roomId: string,
  userId: string,
  estimation: string,
) => {
  const user = rooms[roomId].users.find((user) => user.id === userId);
  if (user) {
    user.estimation = estimation;
  }
};

export const getUserInfo = (rooms: Rooms, userId: string) => {
  for (const roomId in rooms) {
    const user = rooms[roomId].users.find((user) => user.id === userId);
    if (user) {
      return { roomId, user };
    }
  }
  return { roomId: "", user: { id: "", name: "" } };
};

export const resetUserEstimation = (room: Room) => {
  room.users.forEach((user) => {
    user.estimation = "???";
  });
};

export const setNextActiveTicket = (room: Room) => {
  if (room.tickets.length > room.activeTicketNo + 1) {
    room.activeTicketNo++;
  } else {
    room.activeTicketNo = 0;
  }
};
