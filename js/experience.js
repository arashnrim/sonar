/// ===== `features` section ===== ///
const toggleButtons = document.querySelectorAll("#features__buttons button");
const features = document.querySelectorAll(".feature");

// Adds an event listener to each toggle button that calls the
// `toggleFeature` function with the index of the button.
toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    toggleFeature(index);
  });
});

// Toggles the `active` class on the button and the feature.
const toggleFeature = (index) => {
  features.forEach((feature, i) => {
    if (i === index) {
      feature.classList.add("current");
    } else {
      feature.classList.remove("current");
    }
  });

  toggleButtons.forEach((button, i) => {
    if (i === index) {
      button.classList.replace("button--secondary", "button--primary");
    } else {
      button.classList.replace("button--primary", "button--secondary");
    }
  });
};
