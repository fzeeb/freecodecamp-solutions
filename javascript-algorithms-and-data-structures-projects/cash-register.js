const bills = [
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
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let cashInDrawer = 0;
  let result = { status: "", change: [] };

  for (let j = cid.length - 1; j >= 0; j--) {
    const bill = cid[j][0];
    let value = 0;
    let amount = cid[j][1];
    let billVal = 0;

    for (let k = 0; k < bills.length; k++) {
      if (bills[k][0] == bill) {
        value = bills[k][1];
        break;
      }
    }

    while (change >= value && amount > 0) {
      billVal += value;
      change -= value;
      amount -= value;
      change = change.toFixed(2);
    }

    if (billVal != 0) {
      result.change.push([bill, billVal]);
    }
  }

  cashInDrawer = 0;
  for (let m = 0; m < result.change.length; m++) {
    cashInDrawer += cid[m][1];
  }
  cashInDrawer = cashInDrawer.toFixed(2);

  if (cash - price == cashInDrawer) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }

  if (change > cashInDrawer) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }

  console.log(cashInDrawer);
  result.status = "OPEN";
  return result;
}
