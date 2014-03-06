(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});


  var Asteroid = Asteroids.Asteroid = function (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.color = color;
    this.radius = radius;
  };

  Asteroids.inherits(Asteroid, Asteroids.MovingObject);

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