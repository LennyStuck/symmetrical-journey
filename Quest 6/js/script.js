" use strict";

let startBtn = document.getElementById("start"),
    budjetvalue = document.getElementsByClassName("budjet-value")[0],
    daybudjettvalue = document.getElementsByClassName("daybudjet-value")[0],
    levelvalue = document.getElementsByClassName("level-value")[0],
    expensesvalue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesvalue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomevalue = document.getElementsByClassName("income-value")[0],
    monthsavingsvalue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsvalue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");


let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?");
    }
    appData.budjet = money;
    appData.timeData = time;
    budjetvalue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
            && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesvalue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesvalue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {

    if (appData.budjet != undefined) {
        appData.moneyPerDay = ((appData.budjet - +expensesvalue.textContent) / 30).toFixed();
        daybudjettvalue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelvalue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelvalue.textContent = "Cредний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelvalue.textContent = "Высокий уровень достатка";
        } else {
            levelvalue.textContent = "Ошибка";
        }
    } else {
        daybudjettvalue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    if (isNaN(items) || items != '') {
        appData.income = items.split(", ");
        incomevalue.textContent = appData.income;
    }
});

checkSavings.addEventListener('input', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsvalue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsvalue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsvalue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsvalue.textContent = appData.yearIncome.toFixed(1);
    }
});

const appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};