class Locacao {
    constructor(obj, indice) {
        this.id = obj.id || 0;
        this.cliente = obj.cliente || null;
        this.cpf = obj.cpf || null;
        this.veiculo = Number(obj.veiculo) || null;
        this.data_inicio = obj.data_inicio || null;
        this.data_previsao = obj.data_previsao || null;
        this.data_fim = obj.data_fim || null;
        this.total_estimado = Number(obj.total_estimado) || 0;
        this.total_pago = Number(obj.total_pago) || 0;
        this.indice = indice || 0;
    }

    toRow() {
        return `
        <tr>
            <td data-label="Id:">${this.id}</td>
            <td data-label="Veículo:" style="text-align:center;">${this.veiculo}</td>
            <td data-label="Cliente:">${this.cliente}</td>
            <td data-label="CPF:">${this.cpf}</td>
            <td data-label="Data início:">${new Date(this.data_inicio).toLocaleDateString('pt-BR')}</td>
            <td data-label="Data prevista:">${new Date(this.data_previsao).toLocaleDateString('pt-BR')}</td>
            <td data-label="Data entrega:">${this.data_fim != null ? new Date().toLocaleDateString('pt-BR') : '<button onclick="entregar(' + this.indice + ')">Entregar</button>'}</td>
            <td data-label="Valor estimado" style="text-align:right;">${this.total_estimado.toFixed(2).replace('.', ',')}</td>
            <td data-label="Valor pago:" style="text-align:right;">${this.total_pago.toFixed(2).replace('.', ',')}</td>
            <td data-label="Ação"><button onclick="excluir('${this.indice}')">Excluir</button></td>
        </tr> 
        `;
    }
}

const locacoes = JSON.parse(window.localStorage.getItem("locacoes")) || [];
const corpo = document.querySelector("#locacoes-concluidas");

async function preencherTabela() {
    const campoTotal = document.querySelector("#total");
    let total = 0;
    await locacoes.forEach((l, i) => {
        const locacao = new Locacao(l, i);
        corpo.innerHTML += locacao.toRow();
        total += locacao.total_pago;
    });
    campoTotal.innerHTML = total.toFixed(2).replace('.', ',');
}

function entregar(indice) {
    const locacao = locacoes[indice];
    locacao.data_fim = new Date();
    locacao.total_pago = locacao.total_estimado;
    window.localStorage.setItem("locacoes", JSON.stringify(locacoes));
    window.location.reload();
}

function excluir(indice) {
    if (confirm("Deseja realmente excluir a locação " + indice + "?")) {
        locacoes.splice(indice, 1);
        window.localStorage.setItem("locacoes", JSON.stringify(locacoes));
        window.location.reload();
    }
}