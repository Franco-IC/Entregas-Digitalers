/*
DESAFIO FETCH
Consumir la api fake de https://jsonplaceholder.typicode.com/ implementando API Fetch y pintar en nuestro html (utilizando bootstrap vía cdn para los estilos) una tabla de 10 usuarios y debe contener las propiedades en sus columnas de Id, name, username, email y address-street.
*/

const btnInsertData = document.querySelector('#btn-insert-data');
const btnCleanData = document.querySelector('#btn-clean-data');

async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    let res = await fetch(url);
    let resp = await res.json();

    return resp;
}

async function paintData() {
    json = await getData();
    
    const table = document.querySelector('#users-table');
    const tbody = document.createElement('tbody');
    
    for (const i in json) {
        let user_actual = json[i];
        
        const row = document.createElement('tr');
        const id = document.createElement('td');
        const name = document.createElement('td');
        const username = document.createElement('td');
        const email = document.createElement('td');
        const address = document.createElement('td');
        
        id.textContent = user_actual.id;
        name.textContent = user_actual.name;
        username.textContent = user_actual.username;
        email.textContent = user_actual.email;
        address.textContent = user_actual.address.street;
        
        row.append(id, name, username, email, address);
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
}

btnInsertData.addEventListener('click', () => {
    const tbody = document.querySelector('tbody');
    
    if (tbody === null) {
        paintData();
    } else alert('No hay más datos para insertar.');
});

btnCleanData.addEventListener('click', () => {
    const tbody = document.querySelector('tbody');

    if (tbody !== null && tbody.hasChildNodes()) {
        tbody.remove();
    } else alert('No hay datos para limpiar.');
})