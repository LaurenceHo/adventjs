export function findFirstRepeated(gifts: number[]) {
  let prevIndex = -1;
  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];
    const found = gifts.findIndex((g, index) => index > i && g === gift);

    if (found > -1) {
      if (prevIndex === -1 || prevIndex > found) {
        prevIndex = found;
      }
    }
  }
  return prevIndex === -1 ? -1 : gifts[prevIndex];
}
