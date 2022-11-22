// Loads the top artists' data on hover in #artists.
const artists = document.getElementsByClassName("artist");
const highlight = document.createElement("div");
highlight.classList.add("artist__highlight");

const data = {
    "Taylor Swift": {
        "listeners": "84M",
    },
    "Drake": {
        "listeners": "68M",
    },
    "21 Savage": {
        "listeners": "43M",
    },
    "Harry Styles": {
        "listeners": "64M",
    },
    "Morgan Wallen": {
        "listeners": "13M",
    },
}

// I managed to do this at 12 a.m. in the morning. Maybe that's why all
// the devs do the work at night.
const highlightEnter = [
    { opacity: "0" },
    { opacity: "1" },
]

const highlightLeave = [
    { opacity: "1" },
    { opacity: "0" },
]

const animationTiming = {
  duration: 150,
  easing: "ease-in-out",
  iterations: 1,
}

for (const artist of artists) {
    artist.addEventListener("mouseenter", () => {
        highlight.innerHTML = `<p>${data[artist.innerText].listeners} listeners</p>`;

        artist.appendChild(highlight);
        highlight.animate(highlightEnter, animationTiming);
    });

    artist.addEventListener("mouseleave", () => {
        highlight.animate(highlightLeave, animationTiming);
        artist.removeChild(highlight);
    });
}

// Dynamically updates the pricing in #pricing__graphic__fields.
const pricingSlider = document.getElementById("pricing__graphic__slider");
const timeSpan = document.getElementById("pricing__graphic__time");
const costSpan = document.getElementById("pricing__graphic__cost");
console.log(pricingSlider.value);
pricingSlider.addEventListener("input", () => {
    const price = pricingSlider.value * 0.5;
    timeSpan.innerText = `${pricingSlider.value} hour${pricingSlider.value != 1 ? "s" : ""}`;
    costSpan.innerHTML = `$${price.toFixed(2)}<span>/month</span>`;
})
