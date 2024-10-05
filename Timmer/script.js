const timeNow = document.getElementById("time");

setInterval(() => {
  const date = new Date();
  let dates = date.toLocaleString("default", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: timeNow,
  });
  timeNow.innerHTML = dates;
}, 1000);
