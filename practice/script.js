document.getElementsByTagName("h1")[0].innerText = "baby";
const div = document.querySelector(".parent");
const h1 = document.createElement("h1");

h1.innerText = "hello world";
console.log(div);
div.appendChild(h1);
console.log(h1);

div.removeChild("h1")[0];
