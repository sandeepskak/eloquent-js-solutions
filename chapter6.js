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

//Exercise 2
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};
