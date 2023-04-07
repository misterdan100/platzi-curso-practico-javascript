const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const section = document.querySelectorAlls("section");

button.addEventListener("mouseover", mouseOver);
button.addEventListener("click", eventClick);

function mouseOver () {
    h1.innerHTML = ("Ni lo pienses!!");
}

function eventClick () {
    h1.innerHTML = ("Noooooooo!!!!!!");
}
