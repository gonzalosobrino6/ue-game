function Background (ctx) {
  this.ctx = ctx;

  this.x = 0;
  this.y = 0;
  this.w = this.ctx.canvas.width;
  this.h = this.ctx.canvas.height;

  this.img = new Image;
  this.img.src = "assets/img/cabtutticonfetti.v2.jpg";

  this.vx = 2;

}

Background.prototype.draw = function () {
  this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );

  this.ctx.drawImage(
    this.img,
    this.x + this.w,
    this.y,
    this.w,
    this.h
  );


}

Background.prototype.move = function () {
  if (this.x + this.w <= 0) {
    this.x = 0;
  } else {
      this.x -= this.vx;
  }
}