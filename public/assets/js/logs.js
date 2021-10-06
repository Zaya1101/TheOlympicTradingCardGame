//JS for the Collection page that requests the trading card data from the server.
getData();
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        if (item.imageType == "TradingCard") {
            const root = document.createElement('div');
            const date = document.createElement('div');
            const image = document.createElement('img');

            root.style.cssText = 'padding: 10px;';
            image.style.cssText = 'width: 150px';
        
            image.src = item.image64;

            root.append(date, image);
            document.body.append(root);
        }
    }
    console.log(data);
}