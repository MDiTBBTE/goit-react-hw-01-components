function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomColor = () => {
  let r = getRandomInt(0, 255);
  let g = getRandomInt(0, 255);
  let b = getRandomInt(0, 255);

  return `rgb(${r},${g},${b})`;
};
