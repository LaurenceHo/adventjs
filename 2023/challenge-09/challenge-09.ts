export function adjustLights(lights: string[]) {
  const cloneLights = [...lights];
  const reverseLights = [...cloneLights].reverse();
  const redLight = '🔴';
  const greenLight = '🟢';
  let count = 0;
  for (let i = 0; i < cloneLights.length; i++) {
    if (cloneLights[i] === cloneLights[i + 1]) {
      cloneLights[i + 1] = cloneLights[i] === redLight ? greenLight : redLight;
      count++;
    }
  }

  let countReverse = 0;
  for (let i = 0; i < reverseLights.length; i++) {
    if (reverseLights[i] === reverseLights[i + 1]) {
      reverseLights[i + 1] = reverseLights[i] === redLight ? greenLight : redLight;
      countReverse++;
    }
  }
  return count > countReverse ? countReverse : count;
}
