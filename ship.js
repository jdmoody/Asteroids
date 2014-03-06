(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function () {
    this.pos = [500, 500];
    this.direction = Math.PI/2;
    this.vel = [0, 0];
    this.radius = 10;
    this.color = "blue";
    this.bullets = [];
  };

  Asteroids.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.draw = function(ctx) {
    // ctx.fillStyle = this.color;
//     ctx.beginPath();
//
//     ctx.arc(
//       this.pos[1],
//       this.pos[0],
//       this.radius,
//       3,
//       2 * Math.PI,
//       false
//     );
//
//     ctx.fill();

    var img = document.getElementById("ship");

    var rotateAndCache = function(image, angle) {
      var offscreenCanvas = document.createElement('canvas');
      var offscreenCtx = offscreenCanvas.getContext('2d');

      var size = Math.max(image.width, image.height);
      offscreenCanvas.width = size;
      offscreenCanvas.height = size;

      offscreenCtx.translate(size/2, size/2);
      offscreenCtx.rotate(angle + Math.PI/2);
      offscreenCtx.drawImage(image, -(image.width/2), -(image.height/2));

      return offscreenCanvas;
    }

    var rotShip = rotateAndCache(img, this.direction);
    ctx.drawImage(rotShip, this.pos[1], this.pos[0],
                  this.radius * 3, this.radius * 3);
  }

  Ship.prototype.power = function(dir) {
    this.vel[0] += dir * Math.sin(this.direction);
    this.vel[1] += dir * Math.cos(this.direction);
  };

  Ship.prototype.turn = function(dir) {
    this.direction += dir / 2;
  };

  Ship.prototype.fireBullet = function() {
    var bullet = new Asteroids.Bullet(this.pos, this.direction);
    this.bullets.push(bullet);
  };

})(this);