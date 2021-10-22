//JS for the Collection page that requests the trading card data from the server.
MicroModal.init();
getData();
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    
    for (item of data) {
        const main = document.querySelector('.main_collection');

        if (item.imageType == "TradingCard") {

            const image = document.createElement('img');

            if(item.rarity == "legendary") {

                const root = document.querySelector('#legendary');
                

                root.style.cssText = 'padding: 10px;';
                image.style.cssText = 'width: 155px; box-shadow: 0px 0px 4px 2px #FFDB51;';
    
                image.src = item.image64;

                root.append(image);
                main.append(root);

                const hideMessage = document.getElementById('noLegendaryCards');
                hideMessage.style.cssText = "display: none;";
            }

            if(item.rarity == "epic") {

                const root = document.querySelector('#epic');
                const link = document.createElement('a');
                

                link.className = 'collectionCardContainer';

                root.style.cssText = 'padding: 10px;';
                image.style.cssText = 'width: 155px; box-shadow: 0px 0px 4px 2px #9400D3;';
    
                image.src = item.image64;

                root.append(link);
                link.append(image);
                main.append(root);

                const hideMessage = document.getElementById('noEpicCards');
                hideMessage.style.cssText = "display: none;";
            } 

            if(item.rarity == "rare") {
                const root = document.querySelector('#rare');
                

                root.style.cssText = 'padding: 10px;';
                image.style.cssText = 'width: 155px; box-shadow: 0px 0px 4px 2px #4195fc;';
    
                image.src = item.image64;

                image.onclick = function(){openModal()};

                root.append(image);
                main.append(root);

                
                const hideMessage = document.getElementById('noRareCards');
                hideMessage.style.cssText = "display: none;";

            } 

            if(item.rarity == "common") {
                const root = document.querySelector('#common');

                root.style.cssText = 'padding: 10px;';
                image.style.cssText = 'width: 155px; box-shadow: 0px 0px 4px 2px #808080;';

                image.src = item.image64;

                image.onclick = function(){openModal()};

                root.append(image);
                main.append(root);

                const hideMessage = document.getElementById('noCommonCards');
                hideMessage.style.cssText = "display: none;";
                
            } 

            const modal = document.getElementById("myModal");
            const modalImg = document.getElementById("img01");
            const stars = document.getElementById("starAmount")
            const span = document.getElementsByClassName("close")[0];
            const modalDate = document.getElementById("date");
            const dateString = new Date(item.timestamp).toLocaleDateString();
            const favouriteIcon = document.getElementById("favouriteIcon");
            const favouriteStatus = item.favourite;
            image.onclick = function(){
                modal.style.display = "block";
                modalImg.src = image.src;
                modalDate.innerText = `Created on: ${dateString}`;
                stars.innerHTML = `<i class="fas fa-star" style="padding-right: 5px; color: #FFCD00;"></i> Stars: ${item.stars}`
            }
            span.onclick = function() { 
                modal.style.display = "none";
            }

            if(favouriteStatus == true) {
                favouriteIcon.innerHTML = `<i class="fas fa-heart" style="color: red;"></i>`;
            } else {
                favouriteIcon.innerHTML = `<i class="far fa-heart"></i>`;
            }

            //Fix this its not working. If it doesn't end up working, just make the favourite cards on the homepage randomised.
            favouriteIcon.addEventListener('click', async event => {
                if(favouriteStatus == true) {
                    data.favourite = false;
                    favouriteIcon.innerHTML = `<i class="far fa-heart"></i>`;
                } else if (favouriteStatus == false) {
                    data.favourite = true;
                    favouriteIcon.innerHTML = `<i class="fas fa-heart" style="color: red;"></i>`;
                }
            });
        }

        

        const allImages = document.querySelectorAll('img:not(.modal-image-content)'); 

        for(i = 0; i < allImages.length; i++) {
            allImages[i].setAttribute("id", "cardNumber"+i);
        }
 
    }
    console.log(data);
}

function setup() {
    //Code that adds stars to cards when clicked (just for demonstration purposes, can't really make the voting function work without databases and PHP.)

    //Code that favourites the card and allows it to be seen on the home screen. 
}


  