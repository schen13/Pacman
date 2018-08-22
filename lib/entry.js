// sprite sheet from http://bingo.raindanceirrigation.co/pac-man-sprite-sheet/

const GameView = require('./game_view');

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.height = 805;
  canvasEl.width = 805;
  const ctx = canvasEl.getContext("2d");
  const gview = new GameView(ctx);
});