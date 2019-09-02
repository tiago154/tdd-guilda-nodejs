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


const validacoes = {
    pedra: {
        pedra: respostas.empate,
        papel: respostas.segundo,
        tesoura: respostas.primeiro
    },
    papel: {
        papel: respostas.empate,
        tesoura: respostas.segundo,
        pedra: respostas.primeiro
    },
    tesoura: {
        tesoura: respostas.empate,
        pedra: respostas.segundo,
        papel: respostas.primeiro
    }
}

module.exports = {
    movimentos,
    validacoes,
    respostas
}
