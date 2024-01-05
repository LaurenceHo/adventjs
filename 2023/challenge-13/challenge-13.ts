export function calculateTime(deliveries: string[]) {
  const totalDuration = deliveries.reduce((acc, duration) => {
    const [hours, minutes, seconds] = duration.split(':').map(Number);
    acc += hours * 3600 + minutes * 60 + seconds;
    return acc;
  }, 0);

  const remainingTime = 7 * 3600 - totalDuration;

  const sign = remainingTime > 0 ? '-' : '';
  const absRemainingTime = Math.abs(remainingTime);

  const hours = Math.floor(absRemainingTime / 3600);
  const minutes = Math.floor((absRemainingTime % 3600) / 60);
  const seconds = absRemainingTime % 60;

  return `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`;
}
