
var score = 0;
var playerScore = 0;
var result;
var message;
var computerChoice;
var playerChoice;
var validationToken;


const container = document.querySelector('#container');
const content = document.createElement('div');



var score_div = document.createElement('div');
score_div.classList.add('score_div');
score_div.style.cssText = "font-size: 1.5em; background-color: pink; border-color: black; border-style: solid; border-radius: 3px;";

content.classList.add('content');

var result_div = document.createElement('div');
result_div.style.cssText = "font-size: 2em; background-color: blueviolet; font-color: black; border-color:black; border-style: solid; border-radius: 3px;"








const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "Welcome! Choose Rock, Paper, or Scissors to start game";
h1.style.cssText = "background-image: linear-gradient(to right, pink, blue); border-style: solid; border-color: black";

const reset = document.createElement('button');
reset.setAttribute('id', 'reset');
reset.style.cssText = "background-color: black; color: white;"
reset.addEventListener('click', (e) => {resetScore();});

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
content.appendChild(score_div);
content.appendChild(reset);
content.appendChild(image);




container.appendChild(content);


const buttons = document.querySelectorAll('button:not(#reset)');

buttons.forEach( (button) => {
    button.addEventListener('click',
         (e) => {
        
        playerChoice = button.id;
        playRound();
        playSound(result);
        resultImage(); }
        
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
        image.setAttribute('src', 'data:image/jpeg;base64,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');
        image.setAttribute('alt', 'bernie sanders');
    }
    
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



    score_div.innerHTML = score + "----Computer Score" + "----Player Score----" + playerScore;

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
                    score_div.innerHTML = score + "----Computer Score" + "----Player Score----" + playerScore;
                   
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
                    score_div.innerHTML = score + "----Computer Score" + "----Player Score----" + playerScore;
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
                    score_div.innerHTML = score + "----Computer Score" + "----Player Score----" + playerScore;
                    return message
    }

    else if (computerChoice === playerChoice) {
                    result = "tie";
                    console.log(result, computerChoice, playerChoice);
                    message = "You picked " + playerChoice + ", computer picked " + computerChoice + ", It's a tie!";
                    console.log(message);
                    result_div.innerText = message;
                    score_div.innerHTML = score + "----Computer Score" + "----Player Score----" + playerScore;
                    return message
    }

    

    else {
                    result = "win";
                    console.log(result, computerChoice, playerChoice);
                    ++playerScore
                    message = "You win! You picked " + playerChoice + ", computer picked " + computerChoice + ".";
                    console.log(message);
                    result_div.innerText = message;
                    score_div.innerHTML = score + "----Computer Score" + "----Player Score----" + playerScore;
                   
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


   
    
    