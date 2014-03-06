(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, direction) {
    var velY = 10 * -Math.sin(direction);
    var velX = 10 * -Math.cos(direction);
    bullet_start = [pos[0], pos[1]];
    this.pos = bullet_start;
    this.vel = [velY, velX];
    this.radius = 3;
    this.color = "red";
    this.direction = direction;
    this.delete = false;
  }

  Asteroids.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.move = function (DIM_Y, DIM_X) {
    Asteroids.MovingObject.prototype.move.call(this, DIM_Y + 50, DIM_X + 50);
    if ((this.pos[0] >= DIM_Y) || (this.pos[0] < 0) ||
        (this.pos[1] >= DIM_X) || (this.pos[1] < 0)) {
          this.delete = true;
    }
  };

  Bullet.prototype.hitAsteroids = function(asteroids, game) {
    for(var i = 0; i < asteroids.length; i++) {
      if (this.isCollidedWith(asteroids[i])) {
        // game.removeAsteroid(asteroids[i]);
        // game.removeBullet(this);

        asteroids[i].delete = true;
        this.delete = true;
      }
    }
  }
})(this);