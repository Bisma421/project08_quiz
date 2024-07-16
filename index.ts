import inquirer from "inquirer"
import chalk from "chalk";

console.log(chalk.italic.bold.blue`\n\t It's Quiz Time\n`)
console.log(chalk.blackBright`You are required to gain atleast 4 points to upgrade your Quiz level:\n`)

const quiz: {
    question1: string,
    question2: string,
    question3: string,
    question4: string,
    question5: string,

} = await inquirer.prompt([
    {
        name: "question1",
        message: "Q1. Typescript is a superset of: ",
        type: "list",
        choices: [{name: "C++" , value: "C++"},{name: "Java" , value: "Java"},{name: "Python " , value: "Python"},{name: "Javascript" , value: "Javascript"}]
    },
    {
        name: "question2",
        message: "Q2. Which of the following characters is commonly allowed in variable names in Typescript?",
        type: "list",
        choices: [{name: "$" , value: "$"},{name: "@" , value: "@"},{name: "#" , value: "#"},{name: "&" , value: "&"}]
    },
    {
        name: "question3",
        message: "Q3. Which operator is commonly used for string concatenation in Typescript?",
        type: "list",
        choices: [{name: "+" , value: "+"},{name: "-" , value: "-"},{name: "*" , value: "*"},{name: "/" , value: "/"}]
    },
    {
        name: "question4",
        message: "Q4. In Typescript, which symbol is commonly used to terminate a statement?",
        type: "list",
        choices: [{name: "." , value: "."},{name: ":" , value: ":"},{name: ";" , value: ";"},{name: "," , value: ","}]
    },
    {
        name: "question5",
        message: "Q5. Which of the following characters is commonly allowed in variable names in Typescript?",
        type: "list",
        choices: [{name: "start()" , value: "start()"},{name: "prompt()" , value: "prompt()"},{name: "init()" , value: "init()"},{name: "run()" , value: "run()"}]
    },

]);

let points: number = 0;

switch (quiz.question1) {
    case "Javascript":
        console.log(chalk.green`\n1. Correct!`);
        ++points;
        break;
        default:
            console.log(chalk.red`\n1. Incorrect!`);        
}

switch (quiz.question2) {
    case "$":
        console.log(chalk.green`2. Correct!`);
        ++points;
        break;
        default:
            console.log(chalk.red`2. Incorrect!`);  
}

switch (quiz.question3) {
    case "+":
        console.log(chalk.green`3. Correct!`);
        ++points;
        break;
        default:
            console.log(chalk.red`3. Incorrect!`);  
}

switch (quiz.question4) {
    case ";":
        console.log(chalk.green`4. Correct!`);
        ++points;
        break;
        default:
            console.log(chalk.red`4. Incorrect!`);  
}

switch (quiz.question5) {
    case "prompt()":
        console.log(chalk.green`5. Correct!`);
        ++points;
        break;
        default:
            console.log(chalk.red`5. Incorrect!`);  
}

console.log(`\npoints: ${points}`);

if (points >= 4) {
    console.log(chalk.greenBright`You Win!`);
} else {
    console.log(chalk.redBright`You Lose!`);
    console.log(chalk.blackBright`Better luck next time.`);
}




