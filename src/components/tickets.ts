import { html } from "../utils/misc";

class Tickets extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`
      <section
        id="tickets-container"
        class="flex max-w-[100vw] gap-4 overflow-x-hidden pt-5"
      ></section>
    `;
  }
}

customElements.define("tickets-container", Tickets);

export const addTicketCard = (id: string, url: string) => {
  const container = document.getElementById("tickets-container");
  if (container) {
    const card = container.querySelector(`[id="${id}"]`) as HTMLElement;
    if (!card) {
      createTicketCard(id, url);
    } else {
      updateTicketCard(card, id, url);
    }
  }
};

const updateTicketCard = (card: HTMLElement, id: string, url: string) => {
  const link = card.querySelectorAll("a")[0];
  const title = card.querySelectorAll("h2")[0];
  if (link && title) {
    link.href = url;
    link.textContent = url;
    title.textContent = `🎟️ ${id}`;
  }
};

export const createTicketCard = (id: string, url: string) => {
  const container = document.getElementById("tickets-container");

  const section = document.createElement("section") as HTMLTemplateElement;
  section.id = id;
  section.innerHTML = html`
    <data
      class="ticket-card flex flex-col items-center rounded-lg bg-white p-2 pt-0 shadow-lg"
    >
      <header>
        <h2 class="w-max -translate-y-2 rounded-full bg-white px-4">
          🎟️ ${id}
        </h2>
      </header>
      <a target="_blank" href="${url}" link>${url}</a>
    </data>
  `;

  if (!container) return;

  container.appendChild(section);
};

export const focusTicketCard = (id: string) => {
  const focusClasses = [
    "mx-10",
    "p-6",
    "-translate-y-2",
    "font-semibold",
    "text-2xl",
  ];

  const cards = document.getElementsByClassName("ticket-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove(...focusClasses);
  }

  const focussedCard = document
    .getElementById(id)
    ?.getElementsByClassName("ticket-card")[0];
  if (focussedCard) {
    focussedCard.classList.add(...focusClasses);
    focussedCard.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};

export const removeTicketCard = (id: string) => {
  const card = document.getElementById(id);
  if (card) card.remove();
};
