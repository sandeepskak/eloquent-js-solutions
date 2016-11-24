//Exercise 1
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  this.x = this.x + vector.x;
  this.y = this.y + vector.y;
  return new Vector(this.x, this.y);
}

Vector.prototype.minus = function(vector) {
  this.x = this.x - vector.x;
  this.y = this.y - vector.y;
  return new Vector(this.x, this.y);
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}});
