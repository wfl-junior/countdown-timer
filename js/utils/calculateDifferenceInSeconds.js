export function calculateDifferenceInSeconds(initialTimer) {
  const now = new Date();
  return Math.ceil((+initialTimer - +now) / 1000);
}
