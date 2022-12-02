/// ===== `listen` section ===== ///
// Creates a div called highlight above (on) an artist in the listen
// section of the index page. This div displays the artist's number of
// listeners.
const artists = document.getElementsByClassName("artist");
const highlight = document.createElement("div");
highlight.classList.add("artist__highlight");

const data = {
  "Taylor Swift": {
    listeners: "84M",
  },
  Drake: {
    listeners: "68M",
  },
  "21 Savage": {
    listeners: "43M",
  },
  "Harry Styles": {
    listeners: "64M",
  },
  "Morgan Wallen": {
    listeners: "13M",
  },
};

// I managed to do this at 12 a.m. in the morning. Maybe that's why all
// the devs do the work at night.
const highlightEnter = [{ opacity: "0" }, { opacity: "1" }];

const highlightLeave = [{ opacity: "1" }, { opacity: "0" }];

const highlightAnimation = {
  duration: 150,
  easing: "ease-in-out",
  iterations: 1,
};

for (const artist of artists) {
  artist.addEventListener("mouseenter", () => {
    highlight.innerHTML = `<p>${
      data[artist.innerText].listeners
    } listeners</p>`;

    artist.appendChild(highlight);
    highlight.animate(highlightEnter, highlightAnimation);
  });

  artist.addEventListener("mouseleave", () => {
    highlight.animate(highlightLeave, highlightAnimation);
    artist.removeChild(highlight);
  });
}

/// ===== `pricing` section ===== ///
// Dynamically calculates the price of the plan based on the number of
// hours the user listens to music per day, indicated by a slider.
const pricingSlider = document.getElementById("pricing__graphic__slider");
const timeSpan = document.getElementById("pricing__graphic__time");
const costSpan = document.getElementById("pricing__graphic__cost");
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
