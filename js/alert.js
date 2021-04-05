'use strict';

let login = prompt("Введите логин", "");
if (login == 'Админ'){

  let pass = prompt("Введите пароль", "");

  if (pass == 'Я босс') {
    alert("Дратути");
  } else if (pass == '' || pass == null) {
    alert("Отмена");
  } else {
    alert("Неправильно");
  }
} else if (login == '' || login == null) {
  alert("Отмена");
} else {
  alert("Я вас не знаю");
}
