export type Room = {
  id: string;
  users: User[];
};

export type Rooms = Record<string, Room>;

export type User = {
  id: string;
  name: string;
  estimation?: string;
};

const createRoom = (rooms: Rooms, id: string) => {
  rooms[id] = { id: id, users: [] };
};

export const addUser = (rooms: Rooms, roomId: string, user: User) => {
  if (!rooms[roomId]) {
    createRoom(rooms, roomId);
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
