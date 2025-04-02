export function rollCall(input: Array<string>): Array<string> {
  return input.map(s => s.split('').reverse().join('')).sort()
}
