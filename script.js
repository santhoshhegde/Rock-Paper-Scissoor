let userChoice = 0;
let compChoice = 0;
let choices = document.querySelectorAll(".choice");



choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        console.log(choice);
        compGenChoice()
    })    
    
});


const compGenChoice = ()=>{
    const options = ['rock','paper','Scissor'];
    let ComputerChoices = options[Math.floor(Math.random()*3)];
    console.log(ComputerChoices)
}