const rockSelect = document.getElementById("rock");
const paperSelect = document.getElementById("paper");
const scissorSelect = document.getElementById("scissor");
const compChoiceall = [rockSelect, paperSelect, scissorSelect];
let playerScoreElement = document.getElementById("resultScorePlayer");
let compScoreElement = document.getElementById("resultScoreComp");
let playerScore = parseInt(playerScoreElement.innerHTML);
let compScore = parseInt(compScoreElement.innerHTML);

function startGame(playerChoice) {

  const compChoice = compChoiceall[Math.floor(Math.random() * 3)];
  compChoice.style.fontSize = "7rem";
  compChoice.style.transition = "font-size 0.3s";
  var reset = function () {
    compChoice.style.fontSize = "";
    compChoice.style.transition = "";
  };

  setTimeout(reset, 2000);
  var playerChose=document.getElementById('playerChoseDisplay');
  var compChose=document.getElementById('compChoseDisplay');

  if (compChoice.textContent === playerChoice) {
    compScore += 0;
    playerScore += 0;
    playerChose.innerHTML=playerChoice;
    compChose.innerHTML=compChoice.textContent;
    
  } else if (
    (playerChoice === "✊" && compChoice.textContent === "🖐️") ||
    (playerChoice === "🖐️" && compChoice.textContent === "✌️") ||
    (playerChoice === "✌️" && compChoice.textContent === "✊")
  ) {
    compScore += 1;
    compScoreElement.innerHTML = compScore;
    playerChose.innerHTML=playerChoice;
    compChose.innerHTML=compChoice.textContent;
    // alert("You lost, Computer selected " + compChoice.textContent);
    // compScore++;
    // times++;
  } else if (
    (playerChoice === "✊" && compChoice.textContent === "✌️") ||
    (playerChoice === "🖐️" && compChoice.textContent === "✊") ||
    (playerChoice === "✌️" && compChoice.textContent === "🖐️")
  ) {
    playerScore += 1;
    playerScoreElement.innerHTML = playerScore;
    playerChose.innerHTML=playerChoice;
    compChose.innerHTML=compChoice.textContent;



    // alert("You won, Computer selected " + compChoice.textContent);
    // userScore++;
    // times++;
  } else {
    alert("Code did not work!");
  }
  var reset2=function(){
    playerChose.innerHTML="";
    compChose.innerHTML="";
  }

  setTimeout(reset2, 2000)

  setTimeout(ifContinue, 1000);
}

function ifContinue() {
  let resp = confirm("Do you want to play again?");
  if (resp == false) {
    let finR = document.getElementById("finalR");
    if (playerScore > compScore) {
      finR.innerHTML =
        " You won, your score: " +
        playerScore +
        ", computer score: " +
        compScore;
    } else if (playerScore < compScore) {
      finR.innerHTML =
        " You lost, your score: " +
        playerScore +
        ", computer score: " +
        compScore;
    } else {
      finR.innerHTML =
        " It was a TIE, your score: " +
        playerScore +
        ", computer score: " +
        compScore;
    }
    compScore=0;
    playerScore=0;
    playerScoreElement.innerHTML=playerScore;
    compScoreElement.innerHTML=compScore;
  }
  
}
function clearAll() {
  playerScoreElement.innerHTML = "";
  compScoreElement.innerHTML = "";
  let finR = document.getElementById("finalR");
  finR.innerHTML = "";
  compScore = 0;
  playerScore = 0;
}
