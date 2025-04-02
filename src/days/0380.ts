export function mealPrep(input: Array<number>): number {
  let kitchenOneTime = 0;
  let kitchenTwoTime = 0;

  input.forEach((time) => {
    if (kitchenOneTime <= kitchenTwoTime) {
      kitchenOneTime += time;
    } else {
      kitchenTwoTime += time;
    }
  });

  return Math.max(Math.ceil(kitchenOneTime / 60), Math.ceil(kitchenTwoTime / 60))
}

/*

30 30 60
25 45 15

*/