'use strict';

let val1 = 125;
let val2 = 555;
let val3 = 44;

const tip15 = (15 / 100);
const tip20 = (20 / 100);

function calcTip(val, tip) {
    return val * tip;
};
console.log(calcTip(100, tip15));

const bills = [val1, val2, val3];
console.log(bills);

const tips = [calcTip(val1,tip15), calcTip(val2, tip20), calcTip(val3, tip20)];
console.log(tips);

const totals = [val1 + calcTip(val1, tip15), val2 + calcTip(val2, tip20),val3 + calcTip(val3, tip20)];
console.log(totals);