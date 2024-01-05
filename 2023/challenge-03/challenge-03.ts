export function findNaughtyStep(original: string, modified: string) {
  if (original === modified) {
    return '';
  } else {
    const originalArray = [...original].sort();
    const modifiedArray = [...modified].sort();

    if (originalArray.length > modifiedArray.length) {
      return originalArray.find((char, i) => char !== modifiedArray[i]);
    } else {
      return modifiedArray.find((char, i) => char !== originalArray[i]);
    }
  }
}
