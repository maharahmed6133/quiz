import { input, confirm, select } from "@inquirer/prompts";
import chalk from "chalk";
async function runquiz() {
    while (true) {
        let name = await input({ message: chalk.blue("Please enter your name") });
        console.log(chalk.green(`Hello, ${name}!`));
        let user = await confirm({ message: (chalk.blue("are you ready for quiz")) });
        if (user === undefined) {
            console.log(chalk.blue("its your choice"));
        }
        else {
            const correctAnswers = {
                question1: "Indus",
                question2: "4",
                question3: "Islamabad",
                question4: "3 times"
            };
            let question1 = await select({
                message: chalk.blue("which is the pakistan largest river"),
                choices: [
                    { name: "Jhelum", value: "Jhelum" },
                    { name: "Chenab", value: "Chenab" },
                    { name: "Ravi", value: "Ravi" },
                    { name: "Sultej", value: "Sultej" },
                    { name: "Indus", value: "Indus" },
                ]
            });
            let question2 = await select({
                message: chalk.blue("how many provinces in pakistan"),
                choices: [
                    { name: "1", value: "1" },
                    { name: "2", value: "2" },
                    { name: "3", value: "3" },
                    { name: "4", value: "4" },
                ]
            });
            let question3 = await select({
                message: chalk.blue("which city is the capital of Pakistan"),
                choices: [
                    { name: "Lahore", value: "Lahore" },
                    { name: "Karachi", value: "Karachi" },
                    { name: "Islamabad", value: "Islamabad" },
                    { name: "Multan", value: "Muktan" },
                ]
            });
            let question4 = await select({
                message: chalk.blue("how many time pakistan won in olampic?"),
                choices: [
                    { name: "1 time", value: "1 time" },
                    { name: "2 times", value: "2 times" },
                    { name: "3 times", value: "3 times" },
                    { name: "4 times", value: "4 times" },
                ]
            });
            let correctCount = 0;
            if (question1 === correctAnswers.question1) {
                console.log(chalk.green("your answer is correct"));
            }
            else {
                console.log(chalk.red(`you have given wrong answer the correct answer is ${correctAnswers.question1}`));
            }
            if (question2 === correctAnswers.question2) {
                console.log(chalk.green("your answer is correct"));
            }
            else {
                console.log(chalk.red(`you have given wrong answer the correct answer is ${correctAnswers.question2}`));
            }
            if (question3 === correctAnswers.question3) {
                console.log(chalk.green("your answer is correct"));
            }
            else {
                console.log(chalk.red(`you have given wrong answer the correct answer is ${correctAnswers.question3}`));
            }
            if (question4 === correctAnswers.question4) {
                console.log(chalk.green("your answer is correct"));
            }
            else {
                console.log(chalk.red(`you have given wrong answer the correct answer is ${correctAnswers.question4}`));
            }
            if (question1 === correctAnswers.question1)
                correctCount++;
            if (question2 === correctAnswers.question2)
                correctCount++;
            if (question3 === correctAnswers.question3)
                correctCount++;
            if (question4 === correctAnswers.question4)
                correctCount++;
            if (correctCount < 4) {
                console.log(chalk.red("You have given one or more incorrect answers."));
            }
            else {
                console.log(chalk.green("All your answers are correct!"));
            }
            console.log(chalk.green("Thank you for participating in the quiz!"));
            console.log(chalk.green(`Your answers: 
    1. Largest river: ${question1} 
    2. Number of provinces: ${question2} 
    3. Capital city: ${question3} 
    4. Olympic wins: ${question4}`));
        }
        let restart = await confirm({ message: chalk.blue("do you want to do it again") });
        if (!restart) {
            console.log(chalk.green("good bye!"));
            break;
        }
    }
}
runquiz();
