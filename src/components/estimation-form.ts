import { emitEstimation } from "../client";
import { html } from "../utils/misc";

class EstimationForm extends HTMLElement {
  generateEstimationButton = (count: number) => {
    const form = this.querySelector("#estimation-form");
    const template = this.querySelector(
      "#estimate-button-template",
    ) as HTMLTemplateElement;

    if (!form || !template) return;

    for (let i = 1; i <= count; i++) {
      const clone = template.content.cloneNode(true);
      const button = (clone as DocumentFragment).querySelector(
        "#estimate-button",
      );

      if (!button) return;

      button.textContent = `${i.toString()} days`;
      button.addEventListener("click", () => {
        emitEstimation(i);
      });

      form.appendChild(clone);
    }
  };

  constructor() {
    super();
    this.innerHTML = html`
      <form class="flex gap-4" id="estimation-form"></form>

      <template id="estimate-button-template">
        <button
          type="button"
          id="estimate-button"
          class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
        ></button>
      </template>
    `;
    this.generateEstimationButton(5);
  }
}

customElements.define("estimation-form", EstimationForm);
