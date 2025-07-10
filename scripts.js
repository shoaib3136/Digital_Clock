const clock = document.getElementById("clock");
const ampm = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const toggle = document.getElementById("toggleFormat");

let is24Hour = false;

toggle.addEventListener("change", () => {
  is24Hour = toggle.checked;
  updateClock();
});

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  let session = "AM";
  if (!is24Hour) {
    session = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  const hrs = hours.toString().padStart(2, "0");

  // Animate colon blinking by toggling visibility every second
  const colon = now.getSeconds() % 2 === 0 ? ":" : "<span class='blink'>:</span>";

  clock.innerHTML = `${hrs}${colon}${minutes}${colon}${seconds}`;
  ampm.innerText = is24Hour ? "" : session;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.innerText = now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();
