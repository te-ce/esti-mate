import { html } from "../utils/misc";

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`
      <header class="flex items-center justify-center gap-4">
        <img src="/svg.svg" class="h-12 w-12" />
        <h1 class="text-2xl font-bold">Esti-Mate</h1>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
