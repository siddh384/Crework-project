let firstColor = document.getElementById("firstColor");
let secondColor = document.getElementById("secondColor");
const body = document.body;
let values = document.getElementById("gValues");
const button = document.getElementById("btn")
const color = document.querySelector(".color")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const setBackground = () => {
    body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`
    values.innerText = body.style.background
}

firstColor.addEventListener("input", () => {
    setBackground()
})

secondColor.addEventListener("input", () => {
    setBackground()
})