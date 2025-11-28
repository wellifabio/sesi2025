const uri01 = "../assets/dados.json";
const main = document.querySelector("main");
const det = document.getElementById("detalhes");
const loc = document.getElementById("locacao");
const buscar = document.querySelector('header form');

var locacoes = JSON.parse(window.localStorage.getItem("locacoes"));
if (locacoes == null) {
    locacoes = [];
}

var livros = [];

fetch(uri01)
    .then(resp => resp.json())
    .then(data => {livros = data;})
    .then(()=>{gerarCards()})

function gerarCards() {
    main.innerHTML = "";
    livros.forEach((livro, indice) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div>
                <img src="../assets/livro.png" alt="${livro.titulo}">
            </div>
            <div>
                <h3>${livro.titulo}</h3>
                <p>${livro.autor}</p>
                <p>${livro.ano}</p>
                <button onclick="mostrarDetalhes(${indice})">Detalhes</button>
            </div>
        `;
        main.appendChild(card);
    });
}

function mostrarDetalhes(indice) {
    const livro = livros[indice];
    det.classList.remove("oculto");
    document.getElementById("titulo").innerHTML = livro.titulo;
    document.getElementById("id").innerHTML = livro.id;
    document.getElementById("autor").innerHTML = livro.autor;
    document.getElementById("ano").innerHTML = livro.ano;
    document.getElementById("editora").innerHTML = livro.editora;
    document.getElementById("genero").innerHTML = livro.genero;
    document.getElementById("descricao").innerHTML = livro.descricao;
    document.getElementById("locar").setAttribute("onclick", `locar(${indice})`);
}

function locar(indice) {
    const livro = livros[indice];
    loc.classList.remove("oculto");
    form = document.querySelector("#locacao form");
    form.livro.value = livro.titulo;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const dados = {
            id: locacoes[locacoes.length - 1] ? locacoes[locacoes.length - 1].id + 1 : 1,
            livro: form.livro.value,
            leitor: form.leitor.value,
            cpf: form.cpf.value,
            data: form.data.value,
            previsao: form.previsao.value
        }
        locacoes.push(dados);
        window.localStorage.setItem("locacoes", JSON.stringify(locacoes));
        alert(`Livro ${livro.titulo} locado com sucesso!`);
        window.location.href = "locacoes.html";
    });
}

buscar.addEventListener("submit", (e) => {
    e.preventDefault();
    const busca = buscar.busca.value.toLowerCase();
    if (busca.length < 1) {
        window.location.reload();
    }
    const resultado = livros.filter(livro => livro.titulo.toLowerCase().includes(busca) || livro.autor.toLowerCase().includes(busca));
    if (resultado.length > 0) {
        livros = resultado;
        gerarCards();
    } else {
        alert("Nenhum resultado encontrado");
        window.location.reload();
    }
});