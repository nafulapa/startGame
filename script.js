var cardOne = 70;
var cardTwo = 20;
var totalCards = cardOne + cardTwo;
var luckyNo = Number(prompt('Choose Your Lucky Number?'))
var messageEl = document.getElementById('messageEl');
var sumEl = document.getElementById('sumEl');
var cardEl = document.getElementById('cardEl');
var msg = 'Congratulations, You have won the game!'
var startGameEl = document.getElementById('startGameEl')
function startGame() {
   console.log(Number(prompt('choose your lucky number')));
}
function messageSent(){
cardEl.textContent =  msg;
sumEl.textContent = 'sum :' + tSum;
}
   





var tSum = totalCards + luckyNo;
if(tSum === 100){
console.log(msg)
}else if(tSum < 100){
console.log(msg)
}
else if(tSum > 100){
console.log(msg)
}


