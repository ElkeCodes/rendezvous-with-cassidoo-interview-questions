const KEYBOARD_MAPPINGS: Record<string, string> = {
  w: "q",
  e: "w",
  r: "e",
  t: "r",
  y: "t",
  u: "y",
  i: "u",
  o: "i",
  p: "o",
  "[": "p",
  s: "a",
  d: "s",
  f: "d",
  g: "f",
  h: "g",
  j: "h",
  k: "j",
  l: "k",
  ";": "l",
  x: "z",
  c: "x",
  v: "c",
  b: "v",
  n: "b",
  m: "n",
  ",": "m",
};

export function translateRightShift(input: string): string {
  return input
    .split("")
    .map((c) => KEYBOARD_MAPPINGS[c] ?? c)
    .join("");
}
