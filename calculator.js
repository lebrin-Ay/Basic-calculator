
// create variables for the first and second number
// prompt to input the numbers
const firstNumber =  prompt("Input First Number");
const secondNumber =  prompt("Input Second Number");

// create a variable to store the operators 
//prompt to input the operator
const operator = prompt('Input operator to perform the calculation: ' + "\n" + 'Addition: +' + "\n" + 'Subtraction: - ' + "\n" + 'Multiplication: * ' + "\n" + 'Division: / ' );  

// create and declare a variable to store the result 
let total = 'No input';

// using else if statements 
if (operator == '+') {
    total = firstNumber + secondNumber; 
} 
else if (operator == '-') {
    total = firstNumber - secondNumber; 
}
else if (operator == '*') {
    total = firstNumber * secondNumber; 
}
else if (operator == '/') {
    total = firstNumber / secondNumber 
}
else {
    total = 'No input';
}

alert("The Total is: " + total);