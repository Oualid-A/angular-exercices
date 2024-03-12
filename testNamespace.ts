/// <reference path="./namespace.ts" />

let calculator = new Calculator.BasicCalculator();

let addition = calculator.add(2, 3);
console.log("Addition:", addition); // Addition: 5

let sub = calculator.subtract(14, 4);
console.log("Subtraction:", sub); // Subtraction: 10

let multiply = calculator.multiply(2, 6);
console.log("Multiplication:", multiply); // Multiplication: 12

let div = calculator.divide(12, 4);
console.log("Division:", div); // Division: 3
