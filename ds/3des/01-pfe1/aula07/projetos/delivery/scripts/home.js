const uri = '../assets/dados.json';
const cadastro = document.querySelector('form');
var produtos = [];
const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

if (pedidos.length > 0) {
    montarCards();
}

fetch(uri)
    .then(response => response.json())
    .then(data => {
        produtos = data;
    })
    .then(() => {
        cadastro.ingredientes.value = produtos[0].ingredientes.join(', ');
        cadastro.data.value = new Date().toLocaleDateString('ps-BR') + ' ' + new Date().toLocaleTimeString('pt-BR');
        produtos.forEach(produto => {
            const option = document.createElement('option');
            option.value = produto.id;
            option.textContent = `${produto.nome} R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
            cadastro.produto.appendChild(option);
        });
    });

cadastro.produto.addEventListener('change', () => {
    let indice = cadastro.produto.selectedIndex;
    if (indice == -1) {
        indice = 0;
    }
    cadastro.ingredientes.value = produtos[indice].ingredientes.join(', ');
});

cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const produtoSelecionado = produtos[cadastro.produto.selectedIndex];
    const pedido = {
        id: pedidos[pedidos.length - 1] ? pedidos[pedidos.length - 1].id + 1 : 0,
        cliente: cadastro.cliente.value,
        endereco: cadastro.endereco.value,
        produto: produtoSelecionado.nome,
        preco: produtoSelecionado.preco,
        ingredientes: cadastro.ingredientes.value.split(',').map(ingrediente => ingrediente.trim()),
        data: new Date(),
        status: 'execucao',
    }
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    window.location.reload();
});

function montarCards() {
    const execucao = document.querySelector('.cards1');
    const caminho = document.querySelector('.cards2');
    pedidos.forEach((pedido, i) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${pedido.cliente}</h3>
            <div class="card-infos">
                <div>
                    <p>Preço: R$ ${pedido.preco.toFixed(2).replace('.', ',')}</p>
                    <p>Ingredientes: ${pedido.ingredientes.join(', ')}</p>
                    <p>Endereço: ${pedido.endereco}</p>
                    <p>Valor: R$ ${pedido.preco.toFixed(2).replace('.', ',')}</p>
                    <p>Data: ${new Date(pedido.data).toLocaleString('pt-BR')}</p>
                    <p>Entrega: ${pedido.entrega != undefined ? new Date(pedido.data).toLocaleString('pt-BR'):''}</p>
                </div>
                <div class='card-botoes'>
                    <img src="../assets/${pedido.status == 'execucao' ? 'check.png' : 'icone.png'}" alt="Ícone" class="img-card">
                    <button onclick="alterarStatus('${i}')">${pedido.status == 'execucao' ? 'Enviar Entrega' : 'Concluir Entrega'}</button>
                </div>
            </div>`;
        if (pedido.status == 'execucao') {
            execucao.appendChild(card);
        }
        if (pedido.status == 'entregue') {
            caminho.appendChild(card);
        }
    });

}

function alterarStatus(indice) {
    if (pedidos[indice].status == 'execucao') {
        pedidos[indice].status = 'entregue'
        pedidos[indice].entrega = new Date();
    } else {
        pedidos[indice].status = 'concluido'
        pedidos[indice].conclusao = new Date();
    }
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    window.location.reload();
}