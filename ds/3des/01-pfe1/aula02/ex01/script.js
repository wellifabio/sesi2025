function calculadoraIMC() {
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let resultado = document.getElementById('resultado')

    let imc = peso / (altura * altura)

    if (imc < 18.5) {
        resultado.innerHTML = `Magreza`
    } else if (imc <= 24.9) {
        resultado.innerHTML = `O seu peso esta normal`
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `Você está com sobrepeso`
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `Obesidade grau 1`
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `Obesidade grau 2`
    } else if (imc > 40) {
        resultado.innerHTML = `Obesidade grau 3`
    }
}