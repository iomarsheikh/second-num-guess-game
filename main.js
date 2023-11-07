import chalk from "chalk";
import inquirer from "inquirer";
let randomNum = Math.ceil(Math.random() * 10);
let userAnswer = await inquirer.prompt({
    name: "Numb",
    type: "number",
    message: "Type a number between 1 to 10"
});
if (userAnswer.Numb === randomNum) {
    console.log(chalk.bold.greenBright("Congratulations You Won!"));
}
else if (userAnswer.Numb > 10) {
    console.log(chalk.bold.italic.red("Error! Please enter number between 1 to 10"));
}
else if (userAnswer.Numb < 1) {
    console.log(chalk.bold.italic.red("Error! Please enter number between 1 to 10"));
}
else {
    console.log(chalk.bold.redBright("Better luck next time!"));
}
