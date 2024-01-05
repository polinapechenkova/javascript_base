

function mixPassword(password) {
  newPass = password.split("").reverse("").join("");
  return newPass;
}
mixPassword("polina2024");
console.log(`Зашифрованый пароль: ${newPass}`);

function checkPassword(passNew, another) {
  const checkPass = mixPassword(another);
  switch (true) {
    case checkPass === passNew:
      return console.log("true");
    default:
      return console.log("false");
  }
}
checkPassword("4202anilop", "polina2024");