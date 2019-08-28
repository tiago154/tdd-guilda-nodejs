const { calcularMedia, respostas } = require('../../../demo');

describe('Valores válidos', () => {
    it('Deve retornar Aprovado com Distinção caso a média seja 10', () => {
        const resultado = calcularMedia(10, 10);

        expect(resultado).toBe(respostas.aprovadoDisticao);
    });

    it('Deve retornar Aprovado caso a média seja igual ou maior que 7 e menor 10', () => {
        const resultado = calcularMedia(10, 9);

        expect(resultado).toBe(respostas.aprovado);
    });

    it('Deve retornar Reprovado caso a média seja menor 7', () => {
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
                it(`Valida a Primeira Nota: ${primeiraNota} e retornar mensagem de erro`, () => {
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
                it(`Valida a Primeira Nota: ${primeiraNota} e retornar mensagem de erro`, () => {
                    const resultado = calcularMedia(primeiraNota, segundaNota);

                    expect(resultado).toBe(respostas.erro);
                })
            });
        });
    });

    describe('Segundo número', () => {
        describe('Não é um número', () => {
            // Uma outra forma de validar N argumentos de uma mesma função
            it.each([[10, null], [9, undefined], [8, '10'], [7, {}]])
                ('PrimeiraNota: %p, Valida a Segunda Nota: %p e retornar mensagem de erro', (primeiraNota, segundaNota) => {
                    const resultado = calcularMedia(primeiraNota, segundaNota);

                    expect(resultado).toBe(respostas.erro);
                });
        });

        describe('Nota inválida', () => {
            // Uma outra forma de validar N argumentos de uma mesma função
            it.each([[8, 11], [7, -5]])('PrimeiraNota: %p, Valida a Segunda Nota: %p', (primeiraNota, segundaNota) => {
                const resultado = calcularMedia(primeiraNota, segundaNota);

                expect(resultado).toBe(respostas.erro);
            });
        });
    });
});
