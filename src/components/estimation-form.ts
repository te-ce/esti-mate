import { emitEstimation } from "../client";
import { html } from "../utils/misc";

class EstimationForm extends HTMLElement {
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
  }
}

customElements.define("estimation-form", EstimationForm);

export const generateEstimationButton = (estimations: string[]) => {
  const form = document.querySelector("#estimation-form");
  const template = document.querySelector(
    "#estimate-button-template",
  ) as HTMLTemplateElement;

  if (!form || !template) return;

  for (const estimation of estimations) {
    const id = `estimation${estimation}`;

    const existingButton = document.getElementById(id);
    if (existingButton) return;

    const clone = template.content.cloneNode(true);
    const button = (clone as DocumentFragment).getElementById(
      "estimate-button",
    );
    if (!button) return;

    button.textContent = `${estimation}`;
    button.addEventListener("click", () => {
      emitEstimation(estimation);
    });
    button.id = id;

    form.appendChild(clone);
  }
};
