let resultadoMes = require('./resultadoMes.json'); // JSON
let faturamento = require('./faturamento.js')
let media = require("./media.js")
let media_mensal = media(resultadoMes.faturamento_diario);

console.log(faturamento(resultadoMes.faturamento_diario, media_mensal));



