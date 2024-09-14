function media(fatMes){
    let total_mensal = 0;
    let total_dias = 0;

    for(let i = 0; i < fatMes.length; i++){
    total_mensal += fatMes[i].faturamento;
    if(fatMes[i].faturamento > 0){
        total_dias += 1;
    };
    }
    
    return total_mensal / total_dias
}

module.exports = media;