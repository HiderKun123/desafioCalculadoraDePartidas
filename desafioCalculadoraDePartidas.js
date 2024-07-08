const jogador = "Michel";
let vitoriasJogador = 100;
let derrotasJogador = 13;

function calculadora(vitoriasJogador, derrotasJogador) {
    let trofeus = vitoriasJogador - derrotasJogador;
    return trofeus;
}

const saldoTrofeus = calculadora(vitoriasJogador, derrotasJogador);

function nivelJogador(vitoriasJogador) {
    if (vitoriasJogador < 10) {
        return "Ferro";
    } else if (vitoriasJogador >= 11 && vitoriasJogador <= 20) {
        return "Bronze";
    } else if (vitoriasJogador >= 21 && vitoriasJogador <= 50) {
        return "Prata";
    } else if (vitoriasJogador >= 51 && vitoriasJogador <= 80) {
        return "Ouro";
    } else if (vitoriasJogador >= 81 && vitoriasJogador <= 90) {
        return "Diamante";
    } else {
        return "Lendário"; // Qualquer valor maior que 100
    }
}

console.log("O Herói tem o saldo de " + saldoTrofeus + " Vitórias. Está no nível de " + 
    nivelJogador(vitoriasJogador));