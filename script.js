function getComputerChoice() {

    let max = 3
    let min = 1
    
    
    
    
        let computerInput = Math.floor(Math.random() * (max - min + 1)) + min;
    if (computerInput === 1) {
        computerInput = "rock";
    } else if(computerInput === 2) {
        computerInput = "paper";
    } else if(computerInput === 3) {
        computerInput = "scissors";
    }
        return computerInput
        
    }
    
    
    
    function getHumanChoice(choice) {
    
    let humanInput = prompt("rock, paper or scissors?")
    
    if (humanInput.toLowerCase() === "rock") {alert("ROCK");}
     else if (humanInput.toLowerCase() === "paper") {alert("PAPER");}
     else if (humanInput.toLowerCase() === "scissors") {alert("SCISSORS");}
     else {alert("Try again")}
    }
    
    
    let humanScore;
    let computerScore;
    
    humanScore = 0;
    computerScore = 0;
    
    
    
    
    
    
    function playRound(humanChoice, computerChoice = getComputerChoice()) {
    
        
        
    
    while(humanChoice === computerChoice) {computerChoice = getComputerChoice()}
    
    
    if(humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {console.log("You lose.Paper beats rock");
    
        computerScore++;
    
        if(computerScore < 0) {computerScore = 0;}
        if(humanScore < 0) {humanScore = 0;}
    
    }
     else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {console.log("You win.Paper beats rock");
    
        humanScore++
    
        if(computerScore < 0) {computerScore = 0;}
        if(humanScore < 0) {humanScore = 0;}
    
     }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {console.log("You win. Rock beats scissors");
    
        humanScore++
    
        if(computerScore < 0) {computerScore = 0;}
        if(humanScore < 0) {humanScore = 0;}
    
    } 
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {console.log("You lose. Rock beats scissors");
    
        computerScore++;
    
        if(computerScore < 0) {computerScore = 0;}
        if(humanScore < 0) {humanScore = 0;}
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {console.log("You lose. Scissors beat paper");
    
        computerScore++;
    
        if(computerScore < 0) {computerScore = 0;}
        if(humanScore < 0) {humanScore = 0;}
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {console.log("You win. Scissors beat paper");
    
        humanScore++
    
        if(computerScore < 0) {computerScore = 0;}
        if(humanScore < 0) {humanScore = 0;}
    }
    }
    
    function playGame() {
    
    
    alert("Round 1")
    playRound(humanChoice = prompt("Rock, paper or scissors?"), computerChoice = getComputerChoice());
    console.log(`Your score : ${humanScore}\nComputer Score : ${computerScore}`);
    
    alert("Round 2")
    playRound(humanChoice = prompt("Rock, paper or scissors?"), computerChoice = getComputerChoice());
    console.log(`Your score : ${humanScore}\nComputer Score : ${computerScore}`);

    alert("Round 3")
    playRound(humanChoice = prompt("Rock, paper or scissors?"), computerChoice = getComputerChoice());
    console.log(`Your score : ${humanScore}\nComputer Score : ${computerScore}`);
    
    alert("Round 4")
    playRound(humanChoice = prompt("Rock, paper or scissors?"), computerChoice = getComputerChoice());
    console.log(`Your score : ${humanScore}\nComputer Score : ${computerScore}`);
    
    alert("Round 5")
    playRound(humanChoice = prompt("Rock, paper or scissors?"), computerChoice = getComputerChoice());
    console.log(`Your score : ${humanScore}\nComputer Score : ${computerScore}`)
    
    if(humanScore > computerScore) {alert("YOU WIN");}
    if(humanScore < computerScore) {alert("YOU LOSE");}
    
    
    
    
    }
    
    
    
    
    
    
    
    
    








