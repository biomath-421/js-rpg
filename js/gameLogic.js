document.getElementById("btnHitP1");
document.getElementById("btnHealP1");
document.getElementById("btnYieldP1");
document.getElementById("btnHitP2");
document.getElementById("btnHealP2");
document.getElementById("btnY ieldP2");

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
    console.log(`score player 2 => ${(scorePlayer2 -= 10)}`);
    tourPlayer2 = true;
    if (scorePlayer2 < 0) {
      tourPlayer2 = false;
    }
  }

  if (tourPlayer2) {
    console.log("player2 attaque");
    tourPlayer1 = false;
    console.log(`score player 1 => ${(scorePlayer1 -= 10)}`);
    tourPlayer1 = true;
    if (scorePlayer1 < 0) {
      tourPlayer1 = false;
    }
  }
} while (scorePlayer1 > 0 && scorePlayer1 > 0);

console.log("-----------------------------------------");
