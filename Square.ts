import { Rectangle } from "./Rectangle";
import { Colorable } from "./Colorable";

export class Square extends Rectangle implements Colorable {
  constructor(name: string, width: number, color: boolean) {
    super(width, width, name, color);
    this.hasColor = color;
  }

  howToColor(): string {
    return `Color all four sides.`;
  }
}
