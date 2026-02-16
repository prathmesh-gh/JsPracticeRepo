//solution approch 1

// document.getElementById("start").addEventListener("click", function () {
//   intervalId = setInterval(() => {
//     const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
//     document.body.style.backgroundColor = randomColor;
//   }, 1000);
// });

// document.getElementById("stop").addEventListener("click", function () {
//   clearInterval(intervalId);
// });




// //or  solution approch 2
const randomvalue = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomvalue());

let intervalId;

const startChangeColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);

    function changeBgColor() {
      document.body.style.backgroundColor = randomvalue();
    }
  }
};

const stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangeColor);
document.querySelector("#stop").addEventListener("click", stopChangeColor);
