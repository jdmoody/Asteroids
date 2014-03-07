(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function () {
    this.pos = [250, 250];
    this.vel = [0, 0];
    this.direction = Math.PI/2;
    
    this.radius = 10;
    this.bullets = [];
  };

  Asteroids.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.draw = function(ctx) {
    var img = document.getElementById("nyan");
                  
    var xOffset = img.width / -2;
    var yOffset = img.height / -2;
    ctx.save();
    ctx.translate(this.pos[1], this.pos[0]);
    ctx.rotate(this.direction);
    ctx.drawImage(img, xOffset, yOffset);
    ctx.restore();
  };

  Ship.prototype.power = function(dir) {
    this.vel[0] += dir * -Math.sin(this.direction);
    this.vel[1] += dir * -Math.cos(this.direction);
  };

  Ship.prototype.turn = function(dir) {
    this.direction += dir / 5;
  };

  Ship.prototype.fireBullet = function() {
    var bullet = new Asteroids.Bullet(this.pos, this.direction);
    this.bullets.push(bullet);
  };

})(this);