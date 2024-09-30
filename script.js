const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('comp-score');
const message = document.getElementById('msg');


let userNumber = 0;
let computerNumber = 0;

const computerChoice = () => {
    const itemsArray = ["rock","paper","scissors"];
    const randomNumber = Math.floor(Math.random() * itemsArray.length);
    return(itemsArray[randomNumber]);
}


const userChoice = () => {

    const clickHandler = document.getElementsByClassName('choice');
    for(const item of clickHandler){
        item.addEventListener('click', () => {


            let compChoice = computerChoice();
            console.log("user Choice :: " + item.id);
            console.log("Computer Choice :: " + compChoice);



            if(  (item.id === "rock" && compChoice === "scissors") ||
            (item.id === "scissors" && compChoice === "paper") ||
            (item.id === "paper" && compChoice === "rock")){
                console.log("You Are Win");
                userNumber++;
                userScore.innerText = userNumber;
                message.innerText = "You Are Win"
            }
            else if(item.id === compChoice){
                console.log("Match is Draw");
                message.innerText = "Match Is Draw"
            }
            else{
                console.log("Your Are Lose");
                computerNumber++;
                computerScore.innerText = computerNumber;
                message.innerText = "You Are Lose"
            }


        })
    }
}

userChoice();