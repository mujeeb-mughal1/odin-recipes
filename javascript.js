let humanScore=0;
let computerScore=0;

function playRound(){
  humanScore=0;
  computerScore=0;
  
  for(let i = 1; i<=5;i++){
    console.log(`Round ${i} -> You chose: ${userChoice}, Computer chose: ${computerChoice}`);
    let computerChoice = getComputerChoice();
    let userChoice = getHumanChoice();

    if(userChoice === computerChoice) {console.log("It's a tie this round!\n"); continue }
    else if (
      (userChoice == "rock" && computerChoice == "paper") ||
      (userChoice == "paper" && computerChoice == "scissor")||
      (userChoice == "scissor" && computerChoice == "rock")
    ){ 
      computerScore+=1
      console.log("Computer wins this round!\n");
    }
    else { 
      humanScore+=1
      console.log("Human wins this round!\n");
    }
  } 

  console.log("FINAL SCORES:");
  console.log("Human Score:", humanScore, " | Computer Score:", computerScore);

  if (humanScore == computerScore) { return "Equal";}
  else if (humanScore > computerScore){return "Human Won!";}
  else {return "Computer Won!"}
}

function getComputerChoice(){
  let choice = Math.floor(Math.random()*3)

  if(choice === 0) return "rock";
  else if(choice === 1) return "paper";
  else return "scissor";
  
}

function getHumanChoice(){

let userChoice = prompt("Enter user choice: ").toLowerCase();
while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    userChoice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
  }

  return userChoice;
}


playRound();
