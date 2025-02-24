const atletas = JSON.parse(window.localStorage.getItem('atletas'));
if(atletas === null) {
    window.localStorage.setItem('atletas', JSON.stringify([]));
    atletas = [];
}
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

const registrar = document.querySelector('#cadastro form');
registrar.addEventListener('submit', e => {
    e.preventDefault();
    const atleta = {
        id: atletas.length + 1,
        nome: registrar.nome.value,
        pais: registrar.pais.value,
        idade: Number(registrar.idade.value),
        altura: Number(registrar.altura.value),
        peso: Number(registrar.peso.value),
        modalidade: registrar.modalidade.value,
        foto: registrar.foto.value
    };
    atletas.push(atleta);
    window.localStorage.setItem('atletas', JSON.stringify(atletas));
    window.location.reload();
});