// cache the DOM
let userScore = 0
let cpuScore = 0
const userScore_span = document.getElementById("user-score")
const cpuScore_span = document.getElementById("cpu-score")
const scoreBoard_div = document.querySelector(".score_board")
const result_div = document.querySelector(".results")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

//get users choice with event listener
getCpuChoice = () => {
    const choices = ['rock','paper','scissors']
    return choices[Math.floor(Math.random()*choices.length)]  
}
win =(usrChoice, cpChoice)=>{
    userScore ++
    userScore_span.innerHTML = userScore
    cpuScore_span.innerHTML = cpuScore 
    const usrSup = "user".fontsize(3).sup()
    const cpSup = "cpu".fontsize(3).sup()
    result_div.innerHTML = `YOU WIN! ${usrChoice}${usrSup} beats ${cpChoice}${cpSup}`
    result_div.style.background = '#e6fff2';
}

lose =(usrChoice, cpChoice)=>{
    cpuScore ++
    userScore_span.innerHTML = userScore
    cpuScore_span.innerHTML = cpuScore 
    const usrSup = "user".fontsize(3).sup()
    const cpSup = "cpu".fontsize(3).sup()
    result_div.innerHTML = `YOU LOSE! ${cpChoice}${cpSup} beats ${usrChoice}${usrSup} `
    result_div.style.background = '#ffcccc';
    
}

draw =(usrChoice, cpChoice)=>{
    userScore_span.innerHTML = userScore
    cpuScore_span.innerHTML = cpuScore 
    const usrSup = "user".fontsize(3).sup()
    const cpSup = "cpu".fontsize(3).sup()
    result_div.innerHTML = `It's a draw! ${usrChoice}${usrSup} == ${cpChoice}${cpSup}`
    result_div.style.background = '#ffffe6';
}

game = (userChoice) => {
     const cpuChoice = getCpuChoice()
    
     switch (userChoice+cpuChoice){
        //  win cases
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, cpuChoice)
            break;
        // lose cases
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, cpuChoice)
            break
        //draw cases
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, cpuChoice)
            break  
     }
}

main = () => {
    
    rock_div.addEventListener('click', () => game("rock"))
    paper_div.addEventListener('click', () => game("paper"))
    scissors_div.addEventListener('click', () => game("scissors"))

}
main();
