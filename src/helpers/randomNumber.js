const randomNumber = () => {
  let number = '';
  for (let i = 0; i < 10; i++) {
    number += Math.floor(Math.random() * 10);
  }

  return parseInt(number);
};

export { randomNumber };
