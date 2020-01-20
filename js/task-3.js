'use strict';

const password = prompt('Пожалуйста, введите пароль:');
const ADMIN_PASSWORD = 'jqueryismyjam';

if (password === null){console.log('Отменено пользователем!')}
else{
if (password === ADMIN_PASSWORD){console.log('Добро пожаловать!')}
else{
    console.log('Доступ запрещен, неверный пароль!')}
} 

