const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

if (pedidos.length > 0) {
    preencherTabela();
}

function preencherTabela() {
    const corpo = document.getElementById('pedidos-concluidos');
    const total = document.getElementById('total');
    let totalValor = 0;
    pedidos.forEach((pedido, i) => {
        const tr = document.createElement('tr');
        if (pedido.status !== 'execucao') {
            tr.innerHTML = `
            <td data-label="Id">${pedido.id}</td>
            <td data-label="Cliente">${pedido.cliente}</td>
            <td data-label="Endereço">${pedido.endereco}</td>
            <td data-label="Produto">${pedido.produto}</td>
            <td data-label="Data">${new Date(pedido.data).toLocaleString('pt-BR')}</td>
            <td data-label="Entrega">${new Date(pedido.entrega).toLocaleString('pt-BR')}</td>
            <td data-label="Concluído">${pedido.conclusao != undefined ? new Date(pedido.conclusao).toLocaleString('pt-BR') : '<button onclick="concluir(' + i + ')">Concluir</button>'}</td>
            <td data-label="Valor">R$ ${pedido.preco.toFixed(2).replace('.', ',')}</td>
            <td data-label="Ação"><button onclick="excluír('${i}')">Excluir</button></td>
        `;
            totalValor += pedido.preco;
            corpo.appendChild(tr);
        }
    });
    total.innerHTML = `${totalValor.toFixed(2).replace('.', ',')}`;
}

function concluir(i) {
    pedidos[i].status = 'concluido';
    pedidos[i].conclusao = new Date();
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    window.location.reload();
}

function excluír(i) {
    pedidos.splice(i, 1);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    window.location.reload();
}