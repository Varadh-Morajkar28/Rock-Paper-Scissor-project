let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const getCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const drawGame = () => {
    console.log("the game is draw")
    msg.innerText = "Game was draw.Play Again";
    msg.style.backgroundColor = "Grey";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win")
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        console.log("You Lose")
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

};

const playGame = (userChoice) => {
    console.log("user choice=", userChoice)
    //Generate Computer Choice
    const compChoice = getCompChoice();
    console.log("comp choice =", compChoice)

    if (userChoice === compChoice) {
        //DrawGame
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //scissors,paper
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //rock,scissors
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "Rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

