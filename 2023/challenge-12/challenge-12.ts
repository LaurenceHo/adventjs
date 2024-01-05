export function checkIsValidCopy(original: string, copy: string) {
  const originalArray = original.split('');
  const symbolToDegrade = '#+:. ';
  let isValid = true;
  let i = 0;
  for (const c of copy) {
    const originalCharacter = originalArray[i];
    i++;
    if (original.length !== copy.length) {
      isValid = false;
      break;
    }

    if (/[#+:.]/.test(originalCharacter)) {
      const index = symbolToDegrade.indexOf(originalCharacter);
      const findSymbol = symbolToDegrade.split('').find((s, i2) => i2 >= index && s === c);
      if (!findSymbol) {
        isValid = false;
        break;
      }
    } else {
      if (originalCharacter === ' ' && c !== ' ') {
        isValid = false;
        break;
      }
      const copyIsNotTheSame = originalCharacter !== c && originalCharacter?.toLowerCase() !== c;
      if (copyIsNotTheSame && /^[^#+:.\s]*$/.test(c)) {
        isValid = false;
        break;
      }
    }
  }

  return isValid;
}
