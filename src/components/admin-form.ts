import { emitAddTicket, emitNext } from "../client";
import { html } from "../utils/misc";

class AdminForm extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`
      <form class="flex items-center justify-center gap-4">
        <input
          type="text"
          id="tickets-input"
          class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
          placeholder="url1, url2, ..."
        />
        <button
          type="button"
          id="add-tickets-button"
          class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
        >
          +
        </button>
        <button
          type="button"
          id="next-button"
          class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
        >
          ->
        </button>
      </form>
    `;

    this.querySelector("#add-tickets-button")?.addEventListener("click", () => {
      const input = document.getElementById(
        "tickets-input",
      ) as HTMLInputElement;
      if (!input) return;

      emitAddTicket(input.value);
      input.value = "";
    });

    this.querySelector("#tickets-input")?.addEventListener("keypress", (e) => {
      const event = e as KeyboardEvent;
      if (event.key === "Enter") {
        e.preventDefault();
        emitAddTicket((e.target as HTMLInputElement).value);
        (e.target as HTMLInputElement).value = "";
      }
    });

    this.querySelector("#next-button")?.addEventListener("click", () => {
      emitNext();
    });
  }
}

customElements.define("admin-form", AdminForm);
