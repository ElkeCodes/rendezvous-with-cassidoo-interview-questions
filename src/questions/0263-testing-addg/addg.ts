/*
 Since the goal of this interview question was to test all possible scenarios in which addg() can be used,
 I'm using the any type for this unique situation
 */

export function addg(a?: any) {
  if (a === undefined) return a;
  return function g(b: any) {
    if (b !== undefined) {
      return addg(a + b);
    }
    return a;
  };
}
