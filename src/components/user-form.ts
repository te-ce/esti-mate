import { html } from "../utils/misc";

class UserForm extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html`
      <form
        action="/estimate.html"
        class="flex flex-col gap-4"
        id="estimation-form"
      >
        <input
          type="text"
          id="name"
          name="name"
          class="rounded-lg bg-slate-200 px-4 py-2 shadow-lg"
          placeholder="Name"
          required
        />
        <input
          type="text"
          id="room"
          name="room"
          class="rounded-lg bg-slate-200 px-4 py-2 shadow-lg"
          placeholder="Room"
        />
        <section class="grid gap-4">
          <input
            type="radio"
            id="fib"
            name="poker"
            required
            checked
            value="0,1,2,3,5,8,13,21,34,55,89"
          />
          <label for="fib">(0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)</label>
          <input
            type="radio"
            id="tee"
            name="poker"
            required
            value="XXS,XS,S,M,L,XL,XXL"
          />
          <label for="tee">(XXS, XS, S, M, L, XL, XXL)</label>
          <input
            type="radio"
            id="custom"
            name="poker"
            required
            value="custom"
            class="peer"
          />
          <label for="custom">Custom</label>
          <section
            class="invisible col-span-2 flex justify-center peer-checked:visible"
          >
            <input
              type="text"
              id="custom-input"
              name="custom"
              placeholder="S, M, L, XL, 1, 2, 3, 5"
              class="rounded-lg bg-slate-200 px-4 py-2 shadow-lg"
            />
          </section>
        </section>

        <button
          type="submit"
          id="estimate-button"
          class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
        >
          Enter
        </button>
      </form>
    `;
  }
}

customElements.define("user-form", UserForm);
