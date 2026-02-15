# Projects related to DOM

# Solution code

## project 1

```javascript
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

```

## project 2

```javascript
const body = document.querySelector("body");
body.style.backgroundColor = "#2f2f2f";


const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   form.addEventListener('submit', function (e) {
  //   e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span> Your BMI is : ${bmi}</span> \n`;

    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is : ${bmi} <br>You are Underweight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span> Your BMI is : ${bmi} <br>You are Normal</span>`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      results.innerHTML = `<span>Your BMI is : ${bmi} <br>You are Overweight</span>`;
    } else 
      results.innerHTML = `<span>Your BMI is : ${bmi} <br>You are Overweight</span>`;
    }
  }
);

```

## project 3

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
    // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
}, 1000);

```