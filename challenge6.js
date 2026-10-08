'use strict';

let scoreDauphins1Data1 = 44;
let scoreDauphins2Data1 = 23;
let scoreDauphins3Data1 = 71;

let scoreKoalas1Data1 = 65;
let scoreKoalas2Data1 = 54;
let scoreKoalas3Data1 = 49;

let scoreDauphins1Data2 = 85;
let scoreDauphins2Data2 = 54;
let scoreDauphins3Data2 = 41;

let scoreKoalas1Data2 = 23;
let scoreKoalas2Data2 = 34;
let scoreKoalas3Data2 = 27;

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

let scoreDauphins1 = calcAverage(scoreDauphins1Data1, scoreDauphins2Data1, scoreDauphins3Data1);
let scoreDauphins2 = calcAverage(scoreDauphins1Data2, scoreDauphins2Data2, scoreDauphins3Data2);
let scoreKoalas1 = calcAverage(scoreKoalas1Data1, scoreKoalas2Data1, scoreKoalas3Data1);
let scoreKoalas2 = calcAverage(scoreKoalas1Data2, scoreKoalas2Data2, scoreKoalas3Data2);

function checkWinner(average1, average2) {
    if (average1 >= average2 * 2) {
        console.log(`L'équipe Dauphin gagne (${average1} vs ${average2})`)
    } else if (average2 >= average1 * 2) {
        console.log(`L'équipe Koala gagne (${average2} vs ${average1})`)
    }
}
checkWinner(scoreDauphins1, scoreKoalas1);
checkWinner(scoreDauphins2, scoreKoalas2 );