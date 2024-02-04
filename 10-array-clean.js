const operations = [1, -2, 3, -4, 5];
let resultArray = [];

function arrayFilter(arrayOfOperation, fn) {
  for (const element of arrayOfOperation) {
    if (fn(element)) {
      resultArray.push(element);
    }
  }
  return resultArray;
}

const deleteFunction = (element) => element > 0;

console.log((resultArray = arrayFilter(operations, deleteFunction)));
