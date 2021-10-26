var playerOneChoice
var playerTwoChoice
var playerOneScore = 0
var playerTwoScore = 0

//1 == rock
//2 == paper
//3 == scissors
//empate: winner = 0
//jogador 1 ganha: winner = 1
//jogador 2 ganha: winner = 2

function firstPlayerChoice(choice) {
  c = choice
  document.getElementById('playerOne-choice-' + c).classList.add('selected')
}

function secondPlayerChoice(choice) {
  playerTwoChoice = choice
  document
    .getElementById('playerTwo-choice-' + playerTwoChoice)
    .classList.add('selected')
}

function play() {
  let winner
  if (c == playerTwoChoice) {
    winner = 0
    messages.textContent = `Empate`
  } else if (c == 1 && playerTwoChoice == 2) {
    winner = 2
    playerTwoScore++
    messages.textContent = `O jogador ${winner} ganhou`
  } else if (c == 1 && playerTwoChoice == 3) {
    winner = 1
    messages.textContent = `O jogador ${winner} ganhou`
    playerOneScore++
  } else if (c == 2 && playerTwoChoice == 1) {
    winner = 1
    messages.textContent = `O jogador ${winner} ganhou`
    playerOneScore++
  } else if (c == 2 && playerTwoChoice == 3) {
    winner = 2
    messages.textContent = `O jogador ${winner} ganhou`
    playerTwoScore++
  } else if (c == 3 && playerTwoChoice == 1) {
    winner = 2
    messages.textContent = `O jogador ${winner} ganhou`
    playerTwoScore++
  } else if (c == 3 && playerTwoChoice == 2) {
    winner = 1
    messages.textContent = `O jogador ${winner} ganhou`
    playerOneScore++
  }

  messages = document.getElementById('messages')
  messages.style.display = 'flex'

  document.getElementById('playerOne-choice-' + c).classList.remove('selected')

  document
    .getElementById('playerTwo-choice-' + playerTwoChoice)
    .classList.remove('selected')

  document.getElementById('playerOne-score').innerHTML = playerOneScore
  document.getElementById('playerTwo-score').innerHTML = playerTwoScore
}

function reset() {
  playerOneScore = 0
  playerTwoScore = 0

  document.getElementById('playerOne-score').innerHTML = playerOneScore
  document.getElementById('playerTwo-score').innerHTML = playerTwoScore

  messages = document.getElementById('messages')
  messages.style.display = 'none'
}
