const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const firstSlide = document.querySelector(".card.slide-1");

const CARD_SIZE = 64;

arrowRight.addEventListener("click", () => {
  let marginLeftNow = firstSlide.style.marginLeft
    ? Number.parseInt(firstSlide.style.marginLeft)
    : 0;
  console.log(marginLeftNow);
  marginLeftNow = marginLeftNow === -CARD_SIZE * 3 ? CARD_SIZE : marginLeftNow;
  firstSlide.style.marginLeft = marginLeftNow - CARD_SIZE + "rem";
});

arrowLeft.addEventListener("click", () => {
  let marginLeftNow = firstSlide.style.marginLeft
    ? Number.parseInt(firstSlide.style.marginLeft)
    : 0;
  console.log(marginLeftNow);
  marginLeftNow = marginLeftNow === 0 ? -CARD_SIZE * 4 : marginLeftNow;
  firstSlide.style.marginLeft = marginLeftNow + CARD_SIZE + "rem";
});
