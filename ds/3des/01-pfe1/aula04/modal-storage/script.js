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
    }
}

window.localStorage.setItem('atletas', JSON.stringify(atletas));