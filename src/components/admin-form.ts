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
          placeholder="Tickets"
        />
        <button
          type="button"
          id="add-tickets-button"
          class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
        >
          Add Tickets
        </button>
        <button
          type="button"
          id="next-button"
          class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
        >
          Next
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

    this.querySelector("#next-button")?.addEventListener("click", () => {
      emitNext();
    });
  }
}

customElements.define("admin-form", AdminForm);
