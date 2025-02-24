const atletas = [
    {
        "id": 1,
        "nome": "Usain Bolt",
        "pais": "Jamaica",
        "idade": 34,
        "altura": 1.95,
        "peso": 94,
        "modalidade": "100m rasos",
        "foto": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj"
    },
    {
        "id": 2,
        "nome": "Usain Bolt",
        "pais": "Jamaica",
        "idade": 34,
        "altura": 1.95,
        "peso": 94,
        "modalidade": "100m rasos",
        "foto": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj"
    },
    {
        "id": 3,
        "nome": "Usain Bolt",
        "pais": "Jamaica",
        "idade": 34,
        "altura": 1.95,
        "peso": 94,
        "modalidade": "100m rasos",
        "foto": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj"
    },
    {
        "id": 4,
        "nome": "Usain Bolt",
        "pais": "Jamaica",
        "idade": 34,
        "altura": 1.95,
        "peso": 94,
        "modalidade": "100m rasos",
        "foto": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj"
    },
    {
        "id": 5,
        "nome": "Usain Bolt",
        "pais": "Jamaica",
        "idade": 34,
        "altura": 1.95,
        "peso": 94,
        "modalidade": "100m rasos",
        "foto": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj"
    },
    {
        "id": 6,
        "nome": "Usain Bolt",
        "pais": "Jamaica",
        "idade": 34,
        "altura": 1.95,
        "peso": 94,
        "modalidade": "100m rasos",
        "foto": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj"
    },
    {
        "id": 7,
        "nome": "Usain Bolt",
        "pais": "Jamaica",
        "idade": 34,
        "altura": 1.95,
        "peso": 94,
        "modalidade": "100m rasos",
        "foto": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj"
    },
    {
        "id": 8,
        "nome": "Usain Bolt",
        "pais": "Jamaica",
        "idade": 34,
        "altura": 1.95,
        "peso": 94,
        "modalidade": "100m rasos",
        "foto": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj"
    },
    {
        "id": 9,
        "nome": "Usain Bolt",
        "pais": "Jamaica",
        "idade": 34,
        "altura": 1.95,
        "peso": 94,
        "modalidade": "100m rasos",
        "foto": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj"
    }
]

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
    alert(id);
}