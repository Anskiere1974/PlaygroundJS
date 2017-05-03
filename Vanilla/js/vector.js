// *************************************************************************
// ***                           Vectors                                 ***
// *************************************************************************

var Vector = function(x, y) {
  this._x = x;
  this._y = y;
};

Vector.prototype.setX = function(value) {
  this._x = value;
};

Vector.prototype.getX = function() {
  return this._x;
};

Vector.prototype.setY = function(value) {
  this._y = value;
};

Vector.prototype.getY = function() {
  return this._y;
};

Vector.prototype.setAngle = function(angle) {
  var length = this.getLength();
  this._x = Math.cos(angle) * length;
  this._y = Math.sin(angle) * length;
};

// Will calculate the angle in rads of a vector with given x and y
Vector.prototype.getAngle = function() {
  return Math.atan2(this._y, this._x);
};

Vector.prototype.setLength = function(length) {
  var angle = this.getAngle();
  this._x = Math.cos(angle) * length;
  this._y = Math.sin(angle) * length;
};

// Will get the length or magnitude of a vector
Vector.prototype.getLength = function() {
  return Math.sqrt(this._x * this._x + this._y * this._y);
};

// add two vectors together and return a new one
Vector.prototype.add = function(v2) {
  return new Vector(this._x + v2._x, this._y + v2._y);
};

// will subtract one vector from another and return a new one
Vector.prototype.subtract = function(v2) { 
  return new Vector(this._x - v2._x, this._y - v2._y);
};

// will multiply a vector with a given value and return a new vector
Vector.prototype.multiply = function(val) {
  return new Vector(this._x * val, this._y * val);
};

// will divide a vector with a given value and return a new vector
Vector.prototype.divide = function(val) {
  return new Vector(this._x / val, this._y / val);
};

// add one vector to another
Vector.prototype.addTo = function(v2) {
  this._x += v2.getX();
  this._y += v2.getY();
};

// subtract one vector from another
Vector.prototype.subtractFrom = function(v2) {
  this._x -= v2.getX();
  this._y -= v2.getY();
};

// multiply one vector with a given value
Vector.prototype.multiplyBy = function(val) {
  this._x *= val;
  this._y *= val;
};

// divide one vector with a given value
Vector.prototype.divideBy = function(val) {
  this._x /= val;
  this._y /= val;
};