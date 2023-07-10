let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  let firstFighter;
  let secondFighter;
  let num = fighters.length;

  firstFighter = fighters[Math.floor(Math.random() * num)];
  secondFighter = fighters[Math.floor(Math.random() * num)];
  console.log(firstFighter);
  console.log(secondFighter);
  stageEl.textContent = firstFighter + "  vs  " + secondFighter;
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
});
