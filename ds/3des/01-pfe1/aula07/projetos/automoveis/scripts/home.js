const uri = "../assets/dados.json";
const locacoes = JSON.parse(window.localStorage.getItem("locacoes")) || [];
var carros = [];

fetch(uri)
    .then((response) => response.json())
    .then((data) => {
        carros = data;
    }).then(() => {
        preencherCards();
    })
    .catch((error) => {
        console.error("Erro ao carregar o arquivo JSON:", error);
    });


function preencherCards() {
    const main = document.querySelector("main");
    main.innerHTML = "";
    carros.forEach((carro, i) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${carro.imagem}" alt="${carro.modelo}">
            <h2>${carro.modelo}</h2>
            <p>${carro.marca}</p>
            <p>R$ ${carro.valor_diaria.toFixed(2).replace('.', ',')}</p>
            <button onclick="detalhes('${i}')">Detalhes</button>
        `;
        main.appendChild(card);
    });
}

function detalhes(index) {
    const detalhes = document.querySelector("#det");
    detalhes.classList.remove("oculto");
    document.querySelector("#det h2").innerHTML = carros[index].modelo;
    document.querySelector("#det img").src = carros[index].imagem;
    document.querySelector(".marca").innerHTML = `<label><b>Marca:</b></label><label>${carros[index].marca}</label>`;
    document.querySelector(".ano").innerHTML = `<label><b>Ano:</b></label><label>${carros[index].ano}</label>`;
    document.querySelector(".combustivel").innerHTML = `<label><b>Combustível:</b></label><label>${carros[index].combustivel}</label>`;
    document.querySelector(".portas").innerHTML = `<label><b>Portas:</b></label><label>${carros[index].portas}</label>`;
    document.querySelector(".transmissao").innerHTML = `<label><b>Transmissão:</b></label><label>${carros[index].transmissao}</label>`;
    document.querySelector(".cor").innerHTML = `<label><b>Cor:</b></label><label>${carros[index].cor}</label>`;
    document.querySelector(".valor_diaria").innerHTML = `<label><b>Valor da diária:</b></label><label>${carros[index].valor_diaria.toFixed(2).replace('.', ',')}</label>`;
    document.querySelector(".ano").classList.add("zebra");
    document.querySelector(".portas").classList.add("zebra");
    document.querySelector(".cor").classList.add("zebra");
    document.querySelector(".locar").setAttribute("onclick", `locar('${index}')`);
    document.querySelector(".locar").parentNode.setAttribute("style", "justify-content: flex-end;");
}

function locar(index) {
    const cadastro = document.querySelector("#cad");
    cadastro.classList.remove("oculto");
    document.querySelector(".imagem").src = carros[index].imagem;
    const form = document.querySelector("#cad form");
    form.carroId.value = carros[index].id;
    form.modelo.value = carros[index].modelo;
    form.valor_diaria.value = carros[index].valor_diaria.toFixed(2);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        data_inicio = new Date(form.data_inicio.value);
        data_previsao = new Date(form.data_previsao.value);
        if (data_inicio >= data_previsao) {
            alert("Data de previsão deve ser maior que a data de início.");
            return;
        }
        const locacao = {
            id: locacoes.length > 0 ? locacoes[locacoes.length - 1].id + 1 : 1,
            veiculo: form.carroId.value,
            cliente: form.cliente.value,
            cpf: form.cpf.value,
            data_inicio: form.data_inicio.value,
            data_previsao: form.data_previsao.value,
            total_estimado: form.total_estimado.value,
        };
        locacoes.push(locacao);
        window.localStorage.setItem("locacoes", JSON.stringify(locacoes));
        location.href = "./locacoes.html";
    });
}

function calcTotalEstimado() {
    const form = document.querySelector("#cad form");
    const dataInicio = form.data_inicio.value != "" ? new Date(form.data_inicio.value) : new Date();
    const dataPrevisao = form.data_previsao.value != "" ? new Date(form.data_previsao.value) : new Date();
    const diffTime = Math.abs(dataPrevisao - dataInicio);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const valorDiaria = Number(form.valor_diaria.value);
    const totalEstimado = diffDays * valorDiaria;
    form.total_estimado.value = Number(totalEstimado);
}