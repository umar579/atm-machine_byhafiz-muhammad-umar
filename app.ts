#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Print welcom message
console.log(chalk.bold.green("\n\t Welcom To My Coding World"));

//balance
let myBalance = 50000;
let myPin = 5555;

let pinAns = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter your pin:",
            type:"number"
        }
    ]
);
if(pinAns.pin === myPin){
    console.log("Your Pin Is Correct!");
    let operations = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Select one of the option",
                type:"list",
                choices:["withdraw","check balance"]
            }
        ]
    );
    if(operations.operation === "withdraw"){
          
        let amountAns = await inquirer.prompt(
            [
                {
                   name:"amount",
                   message:"Enter Amount To Withdraw:",
                   type:"list",
                   choices:[10000,20000,30000,40000,50000]

                }
            ]
        );
        if(amountAns.amount <= myBalance){
            myBalance -= amountAns.amount;
            console.log(`Your remaining Balance is: ${myBalance}`);
        }else{
            console.log("Insufficient Balance");
            
        }
    }else{
        console.log("your current balance is " + myBalance);
        
    }
    
}else{
    console.log("Incorrect! Please Select A Valid Pin Code...");
    
}
