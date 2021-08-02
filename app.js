
// I.CHOICES

let startGameBtn = document.getElementById('start-game-btn');
let choicesContainer = document.getElementById('choices-container');
let gameContainer = document.getElementById('game-container');
let radioInputs = document.querySelectorAll('input[name=choice-input]');  


let playerChoice = "";
 
 

const inputsHandler = function(e) {
    
    playerChoice = e.target.value;

    if(playerChoice === "") {
        startGameBtn.disabled = true;
         
    } else {
        startGameBtn.disabled = false;
    }
     
    
}


radioInputs.forEach((item) => item.addEventListener('change', inputsHandler))
 

 

const startGame = function(e) {

    e.preventDefault();

    choicesContainer.style.display="none";
    gameContainer.style.display="flex";

}

 
startGameBtn.addEventListener('click', startGame);
 




// II.GAME

const gameCells = document.querySelectorAll('.box');
let playerUI = document.getElementById('player');
let winner = document.getElementById('text-winner');
let currentPlayer = 'You';
const gameBoard = Array.from(gameCells);

let results=["", "", "", "", "", "", "", "", ""];

let trackings = [0,1,2,3,4,5,6,7,8];


const winnings = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

 
let buttonReset = document.getElementById('reset');


// Listen for  click on cell

const clickedOn = function(e) {

    buttonReset.disabled = false;

    
    // Player
    
    if(playerChoice === "X") {

        e.target.innerText = 'X';
    
        const playerIndex = gameBoard.indexOf(e.target);
        results[playerIndex] = 'X';
    
        const spliceIndex = trackings.indexOf(playerIndex);
        trackings.splice(spliceIndex, 1);
     
        gameBoard[playerIndex].removeEventListener('click', clickedOn);
       
         
        // Computer
         
        const randomCell = Math.floor(Math.random() * trackings.length);
        
        console.log(randomCell)
    
        const computerIndex = trackings[randomCell];
         
    
        if(trackings.length !== 0) {
            gameBoard[computerIndex].innerText = 'O'; 
            gameBoard[computerIndex].style.color = 'white'; 
            results[computerIndex] = 'O';
        
            const spliceIndex2 = trackings.indexOf(computerIndex);
            trackings.splice(spliceIndex2, 1);
             
            gameBoard[computerIndex].removeEventListener('click', clickedOn);     
    
        } 

    } else if(playerChoice === "O") {
        
        // Player
        e.target.innerText = 'O';
    
        const playerIndex = gameBoard.indexOf(e.target);
        results[playerIndex] = 'O';
    
        const spliceIndex = trackings.indexOf(playerIndex);
        trackings.splice(spliceIndex, 1);
     
        gameBoard[playerIndex].removeEventListener('click', clickedOn);
       
         
        // Computer
         
        const randomCell = Math.floor(Math.random() * trackings.length);
        
        const computerIndex = trackings[randomCell];
         
    
        if(trackings.length !== 0) {

            gameBoard[computerIndex].innerText = 'X'; 
            gameBoard[computerIndex].style.color = 'white'; 
            results[computerIndex] = 'X';
        
            const spliceIndex2 = trackings.indexOf(computerIndex);
            trackings.splice(spliceIndex2, 1);
             
            gameBoard[computerIndex].removeEventListener('click', clickedOn);
        }
    }

         

    // Check results
    for(i=0; i < winnings.length; i++) {
        let winning = winnings[i];
        let w1 = winning[0];
        let w2 = winning[1];
        let w3 = winning[2];
    
        if(winner.innerText !== "") {
            break;
        }
    
        if( results[w1] !== "" && results[w1] === results[w2] && results[w2] === results[w3] && results[w1] === results[w3]) {   
            
            if((playerChoice === 'X' && results[w1] === 'X') || (playerChoice === 'O' && results[w1] === 'O') ) {

                winner.innerText = `You have won!`; 
            } else {
                winner.innerText = `Computer has won!`;
            }

                                 
        }
            
            
    } 
        
    if(results.every((item,index) => item !== "") && (winner.innerText === "")) {
         winner.innerText = `It's a TIE!`;
            
            
    }
         
     
}


gameCells.forEach(function(cell, index) {
    cell.addEventListener('click', clickedOn);
     
        
});



// Reset the game
const resetGame = function() {
    document.location.reload();
}


buttonReset.addEventListener('click', resetGame);

 
 
 



 
 


 

 

   
     
 

 

 

 
 
 