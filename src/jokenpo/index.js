/*Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.

O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.

As regras são as seguintes:

Pedra empata com Pedra e ganha de Tesoura
Tesoura empata com Tesoura e ganha de Papel
Papel empata com Papel e ganha de Pedra
Não esqueça de criar validações para movimentos inexistentes
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
