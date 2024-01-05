

function convertCalculate(sum, changeCurrency, getCurrency) {
  switch (getCurrency) {
    case "eur":
      const convertToEUR = sum / 102;
      return `Сумма после конвертации составит: ${convertToEUR} ${getCurrency}.`;
    case "usd":
      const convertToUSD = sum / 92;
      return `Сумма после конвертации составит: ${convertToUSD} ${getCurrency}`;
    case "gbp":
      const convertToGBP = sum / 81;
      return `Сумма после конвертации составит: ${convertToGBP} ${getCurrency}`;
    default:
      return "null";
  }
}
console.log(convertCalculate(70000, "rub", "usd"));