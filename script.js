let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#computer-score")



const drawGame = ()=>{
    msg.innerText = 'Game Draw, play again';
    msg.style.background = '#000'
}
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}.`;
        msg.style.background = 'green';
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.background = 'red';
        compScore++;
        compScorePara.innerText = compScore;
    }
}


const compGenChoice = ()=>{
    const options = ['rock','paper','scissor'];
    let randIdx = Math.floor(Math.random()*3)
    return options[randIdx];
}


const playGame =(userChoice)=>{
    const compChoice = compGenChoice();

    if(userChoice===compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice==='rock'){
            //CompChoice = paper or scissor
            userWin = compChoice==='paper' ? false : true;
        }else if(userChoice==='paper'){
            //CompChoice = rock or scissor
            userWin = compChoice==='scissor' ? false : true;
        } else{
            userWin = compChoice==='rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })    
    
});





// const showWinner = (userChoice,ComputerChoice)=>{
//     if(userChoice==ComputerChoice){
//         msg.innerText = 'Draw';
//     }
//     else if(userChoice === 'rock' && ComputerChoice==='scissor' || 
//             userChoice==='paper' && ComputerChoice==='rock' || 
//             userChoice==='scissor' && ComputerChoice==='paper'){

//                 msg.innerText = 'User Won';

//                 }
//     else{
//         msg.innerText = 'Computer Won';
//     }
// }