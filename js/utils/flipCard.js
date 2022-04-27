import { getCurrentNumber } from "./getCurrentNumber.js";

export function flipCard(card, nextNumber) {
  const top = card.querySelector(".top");
  const bottom = card.querySelector(".bottom");

  const currentNumber = getCurrentNumber(card);

  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  topFlip.textContent = currentNumber;

  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  bottomFlip.textContent = nextNumber;

  topFlip.addEventListener("animationstart", () => {
    top.textContent = nextNumber;
  });

  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", () => {
    bottom.textContent = nextNumber;
    bottomFlip.remove();
  });

  card.append(topFlip, bottomFlip);
}
