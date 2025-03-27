export type Ticket = {
  url: string;
};

export const parseTicketString = (ticketString: string): Ticket[] => {
  return ticketString.split(",").map((url) => ({ url: url.trim() }));
};

export const parseUrl = (url: string) => {
  const urlParts = url.split("/");

  return urlParts[urlParts.length - 1].length === 0
    ? urlParts[urlParts.length - 2]
    : urlParts[urlParts.length - 1];
};

export const wrapString = (str: string, length: number) => {
  return str.length <= length ? str : str.slice(0, length) + "...";
};
