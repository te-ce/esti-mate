import { emitEstimation } from "../client";
import { html } from "../utils/misc";

class EstimationForm extends HTMLElement {
  estimations = ["XS", "S", "M", "L", "XL", "?"];
  generateEstimationButton = (count: number) => {
    const form = this.querySelector("#estimation-form");
    const template = this.querySelector(
      "#estimate-button-template",
    ) as HTMLTemplateElement;

    if (!form || !template) return;

    for (let i = 0; i < count; i++) {
      const clone = template.content.cloneNode(true);
      const button = (clone as DocumentFragment).getElementById(
        "estimate-button",
      );
      if (!button) return;

      button.textContent = `${this.estimations[i]}`;
      button.addEventListener("click", () => {
        emitEstimation(this.estimations[i]);
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
          class="min-w-12 rounded-lg bg-white px-4 py-2 uppercase shadow-lg transition hover:bg-slate-200"
        ></button>
      </template>
    `;
    this.generateEstimationButton(this.estimations.length);
  }
}

customElements.define("estimation-form", EstimationForm);
