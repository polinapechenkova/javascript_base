const arr = [1, 40, -5, 10, 0];

function arraySort(arr) {
  const arrLeng = arr.length;
  for (let i = 0; i < arrLeng; i++) {
    for (let j = 0; j < arrLeng; j++) {
      if (arr[j] > arr[j + 1]) {
        const save = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = save;
      }
    }
  }
  return arr;
}

console.log(arraySort(arr));
