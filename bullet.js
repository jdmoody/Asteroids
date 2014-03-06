(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, direction) {
    var velY = 10 * Math.sin(direction);
    var velX = 10 * Math.cos(direction);
    bullet_start = [pos[1], pos[0]]
    this.pos = bullet_start;
    this.vel = [velY, velX];
    this.radius = 3;
    this.color = "red";
    this.direction = direction;
  }

  Asteroids.inherits(Bullet, Asteroids.MovingObject);

})(this);