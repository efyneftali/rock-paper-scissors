
function computerPlay (){
    //creates a number between 1 and 3
    let  randomNum = Math.floor(Math.random()*3)+1;
    
    if (randomNum === 1){
        return "paper";
    }else if (randomNum === 2){
        return "rock";
    }else{
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {

    let playerDraw = playerSelection.toLowerCase();
    if (playerDraw === "rock"){
        if (computerSelection === "paper"){
            return "You Lose!"
        }else if(computerSelection === "rock"){
            return "Its a Tie!"
        }else{
            return "You Win"
        }
    }if (playerDraw === "paper"){
        if (computerSelection === "rock"){
            return "You Win"
        }else if(computerSelection === "paper"){
            return "Its a Tie!"
        }else{
            return "You Lose!"
        }
    }if (playerDraw === "scissors"){
        if(computerSelection === "rock"){
            return "You Lose!"
        }else if(computerSelection === "paper"){
            return "You Win"
        }else{
            return "Its a Tie!"
        }
    }

}

function game(){
    let playerScore = 0;
    let compScore = 0;
    let numTrys = 1;
    do {
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result === "You Win!"){
            playerScore ++;
        }else if (result==="You Lose!"){
            compScore ++;
        }
        else{
            numTrys --;
        }

        numTrys ++;
        console.log(numTrys);
    }while (numTrys <= 5);

    if (playerScore > compScore){
        console.log("YOU WON THE WHOLE GAME!");
    }else{
        console.log("BETTER LUCK NEXT TIME!");
    }

}
console.log(game())