export function diceCombos(amount: number, faces: number, sum: number): number {
  let count = 0;
  let queue: Array<{ sum: number; amount: number }> = [{ sum: 0, amount: 0 }];

  while (queue.length > 0) {
    let current = queue.shift()!;

    if (current.amount === amount && current.sum === sum) {
      count++;
      continue;
    }

    if (current.amount < amount) {
      for (let face = 1; face <= faces; face++) {
        let newSum = current.sum + face;
        queue.push({ sum: newSum, amount: current.amount + 1 });
      }
    }
  }

  return count;
}
