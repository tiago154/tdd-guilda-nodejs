/*Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.

O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.

As regras são as seguintes:

Pedra empata com Pedra e ganha de Tesoura
Tesoura empata com Tesoura e ganha de Papel
Papel empata com Papel e ganha de Pedra
Não esqueça de criar validações para movimentos inexistentes
*/

const movimentos = {
    pedra: 'Pedra',
    papel: 'Papel',
    tesoura: 'Tesoura'
};

const respostas = {
    primeiro: 'Jogador 1 venceu',
    segundo: 'Jogador 2 venceu',
    empate: 'Empate',
    erro: 'Jogada inexistente'
};

/**
 *
 * @param {string} primeiroJogador
 * @param {string} segundoJogador
 */
const juizJokenpo = (primeiroJogador, segundoJogador) => {
    if (!primeiroJogador || !segundoJogador) return respostas.erro;

    if (typeof(primeiroJogador) !== 'string' || typeof(segundoJogador) !== 'string') return respostas.erro;

    if ((!movimentos[primeiroJogador.toLowerCase()]) || (!movimentos[segundoJogador.toLowerCase()])) return respostas.erro;

    if (primeiroJogador === segundoJogador) return respostas.empate;

    if (primeiroJogador === movimentos.pedra && segundoJogador === movimentos.tesoura)
        return respostas.primeiro;

    if (primeiroJogador === movimentos.tesoura && segundoJogador === movimentos.papel)
        return respostas.primeiro;

    if (primeiroJogador === movimentos.papel && segundoJogador === movimentos.pedra)
        return respostas.primeiro;

    return respostas.segundo;
}

module.exports = {
    juizJokenpo,
    movimentos,
    respostas
}
