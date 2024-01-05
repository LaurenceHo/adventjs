export function getIndexsForPalindrome(word: string) {
  const isPalindrome = (str: string) => str === str.split('').reverse().join('');

  if (isPalindrome(word)) {
    return [];
  }

  for (let i = 0; i < word.length - 1; i++) {
    for (let j = 1; j < word.length; j++) {
      if (i < j) {
        const wordArray = word.split('');
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        if (isPalindrome(wordArray.join(''))) {
          return [i, j];
        }
      }
    }
  }

  return null;
}
