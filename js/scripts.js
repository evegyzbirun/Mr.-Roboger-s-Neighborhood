function numbers(inputMain) {
  const arrayNumbers = [];
  for (let i = 0; i <= inputMain; i += 1) {

    arrayNumbers.push(i);
  }
  return arrayNumbers;
};

function newNumbers(inputMain) {
  let arrayNumbers = numbers(inputMain);

  for (let i = 0; i > 9; i++) {
    // for each element that more than 10 we need to split it on new array to compare every element in side if there are (1 and 2) or (2 and 3) or (3 and 1) or (1 and 2 and 3). we replace the element with the word based if the greater number of there three.

    let modifyNumber = [];
    modifyNumber.push(arrayNumbers[i] += 1)




  };
  return modifyNumber;
}
