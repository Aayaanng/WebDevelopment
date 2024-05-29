function Tables() {
  // clear previously existing table
  const multiples = document.querySelector(".multiples");
  if (multiples) {
    multiples.remove();
  }
  const n = document.querySelector("input").value;
  if (!isNaN(n)) {
    const div = document.createElement("div");
    div.classList.add("multiples");
    document.querySelector(".tables").appendChild(div);

    for (let i = 1; i < 11; i++) {
      const p = document.createElement("p");
      p.innerHTML = i * n;
      document.querySelector(".multiples").appendChild(p);
    }
  } else {
    alert("Please enter a valid number");
  }
  document.querySelector("input").value = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    Tables()
  }
})
