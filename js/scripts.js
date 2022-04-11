function numbers(inputMain) {
  const arrayNumbers = [];
  for (let i = 0; i <= inputMain; i += 1) {




    arrayNumbers.push(i.toString());
  }
  let fixedArrayNumbers = [];
  arrayNumbers.forEach(function (x) {
    if (x.includes("3")) {
      fixedArrayNumbers.push('"Won\'t you be my neighbor?"');
    } else if (x.includes("2")) {
      fixedArrayNumbers.push('"Boop!"');
    } else if (x.includes("1")) {
      fixedArrayNumbers.push('"Beep!"');
    } else if (x.includes("0")) {
      fixedArrayNumbers.push('"0"');
    } else {
      fixedArrayNumbers.push(x);
    }
  });
  return fixedArrayNumbers;
};

$(document).ready(function () {
  $("form#wordReplace").submit(function (event) {
    event.preventDefault();
    if ($("#inputNumber").val() == "") {
      alert("Need number!!!")
    } else {

    }
    const inputMain = $("#inputNumber").val();
    const fixedArrayNumbers = numbers(inputMain);
    const finalArray = fixedArrayNumbers.join(", ");
    $("#arrayOutput").html(finalArray);

  });
});



