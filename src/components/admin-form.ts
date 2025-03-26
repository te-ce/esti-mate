import { emitNext } from "../client";
import { html } from "../utils/misc";

class AdminForm extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`
      <form class="flex items-center justify-center gap-4">
        <input
          type="text"
          id="admin-form"
          class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
          placeholder="Link"
        />
        <button
          type="button"
          id="next-button"
          class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
        >
          Next
        </button>
      </form>
    `;

    this.querySelector("#next-button")?.addEventListener("click", () => {
      emitNext();
    });
  }
}

customElements.define("admin-form", AdminForm);
