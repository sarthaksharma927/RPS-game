function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('choices').textContent =
    `You chose: ${userChoice.toUpperCase()} | Computer chose: ${computerChoice.toUpperCase()}`;
  if (userChoice === computerChoice) {
    document.getElementById('result').textContent = "It's a Draw! 🤝";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    document.getElementById('result').textContent = "🎉 You Win!";
  } else {
    document.getElementById('result').textContent = "😢 You Lose!";
  }
}