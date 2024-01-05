export function organizeChristmasDinner(dishes: string[][]) {
  let result = [];
  const ingredientMap = new Map();

  for (const dish of dishes) {
    const [dishName, ...ingredients] = dish;

    for (const ingredient of ingredients) {
      if (!ingredientMap.has(ingredient)) {
        ingredientMap.set(ingredient, [dishName]);
      } else {
        ingredientMap.get(ingredient).push(dishName);
      }
    }
  }
  const filteredArray = [...ingredientMap.entries()].sort().filter((ing) => ing[1].length > 1);
  result = filteredArray.map((temp) => [temp[0], temp[1].sort()].flat());

  return result;
}
