import { html } from "../utils/misc";

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`
      <header class="flex items-center justify-center gap-4">
        <a href="/" class="flex items-center gap-2">
          <img src="/svg.svg" class="h-12 w-12" />
          <h1 class="text-2xl font-bold">Esti-Mate</h1>
        </a>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
