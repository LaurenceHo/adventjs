export function revealSabotage(store: string[][]) {
  const result = JSON.parse(JSON.stringify(store));
  const calculateNode = (node: string | number) => {
    if (node !== '*') {
      if (node === ' ') {
        node = 1;
      } else {
        node = Number(node) + 1;
      }
    }
    return node;
  };

  for (let row = 0; row < result.length; row++) {
    const line = result[row];
    for (let column = 0; column < line.length; column++) {
      if (line[column] === '*') {
        if (column < line.length - 1) {
          const rightNode = result[row][column + 1];
          result[row][column + 1] = String(calculateNode(rightNode));

          if (row < result.length - 1) {
            const bottomRight = result[row + 1][column + 1];
            result[row + 1][column + 1] = String(calculateNode(bottomRight));
          }

          if (row > 0) {
            const topRight = result[row - 1][column + 1];
            result[row - 1][column + 1] = String(calculateNode(topRight));
          }
        }

        if (column > 0) {
          const leftNode = result[row][column - 1];
          result[row][column - 1] = String(calculateNode(leftNode));

          if (row < result.length - 1) {
            const bottomLeft = result[row + 1][column - 1];
            result[row + 1][column - 1] = String(calculateNode(bottomLeft));
          }

          if (row > 0) {
            const topLeft = result[row - 1][column - 1];
            result[row - 1][column - 1] = String(calculateNode(topLeft));
          }
        }

        if (row > 0) {
          const topNode = result[row - 1][column];
          result[row - 1][column] = String(calculateNode(topNode));
        }

        if (row < result.length - 1) {
          const bottomNode = result[row + 1][column];
          result[row + 1][column] = String(calculateNode(bottomNode));
        }
      }
    }
  }

  return result;
}
