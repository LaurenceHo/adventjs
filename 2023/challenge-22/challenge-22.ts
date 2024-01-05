export function compile(code: string) {
  let counter = 0;
  let returnMark = -1;

  for (let i = 0; i < code.length; i++) {
    const c = code[i];
    if (c === '+') {
      counter++;
    } else if (c === '*') {
      counter *= 2;
    } else if (c === '-') {
      counter--;
    } else if (c === '%') {
      returnMark = i;
    } else if (c === '<' && returnMark > -1) {
      i = returnMark;
      returnMark = -1;
    } else if (c === '¿') {
      if (counter <= 0) {
        i = code.indexOf('?', i);
      }
    }
  }
  return counter;
}
