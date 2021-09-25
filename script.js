
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const comment = document.querySelector('#commentBox');
const btn = document.querySelectorAll('.selection button');
const reset = document.querySelector('#refresh');
const showRefresh = document.querySelector('.refresh');

btn.forEach(button => { button.addEventListener('click',getPlayer) });

function getPlayer(e) {
    const playerChoice = e.target.value;

    playRound(playerChoice,computerPlay());
    // return playerChoice;
}

reset.addEventListener('click',() => location.reload());
// const rounds = () => 
//     prompt("How many rounds you want to play?",5);
window.onload = () => 
    rounds = prompt("How many rounds you wants to play?",5);


function computerPlay(){        //Computes random number and setting computer's choice
        let number = Math.floor(Math.random() * 3);
        let value;
        switch(number){
            case 0: value = "stone";
            break;
            case 1: value = "paper";
            break;
            default: value = "scissor";
        }
        return value;
    }

    // function playerPlay(){          //getting user input with conditions
    //     let inpArray = ['stone', 'paper','scissor'];
    //     let playerChose="";
    //     var validCity = false;
    //     while(!validCity) {
    //         playerChose = prompt("What would you like to choose?").toLowerCase();
    //         if(inpArray.indexOf(playerChose) != -1) validCity = true;
    //     }
    //     if(playerChose === "scissor"){
    //         playerChose = "scissors";
    //     }
    //     if(playerChose === "rock"){
    //         playerChose = "stone";
    //     }
    //     return playerChose;
    // }

    var playerCt = 0;           //setting player win count
    var computerCt = 0;         //setting computer win count

    function playRound(playerSelection,computerSelection){          //judging criteria
        if(playerSelection === 'stone' && computerSelection === 'scissor'){
            pScore.textContent = ++playerCt;
            comment.textContent = "Player Wins! Rock crushed the scissor";
        }else if (playerSelection === 'paper' && computerSelection === 'stone'){
            pScore.textContent = ++playerCt;
            comment.textContent = "Player Wins! Paper rolls up rock";
        }else if (playerSelection === 'scissor' && computerSelection === 'paper'){
            pScore.textContent = ++playerCt;
            comment.textContent = "Player Wins! Scissor cuts paper";
        }else if (playerSelection === 'scissor' && computerSelection === 'stone'){
            cScore.textContent = ++computerCt;
            comment.textContent =  "Computer Wins! Scissor was crushed by rock"
        }else if (playerSelection === 'stone' && computerSelection === 'paper'){
            cScore.textContent = ++computerCt;
            comment.textContent = "Computer Wins! Rock was rolled up by paper";
        }else if (playerSelection === 'paper' && computerSelection === 'scissor'){
            cScore.textContent = ++computerCt;
            comment.textContent = "Computer Wins! Paper was cut by scissors";
        }else{
            comment.textContent = "Match in Tie";
        }

        check();
    }

    function disableButtons(){
    btn.forEach(button => button.setAttribute('disabled',true));
    // btn.forEach(button => {
    //     button.removeEventListener('click', getPlayer);
    //   });
    }

    function check(){
        if(Number(rounds)===0){
            rounds = "5";
        }
        if(playerCt == Number(rounds)){
            comment.textContent = "YOU WON THE GAME :)";
            comment.style.fontWeight = "700";
            cScore.style.fontWeight = "300";
            disableButtons();
            showRefresh.style.opacity = '1';
            // showRefresh.style.visibility = "visible";
            // showRefresh.setAttribute('display','initial');
        }else if(computerCt == Number(rounds)){
            comment.textContent = "YOU LOST THE GAME :(";
            comment.style.fontWeight = "700";
            pScore.style.fontWeight = "300";
            disableButtons();
            showRefresh.style.opacity = '1';
            // showRefresh.style.visibility = "visible";
            // showRefresh.setAttribute('display','initial');
        }
    }
    // function endGame() {
    //     if(pScore === 5){
    //         comment.textContent = "YOU WON THE GAME :)";
    //         comment.style.fontWeight = "700";
    //     }else{
    //         comment.textContent = "YOU LOST THE GAME :(";
    //         comment.style.fontWeight = "700";
    //     }
    //     pScore.textContent = "";
    //     cScore.textContent = "";
    //     disableButtons();
    // }
    
    // function game(){        //game starts here
    //     while(playerCt <= 5 || computerCt <= 5){
    //         // playRound(playerChoice,computerPlay());
    //         const playerSelection = playerPlay();
    //         const computerSelection = computerPlay();
    //         console.log(playRound(playerSelection,computerSelection));
    //         if(playerCt === 5){
    //             // console.log("Player Wins :)");
    //             comment.textContent = "YOU WON THE GAME :)";
    //             comment.style.fontWeight = "700";
    //             break;
    //         }else if (computerCt === 5){
    //             // console.log("Computer Wins :(");
    //             comment.textContent = "YOU LOST THE GAME :(";
    //             comment.style.fontWeight = "700";
    //             break;
    //         }
    //     }   
    // }


