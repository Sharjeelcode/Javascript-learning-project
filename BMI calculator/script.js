const form = document.querySelector("form");
let result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid Value ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid Value ${weight}`;
  } else {
    result.innerHTML = ((height * height) / 1000).toFixed(2);
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
  }
});
