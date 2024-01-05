export function maxDistance(movements: string) {
  const movementArray = movements.split('');
  let moveRight = 0;
  let moveLeft = 0;
  let move = 0;

  movementArray.forEach((m) => {
    if (m === '>') {
      moveRight++;
    } else if (m === '<') {
      moveLeft++;
    } else if (m === '*') {
      move++;
    }
  });

  let distance = moveRight - moveLeft;
  if (distance >= 0) {
    distance = distance + move;
  } else {
    distance = Math.abs(distance - move);
  }

  return distance;
}
