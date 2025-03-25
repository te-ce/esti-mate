import { emitEstimation } from "./client";

export const generateButton = () => {
  if ("content" in document.createElement("template")) {
    const form = document.querySelector("#estimation-form");
    const template = document.querySelector(
      "#estimate-button-template",
    ) as HTMLTemplateElement;

    if (!form || !template) return;

    for (let i = 1; i <= 5; i++) {
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
  }
};
