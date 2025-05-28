import { calculateCubePixels } from "./days/0405-draw-cube/draw-cube";

const script = document.querySelector("#app")!;
script.addEventListener("load", function () {
  calculateCubePixels(3).forEach((line) => window.document.writeln(line));
});
