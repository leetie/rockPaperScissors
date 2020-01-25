const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');

var result_div = document.createElement('div');
result_div.style.cssText = "font-size: 2em; background-color: red; font-color: black; border-color:black; border-style: solid;"








const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "Welcome! Choose Rock, Paper, or Scissors to start game";
h1.style.cssText = "background-color: grey; border-style: solid; border-color: black";

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


content.appendChild(h1);
content.appendChild(result_div);
content.appendChild(rock);
content.appendChild(paper);
content.appendChild(scissors);




container.appendChild(content);


const buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {
    button.addEventListener('click',
         (e) => {
        
        playerChoice = button.id;
        playRound() }
        
        );
});







function getComputerChoice() {
    var choices = [
        "rock",
        "paper",
        "scissors",
    ];
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}




var score = 0;
var playerScore = 0;
var result;
var message;
var computerChoice;
var playerChoice;
var validationToken;



function playRound() {   
    

   validationToken = true;

    //chooses random choice from choices array
    getComputerChoice();
    
    

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
                "\n Player score " + playerScore + " ---------- " + score + " Computer Score" );
        }   }

        //Code below ends game and returns win/loss alert
        if (score == 5) {
            return alert("You lose!")
        }

        else if (playerScore == 5) {
            return alert("You win!")
        }
    }


   
    
    