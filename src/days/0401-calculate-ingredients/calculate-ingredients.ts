export function calculateIngredients(
  ingredients: Array<{ name: string; amount: number }>,
  servings: number,
) {
  return ingredients.map(({ name, amount }) => ({
    name,
    amount: amount * servings,
  }));
}
