
function mixPassword(password) {
  newPass = password.split("").reverse("").join("");
  return newPass;
}
mixPassword("polina2024");
console.log(`Зашифрованый пароль: ${newPass}`);

function checkPassword(passNew, another) {
  const checkPass = mixPassword(another);
  if (checkPass === passNew) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}
checkPassword("4202anilop", "polina2024");