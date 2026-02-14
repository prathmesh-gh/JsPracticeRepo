const buttons = document.querySelectorAll(".button");

console.log(buttons);

const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    
    const color = e.target.id;

    switch (color) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "blue":
        body.style.backgroundColor = "blue";
        break;

      case "yellow":
        body.style.backgroundColor = "yellow";
        break;

      case "white":
        body.style.backgroundColor = "white";
        break;
    }
  });
});
