const randomNumber = () => {
  const max32BitInt = Math.pow(2, 31) - 1; // Maximum value for a 32-bit signed integer
  let number = '';
  for (let i = 0; i < 9; i++) { // Reduced to 9 digits to fit within range
    number += Math.floor(Math.random() * 10);
  }

  return parseInt(number) % max32BitInt; // Modulo to ensure the number fits within the 32-bit range
};


export { randomNumber };
