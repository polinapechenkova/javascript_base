const card = "4561-2612-1234-5464";

function algorithmLuna(card) {
  card = card.replaceAll("-", "").replaceAll(" ", "");

  if (isNaN(card)) {
    return false;
  }

  if (card.length < 16 || card.length > 16) {
    return false;
  }

  let num = card.split("").map(Number);

  for (let i = num.length - 2; i >= 0; i -= 2) {
    num[i] *= 2;

    if (num[i] > 9) {
      num[i] -= 9;
    }
  }

  let sum = num.reduce(function (a, b) {
    return a + b;
  });

  return sum % 10 === 0;
}

console.log(`Проверка пройдена: ${algorithmLuna(card)}.`);
