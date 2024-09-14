function faturamento(fatMes, media){
    let menor = fatMes[0].faturamento;
    let maior = fatMes[0].faturamento;
    let totMaiorMedia = 0;

    for(let i = 0; i < fatMes.length; i++){
        if(fatMes[i].faturamento < menor && fatMes[i].faturamento > 0){
            menor = fatMes[i].faturamento;
        }
        if(fatMes[i].faturamento > maior){
            maior = fatMes[i].faturamento;
        }
        if(fatMes[i].faturamento > media) totMaiorMedia += 1;
    }

    return {
        mediaMensal: media,
        maiorFaturamento: maior,
        menorFaturamento: menor,
        diasMaiorQueMedia: totMaiorMedia
        
    }
};

module.exports = faturamento;