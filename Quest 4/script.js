" use strict";

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