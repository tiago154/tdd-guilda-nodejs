const { calcularMedia, respostas } = require('../../../demo');

describe('Valores válidos', () => {
    it('A mensagem deve retornar Aprovado com Distinção caso a média seja 10', () => {
        const resultado = calcularMedia(10, 10);

        expect(resultado).toBe(respostas.aprovadoDisticao);
    });

    it('A mensagem deve retornar Aprovado caso a média seja igual ou maior que 7 e menor 10', () => {
        const resultado = calcularMedia(10, 9);

        expect(resultado).toBe(respostas.aprovado);
    });

    it('A mensagem deve retornar Reprovado caso a média seja menor 7', () => {
        const resultado = calcularMedia(7, 6);

        expect(resultado).toBe(respostas.reprovado);
    });
});

describe('Valores inválidos', () => {
    describe('Primeiro número', () => {
        describe('Não é um número', () => {
            const valores = [
                { primeiraNota: null, segundaNota: 10 },
                { primeiraNota: undefined, segundaNota: 10 },
                { primeiraNota: '10', segundaNota: 10 },
                { primeiraNota: {}, segundaNota: 10 }
            ];

            valores.forEach(({ primeiraNota, segundaNota }) => {
                it(`Primeira Nota: ${primeiraNota}`, () => {
                    const resultado = calcularMedia(primeiraNota, segundaNota);

                    expect(resultado).toBe(respostas.erro);
                })
            });
        });

        describe('Nota inválida', () => {
            const valores = [
                { primeiraNota: 11, segundaNota: 10 },
                { primeiraNota: -2, segundaNota: 10 },
            ];

            valores.forEach(({ primeiraNota, segundaNota }) => {
                it(`Primeira Nota: ${primeiraNota}`, () => {
                    const resultado = calcularMedia(primeiraNota, segundaNota);

                    expect(resultado).toBe(respostas.erro);
                })
            });
        });
    });

    describe('Segundo número', () => {
        describe('Não é um número', () => {
            const valores = [
                { primeiraNota: 10, segundaNota: null },
                { primeiraNota: 9, segundaNota: undefined },
                { primeiraNota: 8, segundaNota: '10' },
                { primeiraNota: 7, segundaNota: {} }
            ];

            valores.forEach(({ primeiraNota, segundaNota }) => {
                it(`Segunda Nota: ${segundaNota}`, () => {
                    const resultado = calcularMedia(primeiraNota, segundaNota);

                    expect(resultado).toBe(respostas.erro);
                })
            });
        });

        describe('Nota inválida', () => {
            const valores = [
                { primeiraNota: 8, segundaNota: 11 },
                { primeiraNota: 7, segundaNota: -5 },
            ];

            valores.forEach(({ primeiraNota, segundaNota }) => {
                it(`Segunda Nota: ${segundaNota}`, () => {
                    const resultado = calcularMedia(primeiraNota, segundaNota);

                    expect(resultado).toBe(respostas.erro);
                })
            });
        });
    });
});
