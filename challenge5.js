'use strict';

let invoice1 = 275;
let tip1Invoice15 = (invoice1 * 15 / 100);
let tip1Invoice20 = (invoice1 * 20 / 100);

let invoice2 = 40;
let tip2Invoice15 = (invoice2 * 15 / 100);
let tip2invoice20 = (invoice2 * 20 / 100);

let invoice3 = 430;
let tip3Invoice15 = (invoice3 * 15 / 100);
let tip3Invoice20 = (invoice3 * 20 / 100);

const tip1 = (invoice1 >= 50 && invoice1 <= 300)
        ? tip1Invoice15
        : tip1Invoice20;

const tip2 = (invoice2 >= 50 && invoice2 <= 300)
        ? tip2Invoice15
        :tip2invoice20; 

const tip3 = (invoice3 >= 50 && invoice3 <= 300)
        ? tip3Invoice15
        : tip3Invoice20;

console.log(`La note était de ${invoice1}, le pourboire de ${tip1} et la valeur totale était de ${invoice1 + tip1}`);

console.log(`La note était de ${invoice2}, le pourboire de ${tip2} et la valeur totale était de ${invoice2 + tip2}`);

console.log(`La note était de ${invoice3}, le pourboire de ${tip3} et la valeur totale était de ${invoice3 + tip3}`);
