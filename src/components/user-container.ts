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
  const card = document.querySelector(`#${id}`);
  if (card) {
    const estimationSpan = card.querySelectorAll("span")[1];
    if (estimationSpan) {
      estimationSpan.textContent = estimation ?? "";
    }
  } else {
    createUserCard(id, name, estimation);
  }
};

const createUserCard = (id: string, name: string, estimation?: string) => {
  const container = document.querySelector("#user-container");

  const section = document.createElement("section") as HTMLTemplateElement;
  section.id = id;
  section.innerHTML = html`
    <data
      class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg"
    >
      <span>${name}</span>
      <span>${estimation ?? ""}</span>
    </data>
  `;

  if (!container) return;

  container.appendChild(section);
};

export const removeUserCard = (name: string) => {
  const card = document.querySelector(`#${name}`);
  if (card) card.remove();
};
