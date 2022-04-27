import {
  addZeroToNumber,
  calculateDifferenceInSeconds,
  flipCard,
  getCurrentNumber
} from "./utils/index.js";

const cards = document.querySelectorAll(".card");

const initialTimer = new Date();
initialTimer.setHours(initialTimer.getHours() + 24);

let lastDifference = calculateDifferenceInSeconds(initialTimer);

const interval = setInterval(() => {
  const differenceInSeconds = calculateDifferenceInSeconds(initialTimer);

  if (differenceInSeconds < 0) {
    return clearInterval(interval);
  }

  if (lastDifference !== differenceInSeconds) {
    lastDifference = differenceInSeconds;

    const hours = Math.floor((differenceInSeconds / (60 * 60)) % 24);
    const minutes = Math.floor((differenceInSeconds / 60) % 60);
    const seconds = Math.floor(differenceInSeconds % 60);

    const timeArr = `${addZeroToNumber(hours)}${addZeroToNumber(
      minutes
    )}${addZeroToNumber(seconds)}`.split("");

    cards.forEach((card, i) => {
      const nextNumber = timeArr[i];
      const currentNumber = getCurrentNumber(card);

      if (nextNumber != currentNumber) {
        flipCard(card, nextNumber);
      }
    });
  }
}, 200);
