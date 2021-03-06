/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    const temp = this.side.reduce((a, b) => a + b);
    return temp;
  }
}
