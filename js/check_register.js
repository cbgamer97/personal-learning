function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    const changeDue = cash - price;
    let totalCID = 0;
    for (let i = 0; i < cid.length; i++) {
        totalCID += cid[i][1];
    }
    totalCID = parseFloat(totalCID.toFixed(2));

    if (totalCID < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCID === changeDue) {
        return { status: "CLOSED", change: cid };
    } else {
        const changeArray = [];
        let remainingChange = changeDue;

        for (let i = currencyUnits.length - 1; i >= 0; i--) {
            const currencyName = currencyUnits[i][0];
            const currencyValue = currencyUnits[i][1];
            const availableCurrency = cid[i][1];
            const maxCurrencyToUse = Math.floor(availableCurrency / currencyValue) * currencyValue;

            if (remainingChange >= currencyValue && maxCurrencyToUse > 0) {
                const usedCurrency = Math.min(remainingChange, maxCurrencyToUse);
                remainingChange -= usedCurrency;
                cid[i][1] -= usedCurrency;
                changeArray.push([currencyName, usedCurrency]);
            }
        }
        console.log(changeArray)

        if (remainingChange > 0) {
            console.log(remainingChange)
            return {
                status: "INSUFFICIENT_FUNDS", change: [] };
        }
        console.log(changeArray)
        return { status: "OPEN", change: changeArray };
    }
}


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);