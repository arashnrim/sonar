/// ===== `overview` section ===== ///
// Dynamically calculates the price of the plan based on the number of
// hours the user listens to music per day, indicated by a slider.
const pricingSlider = document.getElementById("overview__graphic__slider");
const timeSpan = document.getElementById("overview__graphic__time");
const costSpan = document.getElementById("overview__graphic__cost");
pricingSlider.addEventListener("input", () => {
  let price;
  if (pricingSlider.value <= 4) {
    price = pricingSlider.value * 0.5;
  } else if (pricingSlider.value <= 8) {
    price = 2 + (pricingSlider.value - 4) * 0.75;
  } else {
    price = 2 + 3 + (pricingSlider.value - 8) * 0.6;
  }
  timeSpan.innerText = `${pricingSlider.value} hour${
    pricingSlider.value != 1 ? "s" : ""
  }`;
  costSpan.innerHTML = `$${price.toFixed(2)}<span>/month</span>`;
});
