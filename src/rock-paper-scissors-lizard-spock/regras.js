const movimentos = {
    pedra: 'Pedra',
    papel: 'Papel',
    tesoura: 'Tesoura',
    spock: 'Spock',
    lagarto: 'Lagarto'
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
        spock: respostas.segundo,
        tesoura: respostas.primeiro,
        lagarto: respostas.primeiro
    },
    papel: {
        papel: respostas.empate,
        tesoura: respostas.segundo,
        lagarto: respostas.lagarto,
        pedra: respostas.primeiro,
        spock: respostas.primeiro
    },
    tesoura: {
        tesoura: respostas.empate,
        pedra: respostas.segundo,
        spock: respostas.segundo,
        papel: respostas.primeiro,
        lagarto: respostas.primeiro
    },
    lagarto: {
        tesoura: respostas.segundo,
        pedra: respostas.segundo,
        spock: respostas.primeiro,
        papel: respostas.primeiro,
        lagarto: respostas.empate
    },
    spock: {
        tesoura: respostas.primeiro,
        pedra: respostas.primeiro,
        spock: respostas.empate,
        papel: respostas.segundo,
        lagarto: respostas.segundo
    }
}

module.exports = {
    movimentos,
    validacoes,
    respostas
}
