let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

let choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

let reset = document.querySelector('#reset');


const genComChoice = ()=>{
    let options = ["stone","paper","scissors"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
let drawGame = ()=>{
    // console.log("game draw");
    msg.innerText = "Game draw , Play again .";
    msg.style.backgroundColor = "#081b31";
}


reset.addEventListener("click",()=>{
    console.log("karan")
    userScore = 0;
    compScore = 0;
    userScorePara.textContent = 0;
    compScorePara.textContent = 0;
});
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        // console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        // console.log("you lost");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
}




const playGame = (userChoice)=>{
    // console.log("user choice = ",userChoice);
    //generate computer choice by function
    let compChoice = genComChoice();
    // console.log("comp Choice : ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

function changeColour(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor=color;  
}