export function postfix(expression: string): number {
  let result: Array<number> = [];
  expression.split(" ").forEach((x) => {
    switch (x) {
      case "*":
        if (result.length < 2) {
          throw Error("not enough parameters to perform multiplication");
        }
        const a = result.pop()!;
        const b = result.pop()!;
        result.push(b * a);
        break;
      case "+":
        if (result.length < 2) {
          throw Error("not enough parameters to perform addition");
        }
        const c = result.pop()!;
        const d = result.pop()!;
        result.push(d + c);
        break;
      case "/":
        if (result.length < 2) {
          throw Error("not enough parameters to perform division");
        }
        const e = result.pop()!;
        const f = result.pop()!;
        result.push(f / e);
        break;
      case "-":
        if (result.length < 2) {
          throw Error("not enough parameters to perform subtraction");
        }
        const g = result.pop()!;
        const h = result.pop()!;
        result.push(h - g);
        break;
      default:
        result.push(parseInt(x, 10));
        break;
    }
  });
  return result.pop()!;
}
