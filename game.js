var score = 0;
var playerScore = 0;
var result;
var message;
var computerChoice;
var playerChoice;
var validationToken;

const container = document.querySelector('#container');
const content = document.createElement('div');
const pScoreDiv = document.querySelector('#playerScore');
const cScoreDiv = document.querySelector('#computerScore');

content.classList.add('content');

var result_div = document.createElement('div');
result_div.style.cssText = "font-size: 2em; background-color: blueviolet; font-color: black; border-color:black; border-style: solid; border-radius: 3px;"

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "Welcome! Choose Rock, Paper, or Scissors to start game";
h1.style.cssText = "background-image: linear-gradient(to right, pink, blue); border-style: solid; border-color: black";

const rock = document.createElement('button');
rock.classList.add('button');
rock.classList.add('rock');
rock.textContent = "Rock    ";
rock.setAttribute('id', 'rock');

const paper = document.createElement('button');
paper.classList.add('button');
paper.classList.add('paper');
paper.textContent = "Paper   ";
paper.setAttribute('id', 'paper');

const scissors = document.createElement('button');
scissors.classList.add('button');
scissors.classList.add('scissors');
scissors.textContent = "Scissors";
scissors.setAttribute('id', 'scissors');

var image = document.createElement('img');

content.appendChild(h1);
content.appendChild(result_div);
content.appendChild(rock);
content.appendChild(paper);
content.appendChild(scissors);
content.appendChild(image);
container.appendChild(content);

const buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {
    button.addEventListener('click',
         (e) => {
        playerChoice = button.id;
        playRound();
        playSound(result);
        resultImage();
        appendScoreDiv(); }
        );
});

function resultImage() {
    if (result == "win") {
        image.setAttribute('src', "https://i5.walmartimages.com/dfw/4ff9c6c9-7400/k2-_4482fa55-df68-4562-8e92-cdde3ada8dbf.v1.jpg");
        image.setAttribute('alt', 'john cena');
        }
    else if (result == "lose") {
        image.setAttribute('src', 'https://www.irishtimes.com/polopoly_fs/1.2781686.1473178774!/image/image.jpg_gen/derivatives/box_620_330/image.jpg');
        image.setAttribute('alt', "chimpanzee")
        }

    else if (result == "tie") {
        image.setAttribute('src', "bernie-sanders-3.jpg");
        image.setAttribute('alt', 'bernie sanders');
    }
}

function appendScoreDiv() {
    pScoreDiv.textContent = playerScore;
    cScoreDiv.textContent = score;
}

function playSound(selection) {
    if (selection == "win") {
    var winSound = document.getElementById("winSound");
    winSound.play();
    }
    else if (selection == "lose") {
        var loseSound = document.getElementById("loseSound");
        loseSound.play();
    }
    else if (selection == "tie") {
        var tieSound = document.getElementById("tieSound");
        tieSound.play();
    }
}

    function playSong() {
    const song = document.getElementById("song");
    song.play();
    }
    playSong();

function resetScore() {
    score = 0;
    playerScore = 0;
}

function getComputerChoice() {
    var choices = [
        "rock",
        "paper",
        "scissors",
    ];
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function win() {
    playerScore++
}
function lose() {
    score++
}

function playRound() {   
   
    validationToken = true;
    //chooses random choice from choices array
    getComputerChoice();

    if (playerScore == 5) {
        result_div.innerText = "You Win!!!!!";
        resetScore();
        return;
    }
    else if (score == 5) {
        result_div.innerText = "You Lose!!!!!";
        resetScore();
        return;
    }
    
    if (computerChoice === "rock" && playerChoice === "scissors") {
                    result = "lose";
                    console.log(result, computerChoice, playerChoice);
                    ++score
                    message = "You lose! Computer picks " + computerChoice + ", you picked " + playerChoice + ".";
                    console.log(message);
                    result_div.innerText = message;
                   return message;
    }

    else if (computerChoice === "scissors" &&
             playerChoice === "paper") {
                    result = "lose";
                    console.log(result, computerChoice, playerChoice);
                    ++score
                    message = "You lose! Computer picks " + computerChoice + ", you picked " + playerChoice + ".";
                    console.log(message);
                    result_div.innerText = message;
                    return message
    }

    else if (computerChoice === "paper" && 
            playerChoice === "rock") {
                    result = "lose";
                    console.log(result, computerChoice, playerChoice);
                    ++score
                    message = "You lose! Computer picks " + computerChoice + ", you picked " + playerChoice + ".";
                    console.log(message);
                    result_div.innerText = message;
                    return message
    }

    else if (computerChoice === playerChoice) {
                    result = "tie";
                    console.log(result, computerChoice, playerChoice);
                    message = "You picked " + playerChoice + ", computer picked " + computerChoice + ", It's a tie!";
                    console.log(message);
                    result_div.innerText = message;
                    return message
    }

    else {
                    result = "win";
                    console.log(result, computerChoice, playerChoice);
                    ++playerScore
                    message = "You win! You picked " + playerChoice + ", computer picked " + computerChoice + ".";
                    console.log(message);
                    result_div.innerText = message;
                   return message
    }       
      
}

//main game loop. completes when either score reaches 5 
function game() {
        score = 0;
        playerScore = 0;

        while (score < 5 && playerScore < 5) {
            playRound();
            if (validationToken == true) {
                alert("Computer plays " + computerChoice + "! " + 
                "You picked " + playerChoice + " !" +
                "Player score " + playerScore + " ---------- " + score + " Computer Score" );
        }   }

        //Code below ends game and returns win/loss alert
        if (score == 5) {
            return alert("You lose!")
        }

        else if (playerScore == 5) {
            return alert("You win!")
        }
    }

    function colorPicker() {
        const colors = ["red", "blue", "yellow", "green", "purple", "blue", "orange", "violet", "indigo"];
        const background = document.querySelector('html');
        return background.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    }

    setInterval(() => {
        colorPicker();
    }, 50);
