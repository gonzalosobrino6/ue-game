function Game (canvasElement) {
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
  this.ctx = canvasElement.getContext("2d");

  this.intervalId = undefined;

  this.bg = new Background(this.ctx);

}

Game.prototype.start = function () {
  this.intervalId = setInterval(function() {
    this.clearAll();
    this.drawAll();
    this.moveAll();
  }.bind(this), DRAW_INTERVAL_MS);
}

Game.prototype.drawAll = function () {
  this.bg.draw();
}

Game.prototype.moveAll = function () {

}

Game.prototype.clearAll = function () {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}
