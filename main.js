var playerOneChoise
var playerTwoChoise
var winner

//1 == rock
//2 == paper
//3 == scissors
//empate: winner = 0
//jogador 1 ganha: winner = 1
//jogador 2 ganha: winner = 2

function firstPlayerChoise(choise) {
  playerOneChoise = choise
  alert(choise)
}
function secondPlayerChoise(choise2) {
  playerTwoChoise = choise2
  alert(choise2)
}

// if (playerOneChoise == playerTwoChoise) {
//   winner = 0
// } else if (playerOneChoise == 1 && playerTwoChoise == 2) {
//   winner = 2
// } else if (playerOneChoise == 1 && playerTwoChoise == 3) {
//   winner = 1
// } else if (playerOneChoise == 2 && playerTwoChoise == 1) {
//   winner = 1
// } else if (playerOneChoise == 2 && playerTwoChoise == 3) {
//   winner = 2
// } else if (playerOneChoise == 3 && playerTwoChoise == 1) {
//   winner = 2
// } else if (playerOneChoise == 3 && playerTwoChoise == 2) {
//   winner = 1
// }
// alert(winner)
