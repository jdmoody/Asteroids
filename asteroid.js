(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});


  var Asteroid = Asteroids.Asteroid = function (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.color = color;
    this.radius = radius;
    this.delete = false;
    this.direction = Math.random();
  };

  Asteroids.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.draw = function(ctx) {
    var img = document.getElementById("grump");
                  
    var xOffset = img.width / -2;
    var yOffset = img.height / -2;
    ctx.save();
    ctx.translate(this.pos[1], this.pos[0]);
    ctx.scale(this.radius/150, this.radius/150);
    ctx.rotate(this.direction);
    ctx.drawImage(img, xOffset, yOffset);
    ctx.restore();
  }

  Asteroid.randomAsteroid = function (dimX, dimY) {
    var randPosY = Math.floor(Math.random() * (dimY + 1));
    var randPosX = Math.floor(Math.random() * (dimX + 1));
    var randRad = Math.floor(Math.random() * (41) + 10);
    var pos = [randPosY, randPosX];
    var vel = Asteroid.randomVec();
    return new Asteroid(pos, vel, randRad, "black");
  }

  Asteroid.randomVec = function () {
    randVelY = (Math.random() * (5) - 2);
    randVelX = (Math.random() * (5) - 2);
    return [randVelY, randVelX];
  }
})(this);