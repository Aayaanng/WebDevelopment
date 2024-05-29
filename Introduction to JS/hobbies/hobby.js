const inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
  input.addEventListener("click", function (event) {
    if (input.name == "background") {
      document.querySelector(".right").style.backgroundColor =
        event.target.value;
    } else {
      document.querySelector(".right").style.color = event.target.value;
    }
  });
});
