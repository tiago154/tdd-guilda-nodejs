/*
Pedra-papel-tesoura-lagarto-Spock

As regras de Pedra-papel-tesoura-lagarto-Spock são:

Tesoura corta papel
Papel cobre pedra
Pedra esmaga lagarto
Lagarto envenena Spock
Spock esmaga (ou derrete) tesourarock-paper-scissors-lizard-spock
Tesoura decapita lagarto
Lagarto come papel
Papel refuta Spock
Spock vaporiza pedra
Pedra quebra tesoura
*/
const { movimentos, respostas, validacoes } = require('./regras');

const regrasJoKenPo = (validacoes, movimentos, respostas) => (primeiroJogador, segundoJogador) => {
    if (!primeiroJogador || !segundoJogador) return respostas.erro;

    if (typeof (primeiroJogador) !== 'string' || typeof (segundoJogador) !== 'string') return respostas.erro;

    if ((!movimentos[primeiroJogador.toLowerCase()]) || (!movimentos[segundoJogador.toLowerCase()])) return respostas.erro;

    const primeiraMao = Object.keys(validacoes).find(r => r === primeiroJogador.toLowerCase());
    const segundaMao = Object.keys(validacoes[primeiraMao]).find(r => r === segundoJogador.toLowerCase());

    return validacoes[primeiraMao][segundaMao];
}

const juizJokenpo = regrasJoKenPo(validacoes, movimentos, respostas);

module.exports = { juizJokenpo };
