const filtrar = document.querySelector('header form');
var locacoes = JSON.parse(window.localStorage.getItem("locacoes"));
if (locacoes == null) {
    locacoes = [];
} else {
    preencherTabela();
}

function preencherTabela(){
    const tabela = document.querySelector("tbody");
    tabela.innerHTML = "";
    locacoes.forEach((loc, i) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${loc.id}</td>
            <td>${loc.livro}</td>
            <td>${loc.leitor}</td>
            <td>${loc.cpf}</td>
            <td>${new Date(loc.data).toLocaleDateString('pt-br')}</td>
            <td>${new Date(loc.previsao).toLocaleDateString('pt-br')}</td>
            <td>${loc.devolucao ? new Date(loc.devolucao).toLocaleDateString('pt-br'):'<button onclick="devolver('+i+')">Devolver</button>'}</td>
            <td><button onclick="excluir('${i}')">Excluir</button></td>
        `;
        tabela.appendChild(linha);
    });
}

function devolver(indice) {
    const locacao = locacoes[indice];
    locacao.devolucao = new Date();
    locacoes[indice] = locacao;
    window.localStorage.setItem("locacoes", JSON.stringify(locacoes));
    location.reload();
}

function excluir(indice) {
    const locacao = locacoes[indice];
    locacoes.splice(indice, 1);
    window.localStorage.setItem("locacoes", JSON.stringify(locacoes));
    location.reload();
}

filtrar.addEventListener("submit", (e) => {
    e.preventDefault();
    const busca = filtrar.filtro.value.toLowerCase();
    if (busca.length < 1) {
        window.location.reload();
    }
    const resultado = locacoes.filter(locacao => locacao.livro.toLowerCase().includes(busca) || locacao.leitor.toLowerCase().includes(busca));
    if (resultado.length > 0) {
        locacoes = resultado;
        preencherTabela();
    } else {
        alert("Nenhum resultado encontrado");
        window.location.reload();
    }
});