'use strict';

let scoreDauphins1Data1 = 96;
let scoreDauphins2Data1 = 108;
let scoreDauphins3Data1 = 89;

let scoreKoalas1Data1 = 88;
let scoreKoalas2Data1 = 91;
let scoreKoalas3Data1 = 110;

let scoreDauphins1Data2 = 97;
let scoreDauphins2Data2 = 112;
let scoreDauphins3Data2 = 101;

let scoreKoalas1Data2 = 109;
let scoreKoalas2Data2 = 95;
let scoreKoalas3Data2 = 123;

let scoreDauphins1Data3 = 97;
let scoreDauphins2Data3 = 112;
let scoreDauphins3Data3 = 101;

let scoreKoalas1Data3 = 109;
let scoreKoalas2Data3 = 95;
let scoreKoalas3Data3 = 106;

let moyenneDauphinsData1 = (scoreDauphins1Data1 + scoreDauphins2Data1 + scoreDauphins3Data1) / 3;
let moyenneKoalasData1 = (scoreKoalas1Data1 + scoreKoalas2Data1 + scoreKoalas3Data1) / 3;

let moyenneDauphinsData2 = (scoreDauphins1Data2 + scoreDauphins2Data2 + scoreDauphins3Data2) / 3;
let moyenneKoalasData2 = (scoreKoalas1Data2 + scoreKoalas2Data2 + scoreKoalas3Data2) / 3;

let moyenneDauphinsData3 = (scoreDauphins1Data3 + scoreDauphins2Data3 + scoreDauphins3Data3) / 3;
let moyenneKoalasData3 = (scoreKoalas1Data3 + scoreKoalas2Data3 + scoreKoalas3Data3) / 3;

if ((moyenneDauphinsData1 < moyenneKoalasData1) && (moyenneKoalasData1 > 100)) {
    console.log("Koalas à gagné");
    } else if ((moyenneDauphinsData1 > moyenneKoalasData1) && (moyenneDauphinsData1 > 100)) {
    console.log("Dauphins à gagné");
    } else {
    console.log("une équipe ne peut gagner seulement si son score est supérieur à 100. Sinon, il n’y a pas de gagnant.");
}

if ((moyenneDauphinsData2 < moyenneKoalasData2) && (moyenneKoalasData2 > 100)) {
    console.log("Koalas à gagné");
    } else if ((moyenneDauphinsData2 > moyenneKoalasData2) && (moyenneDauphinsData2 > 100)) {
    console.log("Dauphins à gagné");
    } else {
    console.log("une équipe ne peut gagner seulement si son score est supérieur à 100. Sinon, il n’y a pas de gagnant.");
}

if ((moyenneDauphinsData3 < moyenneKoalasData3) && (moyenneKoalasData3 > 100)) {
    console.log("Koalas à gagné");
    } else if ((moyenneDauphinsData3 > moyenneKoalasData3) && (moyenneDauphinsData3 > 100)) {
        console.log("Dauphins à gagné");
    } else {
        console.log("une équipe ne peut gagner seulement si son score est supérieur à 100. Sinon, il n’y a pas de gagnant.");
}