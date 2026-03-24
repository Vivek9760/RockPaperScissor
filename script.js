const choices = ["rock", "paper", "scissors"];
const emojis = { rock: "🪨", paper: "📄", scissors: "✂️" };

let scores = { you: 0, draw: 0, ai: 0 };
let round = 0;
let busy = false;

const winQuips = [
  "Lucky. The AI let you win. Probably.",
  "Enjoy it. It won't happen again.",
  "Even a broken clock is right twice a day.",
  "Congratulations. The AI is devastated.",
  "You beat a machine. Humanity is saved.",
  "The AI has filed a formal complaint.",
  "Statistically, you were due for a win.",
];

const loseQuips = [
  "And just like that, the AI wins again.",
  "Maybe try closing your eyes next time.",
  "The AI sends its condolences.",
  "This is embarrassing. For you, I mean.",
  "The machine learning is doing machine learning.",
  "Have you considered a different hobby?",
  "Your ancestors are weeping softly.",
];

const drawQuips = [
  "A tie. Nobody wins. Perfectly balanced.",
  "Great minds think alike. Worrying.",
  "The AI copied your energy.",
  "Not a loss, but definitely not a win.",
  "You two should go bowling together.",
  "The universe is indifferent to your efforts.",
];

function getWinner(player, ai) {
  if (player === ai) return "draw";
  if ((player === "rock" && ai === "scissors") || (player === "paper" && ai === "rock") || (player === "scissors" && ai === "paper")) return "win";
  return "lose";
}

function randomQuip(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function play(playerChoice) {
  if (busy) return;
  busy = true;

  // Reset buttons
  document.querySelectorAll(".choice-btn").forEach((b) => b.classList.remove("selected"));
  document.getElementById("btn-" + playerChoice).classList.add("selected");

  // Reset displays
  const pd = document.getElementById("playerDisplay");
  const ad = document.getElementById("aiDisplay");
  const rt = document.getElementById("resultTitle");
  const rq = document.getElementById("resultQuip");

  pd.className = "choice-display";
  ad.className = "choice-display";
  rt.className = "result-title";
  rq.className = "result-quip";

  // Show player choice immediately
  pd.textContent = emojis[playerChoice];
  pd.classList.add("pop");

  // Show thinking
  ad.textContent = "🤔";
  document.getElementById("thinking").classList.add("active");
  rt.textContent = "";
  rq.textContent = "";

  setTimeout(() => {
    const aiChoice = choices[Math.floor(Math.random() * 3)];
    const result = getWinner(playerChoice, aiChoice);

    document.getElementById("thinking").classList.remove("active");
    ad.textContent = emojis[aiChoice];
    ad.classList.add("pop");

    round++;
    document.getElementById("roundInfo").textContent = `Round ${round}`;

    if (result === "win") {
      scores.you++;
      pd.classList.add("win");
      ad.classList.add("lose");
      ad.classList.add("shake");
      rt.textContent = "YOU WIN";
      rt.classList.add("win");
      rq.textContent = randomQuip(winQuips);
    } else if (result === "lose") {
      scores.ai++;
      ad.classList.add("win");
      pd.classList.add("lose");
      pd.classList.add("shake");
      rt.textContent = "YOU LOSE";
      rt.classList.add("lose");
      rq.textContent = randomQuip(loseQuips);
    } else {
      scores.draw++;
      pd.classList.add("draw-state");
      ad.classList.add("draw-state");
      rt.textContent = "DRAW";
      rt.classList.add("draw");
      rq.textContent = randomQuip(drawQuips);
    }

    setTimeout(() => {
      rt.classList.add("visible");
      rq.classList.add("visible");
    }, 50);

    document.getElementById("scoreYou").textContent = scores.you;
    document.getElementById("scoreDraw").textContent = scores.draw;
    document.getElementById("scoreAI").textContent = scores.ai;

    busy = false;
  }, 800);
}

function resetGame() {
  scores = { you: 0, draw: 0, ai: 0 };
  round = 0;
  busy = false;

  document.getElementById("scoreYou").textContent = 0;
  document.getElementById("scoreDraw").textContent = 0;
  document.getElementById("scoreAI").textContent = 0;
  document.getElementById("roundInfo").textContent = "Round 0";

  const pd = document.getElementById("playerDisplay");
  const ad = document.getElementById("aiDisplay");
  pd.className = "choice-display";
  ad.className = "choice-display";
  pd.textContent = "❓";
  ad.textContent = "❓";

  const rt = document.getElementById("resultTitle");
  const rq = document.getElementById("resultQuip");
  rt.className = "result-title";
  rq.className = "result-quip";
  rt.textContent = "Pick something.";
  rq.textContent = "Don't overthink it, it's rock paper scissors.";

  setTimeout(() => {
    rt.classList.add("visible");
    rq.classList.add("visible");
  }, 50);

  document.querySelectorAll(".choice-btn").forEach((b) => b.classList.remove("selected"));
  document.getElementById("thinking").classList.remove("active");
}

// Init result visible
window.onload = () => {
  document.getElementById("resultTitle").classList.add("visible");
  document.getElementById("resultQuip").classList.add("visible");
};
