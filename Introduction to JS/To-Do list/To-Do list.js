function addItem() {
  const item = document.querySelector("input").value;
  const p = document.createElement("p");
  p.innerHTML = `<span>${item}</span><button type="button" class="btn btn-info remove">Remove</button>`;
  document.querySelector(".outside-container").appendChild(p);

  const removeButtton = p.querySelector("button");
  removeButtton.addEventListener("click", () => {
    hideP(p);
  });
  document.querySelector("input").value = "";
}

function hideP(p) {
  p.style.display = "none";
}
