export type Ticket = {
  url: string;
};

export const parseTicketString = (ticketString: string): Ticket[] => {
  return ticketString.split(",").map((url) => ({ url: url.trim() }));
};
