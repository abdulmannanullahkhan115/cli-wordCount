
import inquirer from "inquirer";

const answer:{
    completeWordSentence:string
}=await inquirer.prompt(
    [
        {
            message:"write a complete sentence to count a words",
            name:"completeWordSentence",
            type:"input"
        }
    ]
)
const word=answer.completeWordSentence.split(" ");
console.log(word)

console.log(`your answer after counting words is ${word.length}`)





