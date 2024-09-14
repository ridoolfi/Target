//Fibonacci
const readline = require('node:readline');
const fibonacci = require("./fibonacci");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira o número que você deseja verificar na sequência Fibonacci: ", number => {
  rl.question("Informe quantos números da sequência você deseja que seja verificado: ", async range =>{

    console.log(await fibonacci(Number(number), Number(range)));
    return
  })
  return
});




