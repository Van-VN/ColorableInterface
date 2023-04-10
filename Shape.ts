import { Colorable } from "./Colorable";

export class Shape implements Colorable {
  name: string;
  hasColor: boolean;

  constructor(name: string, color: boolean) {
    this.name = name;
    this.hasColor = color;
  }

  howToColor(): string {
    return `Color all sides`;
  }

  show(): string {
    return `I am a shape. My name is ${this.name}`;
  }

  calculateArea(): number {
    return 1;
  }
}
