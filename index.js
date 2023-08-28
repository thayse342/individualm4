var prompt = require('prompt-sync')();

const propriedade = [];

do {
  var option = (prompt('Qual propriedade css você quer? ')).toUpperCase();
  if (option != "SAIR") {
    propriedade.push(option);
  }
} while (option !="SAIR");

const propriedadeOrdenda = propriedade.sort();

console.log(propriedadeOrdenda);