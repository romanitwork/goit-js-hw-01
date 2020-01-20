"use strict";

let deliveryPrice;

const countryDelivery = prompt("Куда везти товар?");
const countryDeliveryLow = countryDelivery.toLowerCase();

switch (countryDeliveryLow) {
  case "китай":
    deliveryPrice = 100;
    alert(
      `Доставка в ${countryDelivery} будет стоить ${deliveryPrice} кредитов`
    );
    break;

  case "чили":
    deliveryPrice = 250;
    alert(
      `Доставка в ${countryDelivery} будет стоить ${deliveryPrice} кредитов`
    );
    break;

  case "австралия":
    deliveryPrice = 170;
    alert(
      `Доставка в ${countryDelivery} будет стоить ${deliveryPrice} кредитов`
    );
    break;

  case "индия":
    deliveryPrice = 80;
    alert(
      `Доставка в ${countryDelivery} будет стоить ${deliveryPrice} кредитов`
    );
    break;

  case "ямайка":
    deliveryPrice = 120;
    alert(
      `Доставка в ${countryDelivery} будет стоить ${deliveryPrice} кредитов`
    );
    break;

  default:
    alert(`В вашей стране доставка не доступна`);
}
