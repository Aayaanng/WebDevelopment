const input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
  document.querySelector("input").value = "";
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#key").style.padding = "10px";
});
