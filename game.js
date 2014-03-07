(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(num) {
    this.ship = new Asteroids.Ship();
    this.asteroids = this.addAsteroids(1);
    this.timer = Date.now();
  };

  Game.DIM_Y = 750;
  Game.DIM_X = 1000;
  Game.FPS = 16;

  Game.prototype.addAsteroids = function(numAsteroids) {
    var asteroids = [];
    for(var i = 0; i < numAsteroids; i++){
      var new_asteroid = Asteroids.Asteroid.
                         randomAsteroid(Game.DIM_X, Game.DIM_Y);
      if (!this.ship.isCollidedWith(new_asteroid)) {
        asteroids.push(new_asteroid);
      }
      else {
        i--;
      }
    };
    return asteroids;
  };

  Game.prototype.checkKeys = function() {
    var my_game = this;
    if(key.isPressed("up")) this.ship.power(0.5);
    if(key.isPressed("left")) this.ship.turn(-1);
    if(key.isPressed("right")) this.ship.turn(1);
    if(key.isPressed("space")) this.ship.fireBullet();
    // root.key('up', function() { my_game.ship.power(-1); } );
    // root.key('left', function() { my_game.ship.turn(-1); } );
    // root.key('right', function() { my_game.ship.turn(1); } );
    // root.key('space', function() { my_game.ship.fireBullet()} );
  }

  Game.prototype.checkCollisions = function() {
    for(var i = 0; i < this.asteroids.length; i++){
      if (this.ship.isCollidedWith(this.asteroids[i])) {
        this.timer = Date.now() - this.timer;
        console.log(this.asteroids);
        alert("You hit an asteroid! You survived " + (this.timer/1000) +
                                                           " seconds!");
        this.stop();
      }
    };
  };

  Game.prototype.removeAsteroids = function() {
    for(var i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].delete === true) {
        var oldAst = this.asteroids.splice(i, 1)[0];
        oldAst.makeBabies(this);
        console.log(this.asteroids);
      }
    }
    
  };

  Game.prototype.removeBullets = function() {
    for(var i = 0; i < this.ship.bullets.length; i++) {
      if (this.ship.bullets[i].delete === true) {
        this.ship.bullets.splice(i, 1);
      }
    }
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });

    this.ship.bullets.forEach( function(bullet){
      bullet.draw(ctx);
    });

    this.ship.draw(ctx);
  };

  Game.prototype.move = function() {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move(Game.DIM_Y, Game.DIM_X);
    });

    this.ship.move(Game.DIM_Y, Game.DIM_X);

    var game = this;
    this.ship.bullets.forEach( function(bullet) {
      bullet.move(Game.DIM_Y, Game.DIM_X);
      bullet.hitAsteroids(game.asteroids, game);
    });

    this.removeBullets();
    this.removeAsteroids();

  };

  Game.prototype.step = function(ctx) {
    this.move();
    this.draw(ctx);
    this.checkCollisions();
    this.checkKeys();
  };

  Game.prototype.start = function(canvasEl) {
    canvasEl.width = Game.DIM_X
    canvasEl.height = Game.DIM_Y
    var ctx = canvasEl.getContext("2d");
    var game = this;
    this.game_timer = window.setInterval(function () {
      game.step(ctx);
    }, Game.FPS);

  };

  Game.prototype.stop = function() {
    clearInterval(this.game_timer);
  };

})(this);