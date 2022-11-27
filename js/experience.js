const toggleButtons = document.querySelectorAll("#features__buttons button");
const features = document.querySelectorAll(".feature");

toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        toggleFeature(index);
    });
});

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
            button.classList.replace("secondary", "primary");
        } else {
            button.classList.replace("primary", "secondary");
        }
    });
};

// const boxes = document.querySelectorAll("#bento > *");
// boxes.forEach(box => {
//     box.addEventListener("mouseenter", () => {
//         const text = box.querySelectorAll("p");
//         text.forEach(t => t.style.display = "inline");
//     });

//     box.addEventListener("mouseleave", () => {
//         const text = box.querySelectorAll("p");
//         text.forEach(t => t.style.display = "none");
//     })
// })
