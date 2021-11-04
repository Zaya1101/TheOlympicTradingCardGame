getData();

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();




}

function setup() {
    const selectedCardID = window.localStorage.getItem('imageID');
    const fav = window.localStorage.getItem('favourite');
    const data = {selectedCardID, fav};
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        };
    console.log(data);
    return fetch('/api', options)

}