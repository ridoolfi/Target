async function getPercentual(array){
    let percentual = new Array
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i].faturamento;
    };
    
    for(let i = 0; i < array.length; i++){
        let estadoPercentual = ((array[i].faturamento * 100) / total).toFixed(2)
        percentual.push({estado: array[i].estado, faturamento: array[i].faturamento ,percentual: estadoPercentual + "%"});
    };
    return {
        faturamentoTotal: total,
        percentual: percentual
    };
};


module.exports = getPercentual;