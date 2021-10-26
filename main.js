var playerOneChoise
var playerTwoChoise
var playerOneScore
var playerTwoScore

//1 == rock
//2 == paper
//3 == scissors
//empate: winner = 0
//jogador 1 ganha: winner = 1
//jogador 2 ganha: winner = 2

function firstPlayerChoise(choise) {
  playerOneChoise = choise
  document
    .getElementById('playerOne-choice-' + playerOneChoise)
    .classList.add('selected')
}

function secondPlayerChoise(choise) {
  playerTwoChoise = choise
  document
    .getElementById('playerTwo-choice-' + playerTwoChoise)
    .classList.add('selected')
}

function play() {
  let winner
  if (playerOneChoise == playerTwoChoise) {
    winner = 0
    messages.textContent = `Empate`
  } else if (playerOneChoise == 1 && playerTwoChoise == 2) {
    winner = 2
    playerTwoScore++
    messages.textContent = `O jogador ${winner} ganhou`
  } else if (playerOneChoise == 1 && playerTwoChoise == 3) {
    winner = 1
    messages.textContent = `O jogador ${winner} ganhou`
    playerOneScore++
  } else if (playerOneChoise == 2 && playerTwoChoise == 1) {
    winner = 1
    messages.textContent = `O jogador ${winner} ganhou`
    playerOneScore++
  } else if (playerOneChoise == 2 && playerTwoChoise == 3) {
    winner = 2
    messages.textContent = `O jogador ${winner} ganhou`
    playerTwoScore++
  } else if (playerOneChoise == 3 && playerTwoChoise == 1) {
    winner = 2
    messages.textContent = `O jogador ${winner} ganhou`
    playerTwoScore++
  } else if (playerOneChoise == 3 && playerTwoChoise == 2) {
    winner = 1
    messages.textContent = `O jogador ${winner} ganhou`
    playerOneScore++
  }

  messages = document.getElementById('messages')
  messages.style.display = 'flex'

  document
    .getElementById('playerOne-choice-' + playerOneChoise)
    .classList.remove('selected')

  document
    .getElementById('playerTwo-choice-' + playerTwoChoise)
    .classList.remove('selected')
}
