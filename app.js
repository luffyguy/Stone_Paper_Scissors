var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user_score");
var computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result > p");
const computer_choice_div = document.querySelector(".computer_choice > p");
const rock_div = document.getElementById("stone");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
  const choices = ["stone", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function image(letter) {
  if (letter === "stone") return " ✊ ";
  if (letter === "paper") return " ✋ ";
  return " ✌️ ";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  document.getElementById(userChoice).classList.add('green_shine');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green_shine'),500)

  if(userChoice === "stone"){
  result_div.innerHTML = image(userChoice) + " breaks the " + image(computerChoice) + ". You Win !";
  }
  else if(userChoice === "paper"){
  result_div.innerHTML = image(userChoice) + " wraps the " + image(computerChoice) + ". You Win !";
  }
  else if(userChoice === "scissor"){
  result_div.innerHTML = image(userChoice) + " cuts the " + image(computerChoice) + ". You Win !";
  }
  computer_choice_div.innerHTML = "Computer chose " + image(computerChoice)+ ".";
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;

  document.getElementById(userChoice).classList.add('red_shine');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red_shine'),500)

  if(computerChoice === "stone"){
    result_div.innerHTML = image(computerChoice) + " breaks the " + image(userChoice) + ". You Lose !";
    }
    else if(computerChoice === "paper"){
    result_div.innerHTML = image(computerChoice) + " wraps the " + image(userChoice) + ". You Lose !";
    }
    else if(computerChoice === "scissor"){
    result_div.innerHTML = image(computerChoice) + " cuts the " + image(userChoice) + ". You Lose !";
    computer_choice_div.innerHTML = "Computer chose " + image(computerChoice) + ".";
    }
}

function draw(userChoice, computerChoice) {
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;

  document.getElementById(userChoice).classList.add('gray_shine');
  setTimeout(() => document.getElementById(userChoice).classList.remove('gray_shine'),500)

  result_div.innerHTML = image(computerChoice) + " nullifies  " + image(userChoice) + ". Its a Draw !";  
  computer_choice_div.innerHTML = "Computer chose " + image(computerChoice) + ".";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "paperstone":
    case "stonescissor":
    case "scissorpaper":
      win(userChoice, computerChoice);
      break;
    case "stonepaper":
    case "scissorstone":
    case "paperscissor":
      lose(userChoice, computerChoice);
      break;
    case "paperpaper":
    case "scissorscissor":
    case "stonestone":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("stone");
  });
  paper_div.addEventListener("click", function () {
    game("paper");
  });
  scissor_div.addEventListener("click", function () {
    game("scissor");
  });
}

main();
