var randomNumber1 = Math.floor((Math.random() * 6) + 1) ;

var randomDice1 = "images/dice" + randomNumber1 + ".png" ;

document.querySelectorAll("img")[0].setAttribute("src", randomDice1)

var randomNumber2 = Math.floor((Math.random() *6) + 1) ;

var randomDice2 = "images/dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src", randomDice2);
//if player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
//if player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 wins!";
}
else {
  document.querySelector("h1").textContent = "Draw!"
}
