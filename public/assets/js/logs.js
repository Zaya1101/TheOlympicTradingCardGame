//JS for the Collection page that requests the trading card data from the server.
getData();
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        const root = document.createElement('div');
        const geo = document.createElement('div');
        const date = document.createElement('div');
        const image = document.createElement('img');

        root.style.cssText = 'padding: 10px;';
        
        geo.textContent = `${item.lat}°, ${item.lon}°`;
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = dateString;
        image.src = item.image64;

        root.append(geo, date, image);
        document.body.append(root);
    }
    console.log(data);
}