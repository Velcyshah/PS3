const question = require("./Quize_Questions");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chalk = require("chalk");
let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.yellow

var answer = "";
var QNo = 1;
var score = 0;
var username = "";
var notes = "";

var getQuestions = () => {
    var data = question.filter((o) => o.no == QNo);
    data.forEach(nq => {
        console.log(cyan(`\nNo : ${nq.no}`));
        console.log(yellow(`Question : ${nq.Q}`));
        console.log(cyan(`\nA : ${nq.A}`));
        console.log(cyan(`B : ${nq.B}`));
        console.log(cyan(`C : ${nq.C}`));
        console.log(cyan(`D : ${nq.D}`));
        answer = nq.ans;
        notes = nq.note;
    })
};

var checkAnswer = () => {
    if (QNo <= 10) {
        rl.question(title("\nGive Answer : "), (ans) => {
            if (ans == "A" || ans == "B" || ans == "C" || ans == "D") {
                if (ans == answer) {
                    score += 5;
                    console.log(green("\n Right Answer : " + ans));
                    console.log(blueBright("Your Score : " + score));
                    QNo += 1;
                    repeat();
                } else {
                    score -= 2;
                    console.log(red("\n Wrong Answer : " + ans));
                    console.log(blueBright("Your Score : " + score));
                    console.log(green("\n Discriptions: " + notes));
                    QNo += 1;
                    repeat();
                }
            } else {
                console.log(red("\n Wrong Choice, Please try again"));
                repeat();
            }
        });
    } else {
        console.log(title("\n Quiz Completed..."));
        console.log(title(`\n UserName : ${username}  Your Final Score Is : ${score}`));
        rl.close();
    }
};

var repeat = () => {
    getQuestions();
    checkAnswer();
};

console.log(title("Welcome to Quiz Compitition..!"));
rl.question(title("\n Please Enter Your Name : "), (ans) => {
    username = ans;
    repeat();
});