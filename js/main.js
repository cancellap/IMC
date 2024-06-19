const form = document.querySelector("#form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        msgResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        msgResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getGrauImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    msgResultado(msg, true);
});
const getGrauImc = (imc) => {
    const grau = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    return imc >= 39.9 ? grau[5] :
        imc >= 34.9 ? grau[4] :
            imc >= 29.9 ? grau[3] :
                imc >= 24.9 ? grau[2] :
                    imc >= 18.5 ? grau[1] :
                        grau[0];
};
const getImc = (peso, altura) => (peso / altura ** 2).toFixed(2);
const criaP = () => document.createElement('p');
const msgResultado = (msg, isValid) => {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";
    const p = criaP();
    isValid ? p.classList.add('paragrafo-green') : p.classList.add('paragrafo-red');
    p.innerHTML = msg;
    resultado.appendChild(p);
};


/*
const form = document.querySelector("#form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        msgResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        msgResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getGrauImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`
    msgResultado(msg, true);
});
function getGrauImc(imc) {
    const grau = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
        'Obesidade grau 3'];
    if (imc >= 39.9) return grau[5];
    if (imc >= 34.9) return grau[4];
    if (imc >= 29.9) return grau[3];
    if (imc >= 24.9) return grau[3];
    if (imc >= 18.5) return grau[1];
    if (imc < 18.5) return grau[0];
}
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function criaP() {
    const p = document.createElement('p');
    return p;
}
function msgResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";
    const p = criaP();
    isValid ? p.classList.add('paragrafo-green') : p.classList.add('paragrafo-red');
    p.innerHTML = msg;
    resultado.appendChild(p);
}*/