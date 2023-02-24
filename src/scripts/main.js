import "../common/index.css";

const mobileSearchBtn = document.querySelector(".mobileSearchBtn")
const mobileSearchBox = document.querySelector(".mobileSearchBox")

mobileSearchBtn.addEventListener("click", () => {
    mobileSearchBox.classList.toggle("hidden")
})