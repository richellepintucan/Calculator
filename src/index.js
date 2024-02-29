// Simple Calculator using only Javascript without using DOM

// Ask the user for 2 input numbers to perform Calculations

let num1 = Number(prompt("Enter any number1:")); // inputs should be only numbers


let num2 = Number(prompt("Enter again any number2:")); // inputs should be only numbers

/* If the user's input for num 1 and num 2 are not numbers, 
the prompt will show up again and again until he enter a numbers
*/

while (isNaN(num1) || isNaN(num2)) {
    num1 = Number(prompt("You entered an invalid number1, please enter any number:")); 
    num2 = Number(prompt("You entered an invalid number2, please enter again any number:")); 

}

// User can choose any Arithmetic Operators

const operator = prompt("Enter any operator (+, -, *, /, **, %	) ");

let result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else if (operator === '**') {
    result = num1 ** num2;
} else if (operator === '%') {
    result = num1 % num2;
} else {
    result = "Invalid operator, enter an arithmetic operator";
}
alert(`= ${result}`);









