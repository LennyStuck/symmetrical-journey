"use strict";
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    b1 = prompt("Во сколько обойдется?"),
    a2 = prompt("Введите обязательную статью расходов в этом месяце"),
    b2 = prompt("Во сколько обойдется?");

appData.expenses[a1] = b1;
appData.expenses[a2] = b2;

alert (appData.budjet / 30);