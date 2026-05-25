let score = 0;

document.getElementById("gameButton").onclick = function () {
  score++;
  document.getElementById("score").innerText =
    "Score: " + score;
};
