export function travelDistance(map: string) {
  const isNumber = (value: string) => {
    const digitRegex = /^\d$/;
    return digitRegex.test(value);
  };

  const childrenLocation = [];
  let row = 0;
  let column = 0;
  for (let i = 0; i < map.length; i++) {
    const road = map[i];
    const testIsNumber = isNumber(road);
    if (road === '\n' || i === map.length - 1) {
      if (i === map.length - 1) {
        if (testIsNumber || road === 'S') {
          childrenLocation.push([road, [row, column]]);
        }
      }
      row++;
      column = 0;
    } else {
      if (testIsNumber || road === 'S') {
        childrenLocation.push([road, [row, column]]);
      }
      column++;
    }
  }
  const sortedLocation = childrenLocation.sort();
  sortedLocation.unshift(sortedLocation[sortedLocation.length - 1]);
  sortedLocation.pop();
  let distance = 0;
  for (let i = 0; i < sortedLocation.length - 1; i++) {
    const currentLocation = sortedLocation[i][1];
    const nextLocation = sortedLocation[i + 1][1];
    const calculate2Location =
      Math.abs((nextLocation[0] as number) - (currentLocation[0] as number)) +
      Math.abs((nextLocation[1] as number) - (currentLocation[1] as number));
    distance = distance + calculate2Location;
  }

  return distance;
}
