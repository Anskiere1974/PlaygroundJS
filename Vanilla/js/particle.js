// *************************************************************************
// ***                           Particles                               ***
// *************************************************************************
var Particle = function(x, y, speed, direction, grav) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.direction = direction;
  this.grav = grav;
    
  // Create Location vector
  this.position = new Vector(this.x, this.y);
  // Create Velocity vector
  this.velocity = new Vector(0, 0);
  this.velocity.setLength(this.speed);
  this.velocity.setAngle(this.direction);
  // Create gravity vector
  this.gravity = new Vector(0, this.grav || 0);
};

// update() will add gravity to velocity
// update() will add velocity to position
Particle.prototype.update = function() {
  this.velocity.addTo(this.gravity);
  this.position.addTo(this.velocity);
};