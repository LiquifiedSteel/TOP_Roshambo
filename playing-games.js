function getComputerChoice(){
    let cc = ""
    let rn = Math.random()
    if (rn <= 0.333); {
        cc = "Rock"
    }
    if (rn >= 0.333){
        if(rn <= 0.666){
            cc = "Scissors"
        }

    }
    else {
        cc = "Paper"
    }
    return cc
}
function getHumanChoice(){
    return prompt("Rock, Paper, or Scissors")
}

function playRound(human, computer){
    if (human.toLowerCase === "rock" && computer === "Paper"){
        return 0
    } else if(human.toLowerCase() === "rock" && computer === "Scissors"){
        return 1
    } else if(human.toLowerCase() === "rock" && computer === "Rock"){
        return 2
    } else if(human.toLowerCase() === "paper" && computer === "Rock"){
        return 1
    } else if(human.toLowerCase() === "paper" && computer === "Paper"){
        return 2
    } else if(human.toLowerCase() === "paper" && computer === "Scissors"){
        return 0
    } else if(human.toLowerCase() === "scissors" && computer === "Paper"){
        return 1
    } else if(human.toLowerCase() === "scissors" && computer === "Rock"){
        return 0
    } else if(human.toLowerCase() === "scissors" && computer === "Scissors"){
        return 2
    }
}
cont = 1
let humanScore = 0
let computerScore = 0
while (cont <= 5){
    cont++
    let cmptrchc = getComputerChoice()
    let hmnchc = getHumanChoice()
    console.log(cmptrchc)
    console.log(hmnchc)
    round = playRound(hmnchc,cmptrchc)
    if (round === 1){
        humanScore++
    } else if(round === 2){
        let arbitrary = "Hi"
    }
    else{
        computerScore++
    }
}
console.log(humanScore)
console.log(computerScore)
if (humanScore > computerScore) {
    console.log("Human Wins!")
}
else{
    console.log("Computer Wins!")
}
