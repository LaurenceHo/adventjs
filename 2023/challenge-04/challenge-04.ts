export function decode(message: string) {
  let reversedMessage = message;
  const reverse = (sliceString: string) => {
    const splitString = sliceString.split('');
    const reverseArray = splitString.reverse();

    return reverseArray.join('');
  };

  const findBracketArray = (m: string) => {
    const regex = /\(([^()]+)\)/g;
    return m.match(regex) || [];
  };

  const composeMessage = (bracketArray: string[]) => {
    bracketArray.forEach((s) => {
      const removeBracket = s.substring(1, s.length - 1);
      const reverseString = reverse(removeBracket);
      reversedMessage = reversedMessage.replace(s, reverseString);
    });
  };

  composeMessage(findBracketArray(message));

  if (findBracketArray(reversedMessage).length > 0) {
    composeMessage(findBracketArray(reversedMessage));
    return reversedMessage;
  } else {
    return reversedMessage;
  }
}
