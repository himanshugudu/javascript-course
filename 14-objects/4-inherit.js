function Shape(x, y) {
    this.x = x;
    this.y = y;
}

// 1. Explicitly call base (Shape) constructor from subclass (Circle) constructor 
//passing this as the explicit receiver
function Circle(x, y, r) {
    Shape.call(this, x, y);
    // the above statement modifies to this.x and this.y of Circle
    this.r = r;
}

// 2. Use Object.create to construct the subclass prototype object to avoid
// calling the base constructor
Circle.prototype = Object.create(Shape.prototype);

var circle = new Circle(30, 40, 10);

console.log(circle.x);
console.log(circle.y);
console.log(circle.r);
console.log(circle instanceof Shape);
console.log(circle instanceof Circle);