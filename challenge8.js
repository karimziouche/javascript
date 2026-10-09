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

let newVal1 = 22;
let newVal2 = 295;
let newVal3 = 176;
let newVal4 = 440;
let newVal5 = 37;
let newVal6 = 105;
let newVal7 = 10;
let newVal8 = 1100;
let newVal9 = 86;
let newVal10 = 52;

const notes = [newVal1, 
               newVal2,
               newVal3,
               newVal4,
               newVal5,
               newVal6,
               newVal7,
               newVal8,
               newVal9,
               newVal10];
console.log(notes);

const tips = [];
for(let i = 0; i < notes.length; i++) {
    if (notes[i] >= 50 && notes[i] <= 300) {
        tips.push(notes[i] * tip15);
    } else {
        tips.push(notes[i] * tip20);
    }
};
console.log(tips);

const totals = [];
for(let i = 0; i < notes.length; i++) {
    totals.push(notes[i] + tips[i])
};
console.log(totals);

function calcAverage(totals) {
    let somme = 0;
    for(let i = 0; i < notes.length; i++) {
        somme = somme + totals[i];
    }
    return somme / totals.length;
}
console.log(calcAverage(totals));