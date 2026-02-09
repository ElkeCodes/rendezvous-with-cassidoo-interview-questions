type Direction = "left" | "up" | "right" | "down";

const printUpArrow = (size: number): void => {
  for (let i = 0; i < size; i++) {
    if (i === 0) {
      console.log(" ".repeat(size - 1) + "*");
    } else {
      console.log(" ".repeat(size - i - 1) + "*" + " ".repeat(i * 2 - 1) + "*");
    }
  }
};
const printRightArrow = (size: number): void => {
  for (let i = 0; i < size - 1; i++) {
    console.log(" ".repeat(i) + "*");
  }
  for (let i = size - 1; i >= 0; i--) {
    console.log(" ".repeat(i) + "*");
  }
};
const printDownArrow = (size: number): void => {
  for (let i = size - 1; i >= 0; i--) {
    if (i === 0) {
      console.log(" ".repeat(size - 1) + "*");
    } else {
      console.log(" ".repeat(size - i - 1) + "*" + " ".repeat(i * 2 - 1) + "*");
    }
  }
};
const printLeftArrow = (size: number): void => {
  for (let i = 0; i < size - 1; i++) {
    console.log(" ".repeat(size - i) + "*");
  }
  for (let i = size - 1; i >= 0; i--) {
    console.log(" ".repeat(size - i) + "*");
  }
};

export function printArrow(direction: Direction, size: number): void {
  switch (direction) {
    case "up":
      printUpArrow(size);
      break;
    case "right":
      printRightArrow(size);
      break;
    case "down":
      printDownArrow(size);
      break;
    case "left":
      printLeftArrow(size);
      break;
  }
}
