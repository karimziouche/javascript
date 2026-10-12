'use.stict';

const bernardDonnées1 = {
    name1: "Benard",
    weight1: 78,
    size1: 1.69,
    calcBMI: function() {
        this.bmi = this.weight1 / (this.size1 * this.size1)
        return this.bmi;
    }
};
console.log(bernardDonnées1.calcBMI());

const marcelDonnées1 = {
    name1: "Marcel",
    weight1: 92,
    size1: 1.95,
    calcBMI: function() {
        this.bmi = this.weight1 / (this.size1 * this.size1)
        return this.bmi;
    }
};
console.log(marcelDonnées1.calcBMI());

const bernardDonnées2 = {
    name2: "Bernard",
    weight2: 95,
    size2: 1.88,
    calcBMI: function() {
        this.bmi = this.weight2 / (this.size2 * this.size2)
        return this.bmi;
    }
};
console.log(bernardDonnées2.calcBMI());

const marcelDonnées2 = {
    name2: "Marcel",
    weight2: 85,
    size2: 1.76,
    calcBMI: function() {
        this.bmi = this.weight2 / (this.size2 * this.size2)
        return this.bmi;
    }
};
console.log(marcelDonnées2.calcBMI());

if (bernardDonnées1.calcBMI() > marcelDonnées1.calcBMI()) {
    console.log(`L'IMC de Bernard (${bernardDonnées1.calcBMI()}) est plus élevé que celui de Marcel (${marcelDonnées1.calcBMI()})`);
}

if (bernardDonnées2.calcBMI() > marcelDonnées2.calcBMI()) {
    console.log(`L'IMC de Bernard (${bernardDonnées2.calcBMI()}) est plus élevé que celui de Marcel (${marcelDonnées2.calcBMI()})`);
}