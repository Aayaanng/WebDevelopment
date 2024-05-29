const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    hide(button);
  });
});

function hide(element) {
  element.style.display = "none";
}
// function popup() {
//   alert("popup");
// }

function popuper() {
  document.querySelector("h1").style.color = "blue";
}

function pop() {
  document.querySelector("p").style.color = "orange";
}

const buttonr = document.querySelectorAll("button");
console.log(buttons);
buttonr.forEach((button) => {
  button.addEventListener("click", none);
});

function none() {
  button.style.display = "none";
}
