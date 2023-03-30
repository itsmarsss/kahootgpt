const checkbox = document.getElementById("checkbox");
const toggle = document.getElementsById("toggle");
const powericon = document.getElementsById("power-icon");

let toggled = false;

checkbox.addEventListener("click", function () {
    if (toggled) {
        toggle.style.background = "#9d86c3";
    }
});