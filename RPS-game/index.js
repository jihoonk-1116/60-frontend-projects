const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const resetEl = document.getElementById("reset");

let userScore = 0;
let computerScore = 0;

resetEl.addEventListener("click", ()=>{
    userScore = 0;
    computerScore = 0;
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
    resultEl.textContent = "Start Again!"
})

buttons.forEach(button => {
    if(button.id !== "reset"){
        button.addEventListener("click", ()=>{
            const res = playRound(button.id, computerPlay());
            resultEl.textContent = res;
            userScoreEl.textContent = userScore;
            computerScoreEl.textContent = computerScore;
        });
    }
})

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function playRound(userChoice, computerChoice){
    if(userChoice == computerChoice){
         return "It's a tie";
    }
    else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        userScore++;
        return "You win! " + userChoice + " beats " + computerChoice;
    }
    else{
        computerScore++;
        return "You lose! " + computerChoice + " beats " + userChoice;
    }
}