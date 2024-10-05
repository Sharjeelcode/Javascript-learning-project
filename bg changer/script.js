const box = document.querySelectorAll(".button");
const body = document.querySelector("body");
box.forEach((button) => {
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.innerText;
  });
});
