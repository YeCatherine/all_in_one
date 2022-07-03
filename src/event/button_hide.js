function hide(e) {
  e.preventDefault();

  const text = document.getElementById("text");
  // Example with style visibility
  if (text.style.visibility === "visible" || text.style.visibility === "") {
    text.style.visibility = "hidden";
  } else {
    text.style.visibility = "visible";
  }

  // example with dataset
  // if (!("hidden" in text.dataset) || text.dataset.hidden !== "false") {
  //   text.dataset.hidden = false;
  //   text.style.visibility = "hidden";
  // } else {
  //   text.dataset.hidden = true;
  //   text.style.visibility = "visible";
  // }
}

console.log(document.querySelector("button"));

document.querySelector("button").addEventListener("click", hide);
