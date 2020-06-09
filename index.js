import {add, sub, mul, div} from "./calculations.js";

const buttonPlus = document.getElementById("buttonPlus");
buttonPlus.addEventListener("click", ()=> add());

const buttonMinus = document.getElementById("buttonMinus");
buttonMinus.addEventListener("click", ()=> sub());

const buttonMulti = document.getElementById("buttonMulti");
buttonMulti.addEventListener("click", ()=> mul());

const buttonDivide = document.getElementById("buttonDivide");
buttonDivide.addEventListener("click", ()=> div());

const button = document.getElementById("button");
button.addEventListener("click", (event)=> console.log(event));




// const operator = prompt("enter an operator, plz: +, -, * or / ");



// alert(`The result is: ${calculate(firstNumber, secondNumber, operator)}`);
//
// function calculate(firstNumber, secondNumber, operator) {
//   switch (operator) {
//     case "+":
//       return add(firstNumber, secondNumber);
//     case "-":
//       return sub(firstNumber, secondNumber);
//     case "*":
//       return mul(firstNumber, secondNumber);
//     case "/":
//       return div(firstNumber, secondNumber);
//     default:
//       throw new Error("something went wrong");
//   }
// }
