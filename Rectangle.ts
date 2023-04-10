import { Shape } from "./Shape";

export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number, name: string, color: boolean) {
    super(name, color);
    this.width = width;
    this.height = height;
    this.hasColor = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return (this.width + this.height) * 2;
  }
}
