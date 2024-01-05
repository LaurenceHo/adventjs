export function distributeGifts(weights: Array<Array<number | null>>) {
  const distributedWeight = [];

  for (let row = 0; row < weights.length; row++) {
    const line = weights[row];
    const tempWeightLine = [];
    for (let column = 0; column < line.length; column++) {
      let countNode = 0;
      let selfNode = line[column];
      if (selfNode !== null) {
        countNode++;
      } else {
        selfNode = 0;
      }

      let rightNode: number | null = 0;
      let leftNode: number | null = 0;
      let topNode: number | null = 0;
      let bottomNode: number | null = 0;
      if (column < line.length - 1) {
        rightNode = weights[row][column + 1];
        if (rightNode !== null) {
          countNode++;
        } else {
          rightNode = 0;
        }
      }

      if (column > 0) {
        leftNode = weights[row][column - 1];
        if (leftNode !== null) {
          countNode++;
        } else {
          leftNode = 0;
        }
      }

      if (row > 0) {
        topNode = weights[row - 1][column];
        if (topNode !== null) {
          countNode++;
        } else {
          topNode = 0;
        }
      }

      if (row < weights.length - 1) {
        bottomNode = weights[row + 1][column];
        if (bottomNode !== null) {
          countNode++;
        } else {
          bottomNode = 0;
        }
      }

      const average = Math.round((selfNode + topNode + bottomNode + rightNode + leftNode) / countNode);
      tempWeightLine.push(average);
    }
    distributedWeight.push(tempWeightLine);
  }
  return distributedWeight;
}
