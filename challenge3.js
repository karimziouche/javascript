'use strict';

let weightBernardData1 = 78;
let heightBernardData1 = 1.69;
let weightMarcelData1 = 92;
let heightMarcelData1 = 1.95;

let weightBernardData2 = 95;
let heightBernardData2 = 1.88;
let weightMarcelData2 = 85;
let heightMarcelData2 = 1.76;

let bernardAge = 35;
let marcelAge = 34;

let imcBernardData1 = weightBernardData1 / (heightBernardData1 * heightBernardData1);
let imcMarcelData1 = weightMarcelData1 / (heightMarcelData1 * heightMarcelData1);

let imcBernardData2 = weightBernardData2 / (heightBernardData2 * heightBernardData2);
let imcMarcelData2 = weightMarcelData2 / (heightMarcelData2 * heightMarcelData2);

let bernardHigherIMC = imcBernardData1 > imcMarcelData1;

if (bernardHigherIMC) {
    console.log("Bernard a un IMC plus élevé que Marcel");
} else {
    console.log("Marcel a un IMC plus élevé");
}

console.log(`Bernard a un IMC ${Math.round(imcBernardData1)} plus élevé que Marcel ${Math.round(imcMarcelData1)}`);

if (imcBernardData1 < 22) {
    console.log("Bernard: insuffisance pondérale");
} 
if (imcMarcelData1 >= 21 && imcMarcelData1 < 26) {
    console.log("Marcel: surpoids");
}