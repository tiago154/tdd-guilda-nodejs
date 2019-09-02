const { juizJokenpo } = require('../../../src/rock-paper-scissors-lizard-spock');
const { movimentos, respostas } = require('../../../src/rock-paper-scissors-lizard-spock/regras');

describe('Jogador 1 vence', () => {
    describe('Escolhendo Pedra', () => {
        it('Contra Tesoura', () => {
            const resultado = juizJokenpo(movimentos.pedra, movimentos.tesoura);

            expect(resultado).toBe(respostas.primeiro);
        });

        it('Contra Lagarto', () => {
            const resultado = juizJokenpo(movimentos.pedra, movimentos.lagarto);

            expect(resultado).toBe(respostas.primeiro);
        });
    });

    describe('Escolhendo Tesoura', () => {
        it('Contra Papel', () => {
            const resultado = juizJokenpo(movimentos.tesoura, movimentos.papel);

            expect(resultado).toBe(respostas.primeiro);
        });

        it('Contra Lagarto', () => {
            const resultado = juizJokenpo(movimentos.tesoura, movimentos.lagarto);

            expect(resultado).toBe(respostas.primeiro);
        });
    });

    describe('Escolhendo Papel', () => {
        it('Contra Pedra', () => {
            const resultado = juizJokenpo(movimentos.papel, movimentos.pedra);

            expect(resultado).toBe(respostas.primeiro);
        });

        it('Contra Spock', () => {
            const resultado = juizJokenpo(movimentos.papel, movimentos.spock);

            expect(resultado).toBe(respostas.primeiro);
        });
    });
});

describe('Jogador 2 vence', () => {
    describe('Escolhendo Pedra', () => {
        it('Contra Tesoura', () => {
            const resultado = juizJokenpo(movimentos.tesoura, movimentos.pedra);

            expect(resultado).toBe(respostas.segundo);
        });

        it('Contra Lagarto', () => {
            const resultado = juizJokenpo(movimentos.lagarto, movimentos.pedra);

            expect(resultado).toBe(respostas.segundo);
        });
    });

    describe('Escolhendo Tesoura', () => {
        it('Contra Papel', () => {
            const resultado = juizJokenpo(movimentos.papel, movimentos.tesoura);

            expect(resultado).toBe(respostas.segundo);
        });

        it('Contra Lagarto', () => {
            const resultado = juizJokenpo(movimentos.lagarto, movimentos.tesoura);

            expect(resultado).toBe(respostas.segundo);
        });
    });

    describe('Escolhendo Papel', () => {
        it('Contra Pedra', () => {
            const resultado = juizJokenpo(movimentos.pedra, movimentos.papel);

            expect(resultado).toBe(respostas.segundo);
        });

        it('Contra Spock', () => {
            const resultado = juizJokenpo(movimentos.spock, movimentos.papel);

            expect(resultado).toBe(respostas.segundo);
        });
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

    it('Escolhendo Lagarto', () => {
        const resultado = juizJokenpo(movimentos.lagarto, movimentos.lagarto);

        expect(resultado).toBe(respostas.empate);
    });

    it('Escolhendo Spock', () => {
        const resultado = juizJokenpo(movimentos.spock, movimentos.spock);

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

    it('Deve retornar Spock', () => {
        expect(movimentos.spock).toBe('Spock');
    });

    it('Deve retornar Lagarto', () => {
        expect(movimentos.lagarto).toBe('Lagarto');
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

