//JS for the Collection page that requests the trading card data from the server.
MicroModal.init();
getData();
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    
    for (item of data) {
        const main = document.querySelector('.main_collection');

        if (item.imageType == "TradingCard") {

            if(item.rarity == "legendary") {

                const root = document.querySelector('#legendary');
                const image = document.createElement('img');

                root.style.cssText = 'padding: 10px;';
                image.style.cssText = 'width: 155px';
    
                image.src = item.image64;

                root.append(image);
                main.append(root);

                const hideMessage = document.getElementById('noLegendaryCards');
                hideMessage.style.cssText = "display: none;";

                const modal = document.getElementById("myModal");
                const modalImg = document.getElementById("img01");
                const span = document.getElementsByClassName("close")[0];
                image.onclick = function(){
                    modal.style.display = "block";
                    modalImg.src = image.src;
                }
                span.onclick = function() { 
                    modal.style.display = "none";
                }
            }

            if(item.rarity == "epic") {

                const root = document.querySelector('#epic');
                const link = document.createElement('a');
                const image = document.createElement('img');

                link.className = 'collectionCardContainer';

                root.style.cssText = 'padding: 10px;';
                image.style.cssText = 'width: 155px';
    
                image.src = item.image64;

                

                root.append(link);
                link.append(image);
                main.append(root);

                const hideMessage = document.getElementById('noEpicCards');
                hideMessage.style.cssText = "display: none;";

                const modal = document.getElementById("myModal");
                const modalImg = document.getElementById("img01");
                const stars = document.getElementById("starAmount")
                const span = document.getElementsByClassName("close")[0];
                const modalDate = document.getElementById("date");
                const dateString = new Date(item.timestamp).toLocaleDateString();
                image.onclick = function(){
                    modal.style.display = "block";
                    modalImg.src = image.src;
                    modalDate.innerText = `Created on: ${dateString}`;
                    stars.innerHTML = `<i class="fas fa-star" style="padding-right: 5px; color: #FFCD00;"></i> Stars: ${item.stars}`
                }
                span.onclick = function() { 
                    modal.style.display = "none";
                }


            } 

            if(item.rarity == "rare") {
                const root = document.querySelector('#rare');
                const image = document.createElement('img');

                root.style.cssText = 'padding: 10px;';
                image.style.cssText = 'width: 155px';
    
                image.src = item.image64;

                image.onclick = function(){openModal()};

                root.append(image);
                main.append(root);

                
                const hideMessage = document.getElementById('noRareCards');
                hideMessage.style.cssText = "display: none;";

                
                const modal = document.getElementById("myModal");
                const modalImg = document.getElementById("img01");
                const span = document.getElementsByClassName("close")[0];
                image.onclick = function(){
                    modal.style.display = "block";
                    modalImg.src = image.src;
                }
                span.onclick = function() { 
                    modal.style.display = "none";
                }
            } 

            if(item.rarity == "common") {
                const root = document.querySelector('#common');
                const image = document.createElement('img');

                root.style.cssText = 'padding: 10px;';
                image.style.cssText = 'width: 155px';

                image.src = item.image64;

                image.onclick = function(){openModal()};

                root.append(image);
                main.append(root);

                const hideMessage = document.getElementById('noCommonCards');
                hideMessage.style.cssText = "display: none;";
                
                const modal = document.getElementById("myModal");
                const modalImg = document.getElementById("img01");
                const span = document.getElementsByClassName("close")[0];
                image.onclick = function(){
                    modal.style.display = "block";
                    modalImg.src = image.src;
                }
                span.onclick = function() { 
                    modal.style.display = "none";
                }
            } 
        }

        const allImages = document.querySelectorAll('img:not(.modal-image-content)'); 

        for(i = 0; i < allImages.length; i++) {
            allImages[i].setAttribute("id", "cardNumber"+i);
        }
 
    }
    console.log(data);
}

function setup() {
    //Micromodal code goes here
    //Also use div ids of the trading card image containers to display them in the modal.

    //Event listener on the trading card images that opens the modal with the image that was just clicked. Not sure how to do this, check https://www.w3schools.com/howto/howto_css_modal_images.asp
    
}


  