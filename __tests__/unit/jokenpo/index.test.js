const { juizJokenpo, respostas, movimentos } = require('../../../jokenpo');

describe('Jogador 1 vence', () => {
    it('Escolhendo Pedra', () => {
        const resultado = juizJokenpo(movimentos.pedra, movimentos.tesoura);

        expect(resultado).toBe(respostas.primeiro);
    });

    it('Escolhendo Tesoura', () => {
        const resultado = juizJokenpo(movimentos.tesoura, movimentos.papel);

        expect(resultado).toBe(respostas.primeiro);
    });

    it('Escolhendo Papel', () => {
        const resultado = juizJokenpo(movimentos.papel, movimentos.pedra);

        expect(resultado).toBe(respostas.primeiro);
    });
});

describe('Jogador 2 vence', () => {
    it('Escolhendo Pedra', () => {
        const resultado = juizJokenpo(movimentos.tesoura, movimentos.pedra);

        expect(resultado).toBe(respostas.segundo);
    });

    it('Escolhendo Tesoura', () => {
        const resultado = juizJokenpo(movimentos.papel, movimentos.tesoura);

        expect(resultado).toBe(respostas.segundo);
    });

    it('Escolhendo Papel', () => {
        const resultado = juizJokenpo(movimentos.pedra, movimentos.papel);

        expect(resultado).toBe(respostas.segundo);
    });
});

describe('Empate', () => {
    it('Escolhendo Pedra', () => {
        const resultado = juizJokenpo(movimentos.tesoura, movimentos.tesoura);

        expect(resultado).toBe(respostas.empate);
    });

    it('Escolhendo Tesoura', () => {
        const resultado = juizJokenpo(movimentos.papel, movimentos.papel);

        expect(resultado).toBe(respostas.empate);
    });

    it('Escolhendo Papel', () => {
        const resultado = juizJokenpo(movimentos.pedra, movimentos.pedra);

        expect(resultado).toBe(respostas.empate);
    });
});

describe('Jogadas inválidas', () => {
    it('Jogador 1 escolhendo movimento inválido', () => {
        const resultado = juizJokenpo('Tortuguita', movimentos.pedra);

        expect(resultado).toBe(respostas.erro);
    });

    it('Jogador 2 escolhendo movimento inválido', () => {
        const resultado = juizJokenpo(movimentos.tesoura, 'Tortuguita');

        expect(resultado).toBe(respostas.erro);
    });
});

describe('Valores inválidos', () => {
    describe('Jogador 1 inserindo valor inválido', () => {
        const valores = [
            { primeiro: null, segundo: movimentos.pedra },
            { primeiro: undefined, segundo: movimentos.pedra },
            { primeiro: '', segundo: movimentos.pedra },
            { primeiro: 1, segundo: movimentos.pedra },
            { primeiro: {}, segundo: movimentos.pedra },
        ];

        valores.forEach(({ primeiro, segundo }) => {
            it(`Valor: ${primeiro}`, () => {
                const resultado = juizJokenpo(primeiro, segundo);

                expect(resultado).toBe(respostas.erro);
            });
        });
    });

    describe('Jogador 2 inserindo valor inválido', () => {
        const valores = [
            { primeiro: movimentos.tesoura, segundo: null },
            { primeiro: movimentos.tesoura, segundo: undefined },
            { primeiro: movimentos.tesoura, segundo: '' },
            { primeiro: movimentos.tesoura, segundo: 1 },
            { primeiro: movimentos.tesoura, segundo: {} },
        ];

        valores.forEach(({ primeiro, segundo }) => {
            it(`Valor: ${segundo}`, () => {
                const resultado = juizJokenpo(primeiro, segundo);

                expect(resultado).toBe(respostas.erro);
            });
        });
    });
});

describe('Movimentos', () => {
    it('Deve retornar Pedra', () => {
        expect(movimentos.pedra).toBe('Pedra');
    });

    it('Deve retornar Papel', () => {
        expect(movimentos.papel).toBe('Papel');
    });

    it('Deve retornar Tesoura', () => {
        expect(movimentos.tesoura).toBe('Tesoura');
    });
});

describe('Respostas', () => {
    it('Deve retornar Jogador 1 venceu', () => {
        expect(respostas.primeiro).toBe('Jogador 1 venceu');
    });

    it('Deve retornar Jogador 2 venceu', () => {
        expect(respostas.segundo).toBe('Jogador 2 venceu');
    });

    it('Deve retornar Empate', () => {
        expect(respostas.empate).toBe('Empate');
    });

    it('Deve retornar Jogada inexistente', () => {
        expect(respostas.erro).toBe('Jogada inexistente');
    });
});

