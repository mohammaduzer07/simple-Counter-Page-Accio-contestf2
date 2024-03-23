
// let counterValue = document.querySelector("#counter-value span");
// let increment = document.querySelector(".Increment");
// let decrement = document.querySelector(".Decrement");
// let reserbtn = document.querySelector(".reset");

// let counter = 0;

// increment.addEventListener('click', () => {
//     counter++;
//     // counterValue.innerHTML = `Your current count is: ${counter}`;
//     counterValue.innerHTML = counter;
// });

// decrement.addEventListener('click', () => {
//     counter--;
//     counterValue.innerHTML = `Your current count is: ${counter}`;
// });

// // To reset the counter to zero
// resetbtn.addEventListener('click', reset);
 
// function reset() {
//     counter = 0;
//     counterValue.innerHTML = counter;
// }



let counterValueSpan = document.querySelector("#counter_value span");
let errorSpan = document.querySelector("#error-message");
let decrementBtn = document.querySelector("#decrementBtn");
let incrementBtn = document.querySelector("#incrementBtn");
let resetBtn = document.querySelector("#resetBtn");

let counter = 0;

decrementBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    counterValueSpan.textContent = counter;
    errorSpan.textContent = "";
  } else {
    errorSpan.textContent = "Error: cannot go Below 0.";
  }
});

incrementBtn.addEventListener('click', () => {
  counter++;
  counterValueSpan.textContent = counter;
  errorSpan.textContent = "";
});

resetBtn.addEventListener('click', reset);

function reset() {
  counter = 0;
  counterValueSpan.textContent = counter;
  errorSpan.textContent = "";
}

// Check for initial display of reset button
if (counter > 0) {
  resetBtn.style.display = "block";
}