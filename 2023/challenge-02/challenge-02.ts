export function manufacture(gifts: string[], materials: string) {
  const result = [];

  for (const gift of gifts) {
    if (canMakeGift(gift, materials)) {
      result.push(gift);
    }
  }

  function canMakeGift(gift: string, ms: string) {
    const materialCount = new Map();

    for (const char of ms) {
      materialCount.set(char, (materialCount.get(char) ?? 0) + 1);
    }

    for (const char of gift) {
      if (!materialCount.has(char) || materialCount.get(char) === 0) {
        return false; // Required material is not available
      }
    }

    return true; // All materials are available for the gift
  }

  return result;
}
