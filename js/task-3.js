"use strict";

const password = prompt("Пожалуйста, введите пароль:");
const ADMIN_PASSWORD = "jqueryismyjam";

if (password === null) {
  alert("Отменено пользователем!");
} else {
  if (password === ADMIN_PASSWORD) {
    alert("Добро пожаловать!");
  } else {
    alert("Доступ запрещен, неверный пароль!");
  }
}
