#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operatore",
    choices: ["Addition" , "Subtraction" , "Multiplication" , "Division"],
  },
]);
// console.log(asnwer);

// conditionl statment
  if 
    ( asnwer.operatore === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
}
else if ( asnwer.operatore === "Subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
}
else if ( asnwer.operatore === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
}
else if ( asnwer.operatore === "Division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
} 
 else {
  console.log("please Select valid operator");


 }