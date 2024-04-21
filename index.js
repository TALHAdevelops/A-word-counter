import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter your sentence: ",
    },
]);
// Using regular expression to split by any whitespace character
const words = answers.Sentence.trim().split(/\s+/);
console.log(words);
console.log(`Your sentence has ${words.length} words.`);
