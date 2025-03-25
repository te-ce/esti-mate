export type Room = {
  users: User[];
};

export type Rooms = Record<string, Room>;

export type User = {
  id: string;
  name: string;
  estimation?: number;
};

const createRoom = (rooms: Rooms, id: string) => {
  rooms[id] = { users: [] };
};

export const addUser = (room: Room, user: User) => {
  room.users.push(user);
};

export const addUserToRooms = (rooms: Rooms, roomId: string, user: User) => {
  if (!rooms[roomId]) {
    createRoom(rooms, roomId);
  }
  addUser(rooms[roomId], user);
};

export const removeUser = (room: Room, userId: string) => {
  room.users = room.users.filter((user) => user.id !== userId);
};

export const removeUserFromRooms = (rooms: Rooms, userId: string) => {
  for (const roomId in rooms) {
    removeUser(rooms[roomId], userId);

    if (rooms[roomId].users.length === 0) {
      delete rooms[roomId];
    }
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
