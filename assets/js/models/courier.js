function Courier (ctx) {
  this.ctx = ctx;

  this.x = 0;
  this.y = 475;
  this.w = 100;
  this.h = 100;

  this.img = new Image;
  this.img.src = "assets/img/courier.png";

  this.vx = 2;

}

Courier.prototype.draw = function () {
  this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );
}

Courier.prototype.move = function () {
  // if (this.x + this.w <= 0) {
  //   this.x = 0;
  // } else {
  //     this.x -= this.vx;
  // }
}