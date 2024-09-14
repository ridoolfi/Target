const getPercentual = require("./getPercent");



let faturamento = [
    {estado: "SP", faturamento: 67836.43},
    {estado: "RJ", faturamento: 36678.66},
    {estado: "MG", faturamento: 29229.88 },
    {estado: "ES", faturamento: 27165.48},
    {estado: "OUTROS", faturamento: 19849.53 }];
;

async function main(){
    let fpercentual = await getPercentual(faturamento);
    console.log(fpercentual)
}



main();