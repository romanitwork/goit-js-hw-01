"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const buy = prompt("Сколько дроидов вы хотите купить:");
let totalPrice = buy * pricePerDroid;

if (buy === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice <= credits) {
  console.log(
    `Вы купили ${buy} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
} else if (!Number(buy)) {
  console.log("Ты тупой? ТЫ ТУПОЙ? Цифру вводи!");
} else {
  console.log("Недостаточно средств на счету!");
}
