const arr = ['rock','scissors','paper'];
const computerChoice = arr[Math.floor(Math.random()*3 )];
//  console.log(computerChoice);
  let win = 0;
  let lose = 0;
function myGame(userChoice){
   userChoice= userChoice.toLowerCase();


    const computerChoice = arr[Math.floor(Math.random()*3 )];

    // console.log(userChoice);
  if(userChoice!='rock' && userChoice!='scissors'&& userChoice!='paper') {console.log("please enter a valid value"); myGame(prompt("'Rock🪨 , Scissors✂️ , Paper📄").toLowerCase());}
  else if((computerChoice=='paper' && userChoice == 'scissors') || (computerChoice=='rock' && userChoice == 'paper')||(computerChoice=='scissors' && userChoice == 'rock')){ win++ ; console.log(`${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}. You Win!🎉`);}
  else if((computerChoice=='rock' && userChoice == 'scissors')||(computerChoice=='scissors' && userChoice == 'paper')||(computerChoice=='paper' && userChoice == 'rock')){ lose++; console.log(`${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}. You lose!😢`);}
  else{ console.log( `${userChoice} vs ${computerChoice} tied. Play agian`); myGame(prompt("'Rock🪨 , Scissors✂️ , Paper📄").toLowerCase());}


    

 }
for(i=0;i<5;i++){
    myGame(prompt('Rock🪨 , Scissors✂️ , Paper📄'));
    console.log(win,lose)

 }
let result = win > lose ? "You win " : 'You Lose';
console.log(result);
alert(result);



//   if(computerChoice=='rock' && userChoice == 'rock')   console.log(`Computer Choice:${computerChoice} Your Choice : ${userChoice} , You draw`);
//  if(computerChoice=='rock' && userChoice == 'scissors') console.log(`Computer Choice:${computerChoice} Your Choice : ${userChoice} , You lose`);
// //  if(computerChoice=='rock' && userChoice == 'paper') console.log(`Computer Choice:${computerChoice} Your Choice : ${userChoice} , You win `);
// //  if(computerChoice=='scissors' && userChoice == 'rock') console.log(`Computer Choice:${computerChoice} Your Choice : ${userChoice} , You win`);
//  if(computerChoice=='scissors' && userChoice == 'scissors') console.log(`Computer Choice:${computerChoice} Your Choice : ${userChoice} , You draw`);
//  t if(computerChoice=='scissors' && userChoice == 'paper') console.log(`Computer Choice:${computerChoice} Your Choice : ${userChoice} , You lose `);
//  if(computerChoice=='paper' && userChoice == 'rock') console.log(`Computer Choice:${computerChoice} Your Choice : ${userChoice} , You lose`);
// //  if(computerChoice=='paper' && userChoice == 'scissors') console.log(`Computer Choice:${computerChoice} Your Choice : ${userChoice} , You win `);
//  if(computerChoice=='paper' && userChoice == 'paper') console.log(`Computer Choice:${computerChoice} Your Choice : ${userChoice} , You draw`);
 
 