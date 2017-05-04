// *************************************************************************
// ***                           Particles                               ***
// *************************************************************************
// X Position
// Y Position
// speed: Magnitude of the velocity vector
// direction: angle of the velocity vector
var Particle = function(x, y, speed, direction) {
      this.x = x; // X Position on the canvas
      this.y = y; // Y Position on the canvas
      this.vx = Math.cos(direction) * speed; // x-velocity of the particle
      this.vy = Math.sin(direction) * speed; // y-velocity of the particle
      this.gravity = 0; // gravity force, if there is any
      this.thrustx = 0; // thrust in x direction
      this.thrusty = 0; // thrust in y direction
};

// calculates the Magnitude of the velocity vector
Particle.prototype.getSpeed = function() {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
};

// sets the Magnitude of the velocity vector
Particle.prototype.setSpeed = function(speed) {
    var heading = this.getHeading();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
};

// calculates the current angle of the velocity vector
Particle.prototype.getHeading = function(){
    return Math.atan2(this.vy, this.vx);  
};

// sets the Angle of the velocity vector
Particle.prototype.setHeading = function(heading) {
    var speed = this.getSpeed();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
};

// adds acceleration forces to the velocity vector
Particle.prototype.accelarate = function(ax, ay) {
    this.vx += ax;
    this.vy += ay;  
};

// will update the Particle
Particle.prototype.update = function() {
    // adds gravity to velocity vector
    this.vy += this.gravity;
    // adds velocity vector to position vector
    this.x += this.vx;
    this.y += this.vy;  
};

// will return the angle towards a second particle
Particle.prototype.angleTo = function(p2) {
    return Math.atan2(p2.y - this.y, p2.x - this.x);
};

// will return the distance between two particles
Particle.prototype.distanceTo = function(p2) {
    var dx = p2.x - this.x,
        dy = p2.y - this.y;

    return Math.sqrt(dx * dx + dy * dy);  
};