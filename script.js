let qtdeVitorias = Math.floor(Math.random()*150);
let qtdeDerrotas = Math.floor(Math.random()*50);

function calcularSaldoVitoria (vitorias, derrotas)
{
    let saldoVitoria = vitorias - derrotas;

    return saldoVitoria;
}

function rankear (saldo)
{
    let categoria = "";
    if(saldo < 10){
        categoria = "Ferro";
    } else if(saldo <=20) {
        categoria = "Bronze";
    } else if(saldo <=50) {
        categoria = "Prata";
    } else if(saldo <=80) {
        categoria = "Ouro";
    } else if(saldo <=90) {
        categoria = "Diamante";
    } else if(saldo <=100) {
        categoria = "Lendário";
    } else {
        categoria = "Imortal";
    }
    return categoria;
}

saldoVitoria = calcularSaldoVitoria(qtdeVitorias,qtdeDerrotas);

console.log("O Herói tem de saldo de Rankeadas de " + saldoVitoria + " está no nível de " + rankear(saldoVitoria));