import { html } from "../utils/misc";

class InviteLink extends HTMLElement {
  constructor() {
    super();

    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get("room");
    const inviteLink = `${window.location.origin}/?room=${roomId}`;

    const copyLinkToClipboard = () => {
      navigator.clipboard.writeText(inviteLink);
      const button = this.querySelector("#copy-invite-link");

      if (!button) return;

      button.textContent = "Copied!";
      setTimeout(() => {
        button.textContent = "Copy invite link";
      }, 2000);
    };

    this.innerHTML = html`<button
      type="button"
      id="copy-invite-link"
      class="rounded-lg bg-white px-4 py-2 shadow-lg transition hover:bg-slate-200"
    >
      Copy invite link
    </button>`;
    this.addEventListener("click", copyLinkToClipboard);
  }
}

customElements.define("invite-link", InviteLink);
