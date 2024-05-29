

document.addEventListener("keydown", function (event) {
  let audio;
  if (event.key === "d") {
    audio.stop()
    audio = new Audio("./audios/drums.mp3");
    document.querySelector(".drums").style.opacity = "1";
  }
  if (event.key === "c") {
    audio = new Audio("./audios/congo.mp3");
    document.querySelector(".congo").style.opacity = "1";
  }
  if (event.key === "f") {
    audio = new Audio("./audios/flute.mp3");
    document.querySelector(".flute").style.opacity = "1";
  }
  if (event.key === "h") {
    audio = new Audio("./audios/harp.mp3");
    document.querySelector(".harp").style.opacity = "1";
  }
  if (event.key === "k") {
    audio = new Audio("./audios/piano.mp3");
    document.querySelector(".keyboard").style.opacity = "1";
  }
  if (event.key === "t") {
    audio = new Audio("./audios/triangle.mp3");
    document.querySelector(".triangle").style.opacity = "1";
  }
  if (event.key === "g") {
    audio = new Audio("./audios/guitar.mp3");
    document.querySelector(".guitar").style.opacity = "1";
  }
  if (event.key === "a") {
    audio = new Audio("./audios/accordian.mp3");
    document.querySelector(".accordian").style.opacity = "1";
  }
  audio.play();
});
