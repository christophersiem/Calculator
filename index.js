import {add, sub, mul, div} from "./calculations.js";

const firstNumber = Number(prompt("Enter 1st number, plz:"));
const operator = prompt("enter an operator, plz: +, -, * or / ");

const secondNumber = Number(prompt("Enter 2nd number, plz:"));

alert(`The result is: ${calculate(firstNumber, secondNumber, operator)}`);

function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return sub(firstNumber, secondNumber);
    case "*":
      return mul(firstNumber, secondNumber);
    case "/":
      return div(firstNumber, secondNumber);
    default:
      throw new Error("something went wrong");
  }
}
