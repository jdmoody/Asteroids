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
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[1],
      this.pos[0],
      this.radius,
      3,
      2 * Math.PI,
      false
    );

    ctx.fill();
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