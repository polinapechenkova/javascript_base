"use strict";

let numOne;
let numTwo;

function numAdd() {
  numOne = document.querySelector(".number__first").value;
  numTwo = document.querySelector(".number__second").value;
  if (isNaN(numOne) || isNaN(numTwo)) {
    document.querySelector(".result__number").innerText =
      "Необходимо ввести числа";
  } else {
    document.querySelector(".result__number").innerText =
      Number(numOne) + Number(numTwo);
  }
}

function numSubtract() {
  numOne = document.querySelector(".number__first").value;
  numTwo = document.querySelector(".number__second").value;
  if (isNaN(numOne) || isNaN(numTwo)) {
    document.querySelector(".result__number").innerText =
      "Необходимо ввести числа";
  } else {
    document.querySelector(".result__number").innerText =
      Number(numOne) - Number(numTwo);
  }
}

function numDivision() {
  numOne = document.querySelector(".number__first").value;
  numTwo = document.querySelector(".number__second").value;
  if (isNaN(numOne) || isNaN(numTwo)) {
    document.querySelector(".result__number").innerText =
      "Необходимо ввести числа";
  } else {
    document.querySelector(".result__number").innerText =
      Number(numOne) / Number(numTwo);
  }
}

function numMultiply() {
  numOne = document.querySelector(".number__first").value;
  numTwo = document.querySelector(".number__second").value;
  if (isNaN(numOne) || isNaN(numTwo)) {
    document.querySelector(".result__number").innerText =
      "Необходимо ввести числа";
  } else {
    document.querySelector(".result__number").innerText =
      Number(numOne) * Number(numTwo);
  }
}

function numClear() {
  document.querySelector(".number__first").value = "";
  document.querySelector(".number__second").value = "";
  document.querySelector(".result__number").innerText = "";
}
