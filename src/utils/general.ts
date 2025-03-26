import {
  addTicketCard,
  focusTicketCard,
} from "../components/tickets-container";
import { addUserCard } from "../components/user-container";
import { Room } from "./room";

export const generateRoom = (room: Room) => {
  for (const user of room.users) {
    addUserCard(user.id, user.name, user.estimation ?? "???");
  }

  let index = 0;
  for (const ticket of room.tickets) {
    addTicketCard(index.toString(), ticket.url);
    index++;
  }

  if (room.tickets.length >= room.activeTicketNo) {
    focusTicketCard(room.activeTicketNo.toString());
  }
};
