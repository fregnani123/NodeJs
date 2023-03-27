
const calcMult = require('./calcTest');
const calcSoma = require('./scriptCalc');

let joinCalc = {...calcSoma,...calcMult};

console.log(joinCalc.mult(5,5))








// let args = process.argv.slice(2)
// let matematica = require('funcoes-matematicas');


// let a = Number(args[0]);
// let b = Number(args[1]);


// console.log(matematica.calcularMultiplicacao(a,b)/10)
