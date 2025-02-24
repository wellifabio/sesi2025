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
        "id": 1,
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
    card.innerHTML=`
        <h2>${atleta.nome}</h2>
        <img src="${atleta.foto}" alt="Foto de ${atleta.nome}">
        <p>País: ${atleta.pais}</p>
        <p>Modalidade: ${atleta.modalidade}</p>
    `;
    main.appendChild(card);
});