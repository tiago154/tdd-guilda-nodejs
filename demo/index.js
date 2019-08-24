// Faça uma função que leia duas notas de um aluno.
// A função deve calcular a média alcançada do aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.
// Valores que não sejam numeros ou notas validas deverá retornar a mensagem "Informações Inválidas";

const respostas = {
    aprovadoDisticao: 'Aprovado com Distinção',
    aprovado: 'Aprovado',
    erro: 'Informações Inválidas',
    reprovado: 'Reprovado',
};

const calcularMedia = (primeiraNota, segundaNota) => {
    if (typeof (primeiraNota) !== 'number' || typeof (segundaNota) !== 'number')
        return respostas.erro;

    if ((primeiraNota > 10 || primeiraNota < 0) || (segundaNota > 10 || segundaNota < 0))
        return respostas.erro;

    const media = (primeiraNota + segundaNota) / 2;

    if (media === 10) {
        return respostas.aprovadoDisticao;
    } else if (media >= 7 && media < 10) {
        return respostas.aprovado;
    } else {
        return respostas.reprovado;
    }
};


module.exports = {
    calcularMedia,
    respostas
};
