import { Shape } from "./Shape";

export class Circle extends Shape {
  radius: number;

  constructor(name: string, radius: number, color: boolean) {
    super(name, color);
    this.radius = radius;
    this.hasColor = color;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter(): number {
    return Math.PI * this.radius * 2;
  }
}
