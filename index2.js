let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector(".msg");

 const userScorePara = document.querySelector(".user_score");
 const compScorePara = document.querySelector(".comp_score");
 

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `computer win ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "blue";
};

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    console.log("hello",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "scissor"){
            userWin = compChoice === "rock"?false:true;
        }
        else{
            userWin = compChoice === "scissor"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("hii",userChoice);
        playGame(userChoice);
    });
});