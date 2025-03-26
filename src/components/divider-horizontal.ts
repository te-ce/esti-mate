import { html } from "../utils/misc";

class DividerHorizontal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`
      <hr
        class="h-px w-[66vw] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-25"
      />
    `;
  }
}

customElements.define("divider-horizontal", DividerHorizontal);
