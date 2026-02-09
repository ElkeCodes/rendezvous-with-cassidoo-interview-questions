export function splitByWidths(
  str: string,
  widths: Array<number>,
): Array<string> {
  let [width, ...remainingWidths] = widths;
  if (str.length <= width) {
    return [str];
  }
  return [
    str.substring(0, width),
    ...splitByWidths(
      str.substring(width),
      remainingWidths.length > 0 ? remainingWidths : [width],
    ),
  ];
}
