#! /usr/bin/env node

import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 6000;
let myPin = 12345;

console.log("Welcome to Code with Maya - ATM Machine");

let pinAnswer =await inquirer.prompt([
    {
        name:"pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if (pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login successfully!");
   // console.log(`Currebt Account Balance is ${myBalance}`)

    let operationAnswers = await inquirer.prompt([
        {
            name:"operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Ammount", "Check Balance"]
        }
    ])
    if (operationAnswers.operation ==="Withdraw Ammount"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                type:"number",
                message:"Enter the amount to withdraw:"
            }
        ]) 
        if (amountAns.amount > myBalance){
            console.log("Insufficient Balance");

        } 
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`Your Remaining Balance is: ${myBalance} `)
        }
    }
    else if (operationAnswers.operation === "check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`)
    }
   }
   else{
    console.log("Pin is Incorrect, Try Again!");
   }