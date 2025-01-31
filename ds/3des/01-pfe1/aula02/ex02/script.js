function digitar(){
    let n1 = Number(document.getElementById('n1').value);
    let mensagem = document.getElementById('mensagem');

    if(n1 <= 1000){
        mensagem.innerHTML = `O número digitado foi ${n1} e ele é menor ou igual a 1000.`;
    }else{
        mensagem.innerHTML = "Número inválido";
    }

}