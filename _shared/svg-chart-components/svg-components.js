const tooltip = document.querySelector(".tooltip");

document.querySelectorAll("[data-tip]").forEach((el) => {
  el.addEventListener("pointerenter", () => {
    tooltip.textContent = el.dataset.tip;
    tooltip.style.display = "block";
  });
  el.addEventListener("pointermove", (event) => {
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
  });
  el.addEventListener("pointerleave", () => {
    tooltip.style.display = "none";
  });
});

document.querySelectorAll("[data-gauge-value]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.gaugeValue;
    const gauge = document.querySelector(".gauge-value");
    const label = document.querySelector(".gauge-label");
    gauge.style.setProperty("--value", value);
    label.textContent = `${value}%`;
    document.querySelectorAll("[data-gauge-value]").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
  });
});

document.querySelectorAll("[data-toggle-series]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.toggleSeries;
    const next = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(next));
    document.querySelectorAll(`[data-series="${key}"]`).forEach((el) => {
      el.style.opacity = next ? "1" : "0.15";
    });
  });
});
