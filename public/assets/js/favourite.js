getData();
async function getData() {
    const response = await fetch('/all-card-images');
    const data = await response.json();
    
    for (item of data) {
        const main = document.querySelector('.main_collection');

        if (item.imageType == "TradingCard") {

            const image = document.createElement('img');

            if(item.favourite == true) {

                const root = document.getElementById('favourite_cards');
                
                root.style.cssText = 'padding: 10px;';
                image.style.cssText = 'width: 155px; margin-right: 10px; margin-left: 10px;';
    
                image.src = item.image64;

                root.append(image);

                const hideMessage = document.getElementById('noFavouriteCards');
                hideMessage.style.cssText = "display: none;";
            }
        }
    }
}





  