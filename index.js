import readline from "readline-sync";

const propriedade = [];

function propriedadeCss() {

  let entradaDados = (readline.question('Insira uma propriedade CSS ou  digite sair: ')).toUpperCase();
  if (entradaDados != "SAIR") {
    propriedade.push(entradaDados);
    propriedadeCss();
  }else{
    let propriedadeOrdenada = propriedade.sort();
    propriedadeOrdenada.forEach((e)=>{
      console.log(e);
    });
  }
}
propriedadeCss();


