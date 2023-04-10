import { Circle } from "./Circle";

export class Cylinder extends Circle {
  height: number;

  constructor(name: string, radius: number, height: number, color: boolean) {
    super(name, radius, color);
    this.height = height;
    this.hasColor = color;
  }

  calculateArea(): number {
    return super.calculateArea() * 2 + super.calculatePerimeter() * this.height;
  }

  calculateVolume(): number {
    return super.calculateArea() * this.height;
  }
}
