const data = [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`];

function filterDates(arr) {
  let resultArray = [];

  arr.forEach((el) => {
    let date = new Date(el);

    if (!isNaN(date)) {
      el = el.replaceAll("/", "-");
      resultArray.push(el);
    }
  });

  return resultArray;
}

let arr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

console.log(filterDates(arr));
