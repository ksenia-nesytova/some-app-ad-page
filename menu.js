const menuBtn = document.getElementById("menuBtn")

const nav = document.getElementById("nav")

menuBtn.addEventListener("click", () => { nav.classList.toggle("visible");
menuBtn.textContent === "|||" ? menuBtn.textContent = "\u2716" : menuBtn.textContent = "|||"})
