var num1,
  num2,
  operator,
  expression = "";

const buttonsList = document.querySelectorAll(".button");
buttonsList.forEach((button) => {
  button.addEventListener("click", (event) => onButtonClick(event));
});

function onButtonClick(event) {
  const value = event.target.outerText;
  if (value == "=") {
    document.querySelector(".display").innerHTML = eval(expression);
  } else if (value == "AC") {
    document.querySelector(".display").innerHTML = "0";
  } else {
    if (value == "÷") {
      expression = expression + "/";
    } else if (value == "x") {
      expression = expression + "*";
    } else {
      expression = expression + value;
    }

    document.querySelector(".display").innerHTML = expression;
  }
}
