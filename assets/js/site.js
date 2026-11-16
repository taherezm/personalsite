// Menu dropdown: click to toggle, Escape or an outside click to close,
// arrow keys to move between entries.
(function () {
  var button = document.querySelector(".menu-button");
  var list = document.getElementById("menu-list");
  if (!button || !list) return;
  var links = Array.prototype.slice.call(list.querySelectorAll("a"));

  function setOpen(open) {
    list.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
  }
  function isOpen() {
    return button.getAttribute("aria-expanded") === "true";
  }

  button.addEventListener("click", function () {
    setOpen(!isOpen());
  });

  document.addEventListener("click", function (event) {
    if (isOpen() && !event.target.closest(".menu")) setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      button.focus();
    }
  });

  button.parentNode.addEventListener("keydown", function (event) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    if (!isOpen()) setOpen(true);
    var at = links.indexOf(document.activeElement);
    var step = event.key === "ArrowDown" ? 1 : -1;
    var next = at === -1 ? (step === 1 ? 0 : links.length - 1) : (at + step + links.length) % links.length;
    links[next].focus();
  });

  button.parentNode.addEventListener("focusout", function (event) {
    if (isOpen() && event.relatedTarget && !event.relatedTarget.closest(".menu")) setOpen(false);
  });
})();

// Footer clock: the visitor's own local time, read from their device.
// Nothing is requested or sent; it refreshes on the minute.
(function () {
  var clock = document.querySelector(".clock");
  if (!clock) return;

  function show() {
    var now = new Date();
    var text;
    try {
      text = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
    } catch (error) {
      text = now.toLocaleTimeString();
    }
    clock.textContent = text;
    clock.dateTime = now.toISOString();
    clock.hidden = false;
    setTimeout(show, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);
  }
  show();
})();
