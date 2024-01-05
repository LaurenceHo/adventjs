export function organizeGifts(gifts: string) {
  let result = '';
  const giftsArray = gifts.split(/[a-z]/).filter((s) => s !== '');
  const charactersArray = gifts.split(/[0-9]+/).filter((s) => s !== '');

  giftsArray.forEach((g, i) => {
    const amountOfGift = Number(g);
    const currentType = charactersArray[i];

    const pallets = Math.floor(amountOfGift / 50);
    const boxes = Math.floor((amountOfGift % 50) / 10);
    const remainingGifts = amountOfGift % 10;

    for (let i = 0; i < pallets; i++) {
      result += `[${currentType}]`;
    }

    for (let i = 0; i < boxes; i++) {
      result += `{${currentType}}`;
    }

    if (remainingGifts > 0) {
      result += '(';
      for (let i = 0; i < remainingGifts; i++) {
        result += currentType;
      }
      result += ')';
    }
  });

  return result;
}
