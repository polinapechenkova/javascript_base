

function convertCalculate(sum, changeCurrency, getCurrency) {
  switch (getCurrency) {
    case "eur":
      return sum / 102;
    case "usd":
      return sum / 92;
    case "gbp":
      return sum / 81;
    default:
      return "null";
  }
}
console.log("Сумма после конвертации составит:" + convertCalculate(70000, "rub", "usd"));


