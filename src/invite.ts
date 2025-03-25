const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("room");

if (roomId) {
  const roomInput = document.querySelector("#room") as HTMLInputElement;

  if (roomInput) {
    roomInput.value = roomId;
    roomInput.classList.add("hidden");
  }
}
