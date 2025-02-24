const atletas = JSON.parse(window.localStorage.getItem('atletas'));

const main = document.querySelector('main');
atletas.forEach(atleta => {
    const card = document.createElement('div');
    card.innerHTML = `
        <div>
            <h2>${atleta.nome}</h2>
            <button onclick="excluir(${atleta.id})">-</button>
        </div>
        <img src="${atleta.foto}" alt="Foto de ${atleta.nome}">
        <p>País: ${atleta.pais}</p>
        <p>Modalidade: ${atleta.modalidade}</p>
    `;
    main.appendChild(card);
});

function excluir(id) {
    if(confirm('Realmente quer excluir o card '+id+' ?')) {
        const indice = atletas.findIndex(atleta => atleta.id === id);
        atletas.splice(indice, 1);
        window.localStorage.setItem('atletas', JSON.stringify(atletas));
        window.location.reload();
    }
}

const cadastro = document.querySelector('#cadastro form');
cadastro.addEventListener('submit', e => {
    e.preventDefault();
    const atleta = {
        id: atletas.length + 1,
        nome: cadastro.nome.value,
        pais: cadastro.pais.value,
        idade: Number(cadastro.idade.value),
        altura: Number(cadastro.altura.value),
        peso: Number(cadastro.peso.value),
        modalidade: cadastro.modalidade.value,
        foto: cadastro.foto.value
    };
    atletas.push(atleta);
    window.localStorage.setItem('atletas', JSON.stringify(atletas));
});