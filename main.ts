import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { Cylinder } from "./Cylinder";
import { Shape } from "./Shape";
import { Colorable } from "./Colorable";

let arr: Shape[] = [];
arr.push(new Circle("Circle1", 12, false));
arr.push(new Rectangle(13, 14, "Rectangle1", false));
arr.push(new Square("Sqr1", 15, true));
arr.push(new Cylinder("Cylin", 21, 12, false));

arr.forEach((item) => {
  console.log(item.calculateArea());
  if (item.hasColor) {
    console.log(item.howToColor());
  }
});
