import { html } from "../utils/misc";

class UserContainer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`
      <section class="flex w-full items-center justify-center">
        <span
          id="user-container"
          class="align-center flex flex-wrap justify-center gap-6"
        ></span>
      </section>
    `;
  }
}

customElements.define("user-container", UserContainer);

export const addUserCard = (id: string, name: string, estimation?: string) => {
  const card = document.getElementById(id);
  if (!card) {
    createUserCard(id, name, estimation);
  } else {
    const estimationSpan = card.querySelectorAll("span")[1];
    if (!estimationSpan) return;

    estimationSpan.textContent = estimation ?? "";
  }
};

const createUserCard = (id: string, name: string, estimation?: string) => {
  const container = document.getElementById("user-container");
  const section = document.createElement("section") as HTMLTemplateElement;
  if (!container || !section) return;

  section.id = id;
  section.innerHTML = html`
    <data
      class="flex min-w-24 flex-col items-center rounded-lg bg-white p-3 pt-0 shadow-lg"
    >
      <span class="-translate-y-2 rounded-full bg-slate-50 px-2 italic"
        >${name}</span
      >
      <span>${estimation ?? ""}</span>
    </data>
  `;

  container.appendChild(section);
};

export const removeUserCard = (id: string) => {
  const card = document.getElementById(id);
  if (card) card.remove();
};
