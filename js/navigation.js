const header = document.getElementsByTagName("header")[0];
const hamburger = document.getElementById("hamburger");

const mobileMenu = document.createElement("section");
mobileMenu.id = "mobile-menu";
mobileMenu.innerHTML = `
    <ul>
        <li><a href="/experience.html">Experience</a></li>
        <li><a href="/pricing.html">Pricing</a></li>
        <li><a href="#" class="button primary">Try now</a></li>
    <ul>
`;

const mobileMenuEnter = [
    { opacity: "0"},
    { opacity: "1"},
]

const mobileMenuLeave = [
    { opacity: "1"},
    { opacity: "0"},
]

const mobileMenuAnimation = {
  duration: 150,
  easing: "ease-in-out",
  iterations: 1,
}

hamburger.addEventListener("click", () => {
    const bodyElement = document.getElementById("mobile-menu");
    if (bodyElement !== null) {
        hamburger.classList.replace("ph-x-bold", "ph-list-bold");
        mobileMenu.animate(mobileMenuLeave, mobileMenuAnimation).finished.then(() => mobileMenu.remove());
    } else {
        hamburger.classList.replace("ph-list-bold", "ph-x-bold");
        header.before(mobileMenu);
        mobileMenu.animate(mobileMenuEnter, mobileMenuAnimation);
    }
})

