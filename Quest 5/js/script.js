" use strict";

let startbtn = document.getElementById("start")[0],
    budgetvalue = document.getElementsByClassName("budget-value")[0],
    daybudgetvalue = document.getElementsByClassName("daybudget-value")[0],
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

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

}
start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
                && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            }
            else {
                console.log("bad");
                i--;
            }
        }
    },
    detectDayBudjet: function () {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("Бюджет на день составляет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Cредний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какая сумма накоплений?"),
                percent = +prompt("Какой процент вклада?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[++i] = opt;
            console.log(appData.optionalExpenses);

        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесёт дополнительный доход? (Перечислить через запятую)", "");
        if (typeof (items) != 'string' || items == "" || typeof (items) == null) {
            console.log("Некорректные данные, введите снова");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?"));
            appData.income.sort();
        }

        appData.income.forEach(function (itemsmass, i) {
            alert("Способы доп. заработка: " + (++i) + " - " + itemsmass);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + appData[key]);
}