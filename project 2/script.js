let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPara1 = document.querySelector("#user-score");
const userPara2 = document.querySelector("#comp-score");

const genComChoice = () => {s
        const options =["rock","paper","scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    }

const drawGame = () => {
    console.log("The game is draw");
    msg.innerText = "game is draw. play again"
    msg.style.color = "green";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++
        userPara1.innerText = userScore;
        console.log("You Win");
        msg.innerText = "It's great! your Win";
        msg.style.color = "blue";
    }else{
        compScore++
        userPara2.innerText = compScore;
        console.log("you lose");
        msg.innerText = "Fail! you lose";
        msg.style.color = "red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genComChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

    showWinner(userWin);
    }

}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});