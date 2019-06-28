'use strict'

let money, time;

function start () {
    money = +prompt('Your mounth budjet '),
    time =  prompt("Please input data");
    while(isNaN(money) || money == '' || money == null) {
        money=+('Your mounth budjet ');
    }
}

start();

let appData = {
    budjet : money,
    expenses : {},
    optionalExpenese : {},
    income : [],
    timeData : time,
    saving : true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Plese input item of expenditure'),
            b = +prompt('Please input the amount spent on ' + a );
        if ( typeof(a) == 'string' && (typeof(a)) != null && (typeof(b))!= null && a!='' && b!=0 && a.length <50 ){
            console.log('done')
            appData.expenses [a] = b;
    
        } else {
                i--;
                alert('you stupid faggot? input correct data again');
        }
        
    }
}
 chooseExpenses();


appData.moneyPerDay = Math.round(appData.budjet / 30);
console.log('Budjet for each day = ' + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
    console.log('Budjet like homeless')
}

function checkSavings(){
    if(appData.saving== true){
        let save = +prompt (" How much saving?"),
        percent = +prompt ("Years percent?");
    
    appData.monthIncome = save/12/100*percent;
    alert('Mounth income at saving = ' + Math.round(appData.monthIncome));
    }
}

checkSavings();
