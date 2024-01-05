export function createChristmasTree(ornaments: string, height: number) {
  let ornamentsArray = ornaments.split('');
  let result = '';

  const getOrnamentString = (ornaments: string, row: number) => {
    let ornamentString = '';

    for (let i = 0; i < row; i++) {
      if (ornamentsArray.length === 0) {
        ornamentsArray = ornaments.split('');
      }
      const ornament = ornamentsArray.shift();
      ornamentString += ornament + ' ';
    }

    return ornamentString.trim(); // Remove trailing space
  };

  for (let i = 1; i <= height; i++) {
    const ornamentString = getOrnamentString(ornaments, i);
    const spaces = ' '.repeat(height - i);
    result += `${spaces}${ornamentString}\n`;
  }

  // Trunk
  const trunkSpaces = ' '.repeat(height - 1);
  result += `${trunkSpaces}|\n`;

  return result;
}
