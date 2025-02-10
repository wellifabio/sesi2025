
fetch('http://localhost:3000/clientes')
    .then(response => response.json())
    .then(data => console.table(data))



function cadastrar() {
    let resultado = document.getElementById('resultado0');
    let dados = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        nascimento: document.getElementById('nascimento').value
    }
    fetch('http://localhost:3000/clientes',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(resp => {
            alert("Cliente cadastrado com sucesso!");
            window.location.reload();
        });
}

fetch('http://localhost:3000/clientes')
.then(response => response.json())
.then(clientes => {
    const tabela = document.getElementById('clientes');
    clientes.forEach(cliente => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${cliente.id_cliente}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.nascimento}</td>
        `;
        tabela.appendChild(linha);
    });
});