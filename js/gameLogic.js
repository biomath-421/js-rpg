document.getElementById("btnHitP1");
document.getElementById("btnHealP1");
document.getElementById("yieldP1");
document.getElementById("btnHitP2");
document.getElementById("btnHealP2");
document.getElementById("btn-yieldP2");

let tourPlayer1 = true;
let tourPlayer2 = false;

let scorePlayer1 = parseInt(
  document.getElementById("scoreP1").getAttribute("value")
);

let scorePlayer2 = parseInt(
  document.getElementById("scoreP2").getAttribute("value")
);

console.log(scorePlayer1);

do {
  if (tourPlayer1) {
    console.log("player1 attaque");
    tourPlayer1 = false;
    tourPlayer2 = true;

    console.log(`score player 2 => ${(scorePlayer2 -= 1)}`);
  }

  if (tourPlayer2) {
    console.log("player2 attaque");
    tourPlayer1 = true;
    tourPlayer2 = false;
    console.log(`score player 1 => ${(scorePlayer1 -= 2)}`);
  }
} while (scorePlayer1 > 0 && scorePlayer1 > 0);

console.log("-----------------------------------------");

if (scorePlayer1 > scorePlayer2) {
  console.log("Player 1 a gagne");
} else {
  console.log("Player 2 a gagne");
}
