let firstNumber
let secondNumber

function askUser() {

  firstNumber = Number(prompt("Enter 1st number, plz:"));
  secondNumber = Number(prompt("Enter 2nd number, plz:"));

}

export function add() {
  askUser();
  alert(firstNumber + secondNumber);
}

export function sub() {
  askUser();
  alert(firstNumber - secondNumber);
}

export function mul() {
  askUser();
  alert(firstNumber * secondNumber);
}

export function div() {
  askUser();
  alert(firstNumber / secondNumber);
}
