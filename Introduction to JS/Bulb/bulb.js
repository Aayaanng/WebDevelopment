function turnOn() {
  const img = document.querySelector("img");
  if (
    img.src ==
    "file:///C:/Users/Lenovo/Desktop/web%20development/Introduction%20to%20JS/Bulb/images/pic_bulboff.gif"
  ) {
    img.src =
      "file:///C:/Users/Lenovo/Desktop/web%20development/Introduction%20to%20JS/Bulb/images/pic_bulbon.gif";
  }
}

function turnOff() {
    const img = document.querySelector("img")
    if (
        img.src == "file:///C:/Users/Lenovo/Desktop/web%20development/Introduction%20to%20JS/Bulb/images/pic_bulbon.gif"
    ) {
        img.src =
        "file:///C:/Users/Lenovo/Desktop/web%20development/Introduction%20to%20JS/Bulb/images/pic_bulboff.gif";
    }
}
