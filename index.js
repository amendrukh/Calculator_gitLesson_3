
let firstNumber = +prompt("Write first number", "0");
let secondNumber = +prompt("Write second number", "0");
let sign = prompt("Write a sign +, -, /, *", "+");
calculate(firstNumber, secondNumber, sign);
function calculate(firstNumber, secondNumber, sign) {
	let result;
	if (sign === "+") {
		result = firstNumber + secondNumber;
		alert(`Результат ${result}`);
	} else if (sign === "-") {
		result = firstNumber - secondNumber;
		alert(`Результат ${result}`);
	} else if (sign === "/") {
		result = firstNumber / secondNumber;
		if (secondNumber === 0) {
			result = "Операція не можлива!На нуль ділити не можна."
		}
		alert(`Результат ${result}`);
	} else if (sign === "*") {
		result = firstNumber * secondNumber;
		alert(`Результат ${result}`);
	}
}

