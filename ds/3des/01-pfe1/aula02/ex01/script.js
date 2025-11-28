function calculoimc() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let mensagem = document.getElementById('mensagem');

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        mensagem.innerHTML = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem.innerHTML = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        mensagem.innerHTML = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        mensagem.innerHTML = 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        mensagem.innerHTML = 'Obesidade grau 2';
    } else {
        mensagem.innerHTML = 'Obesidade grau 3';
    }

}