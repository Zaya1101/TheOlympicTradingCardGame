//JS for the Collection page that requests the trading card data from the server.
MicroModal.init();
getData();
async function getData() {
    const response = await fetch('/all-card-images');
    const data = await response.json();
    
    for (item of data) {
        const main = document.querySelector('.main_collection');

        if (item.imageType == "TradingCard") {

            const image = document.createElement('img');

            if(item.stars < 20 && item.stars > 10) {

                const root = document.querySelector('#legendary');
                

                image.style.cssText = 'display: inline-block; width: 155px; box-shadow: 0px 0px 4px 2px #FFDB51;';
    
                image.src = item.image64;

                root.append(image);
                main.append(root);

                const hideMessage = document.getElementById('noLegendaryCards');
                hideMessage.style.cssText = "display: none;";
            }

            if(item.stars < 10 && item.stars > 5) {

                const root = document.querySelector('#epic');
                const link = document.createElement('a');
                

                link.className = 'collectionCardContainer';

                image.style.cssText = 'display: inline-block; width: 155px; box-shadow: 0px 0px 4px 2px #9400D3;';
    
                image.src = item.image64;

                root.append(link);
                link.append(image);
                main.append(root);

                const hideMessage = document.getElementById('noEpicCards');
                hideMessage.style.cssText = "display: none;";
            } 

            if(item.stars < 5 && item.stars > 3) {
                const root = document.querySelector('#rare');
                

                image.style.cssText = 'display: inline-block; width: 155px; box-shadow: 0px 0px 4px 2px #4195fc;';
    
                image.src = item.image64;

                image.onclick = function(){openModal()};

                root.append(image);
                main.append(root);

                
                const hideMessage = document.getElementById('noRareCards');
                hideMessage.style.cssText = "display: none;";

            } 

            if(item.stars < 3 ) {  
                const root = document.querySelector('#common');

                image.style.cssText = 'display: inline-block; width: 155px; box-shadow: 0px 0px 4px 2px #808080;';

                image.src = item.image64;

                image.setAttribute("cardID", item._id);
                image.setAttribute("clicked", "no")

                image.onclick = function(){openModal()};

                root.append(image);
                main.append(root);

                const hideMessage = document.getElementById('noCommonCards');
                hideMessage.style.cssText = "display: none;";
                
            } 

            const modal = document.getElementById("myModal");
            const modalImg = document.getElementById("img01");
            const stars = document.getElementById("amount")
            const span = document.getElementsByClassName("close")[0];
            const modalDate = document.getElementById("date");
            const dateString = new Date(item.createdAt).toLocaleDateString();
            const favouriteIcon = document.getElementById("favouriteIcon");
            const starsIcon = document.getElementById("addStars");
            const modalImageID = image.getAttribute("cardID");

            image.onclick = function(){
                modal.style.display = "block";
                modalImg.src = image.src;
                modalDate.innerText = `Created on: ${dateString}`;
                stars.innerHTML = ` ${item.stars}`; //MAKE STARS RELATIVE TO TRADINGCARD SELECTED
                console.log(modalImageID);

                favouriteIcon.addEventListener('click', async event => {
                    if(item.favourite == true) {
                        item.favourite = false;
                        favouriteIcon.innerHTML = `<i class="far fa-heart"></i>`;
                        
                    } else if (item.favourite == false) {
                        item.favourite = true;
                        favouriteIcon.innerHTML = `<i class="fas fa-heart" style="color: red;"></i>`;
                        
                    }
                    const favouriteStatus = item.favourite;
                    const data = {modalImageID, favouriteStatus};
                    const options = {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    body: JSON.stringify(data),
                    };

                    console.log(modalImageID);

                    span.onclick = function() { 
                        modal.style.display = "none";
                        location.reload();
                    } 
                    return fetch('/api/setfavourite', options)
                });

                starsIcon.addEventListener('click', async event => {
                    var addStarsButton = item.stars;
                    addStarsButton++;
                    console.log(addStarsButton);

                    span.onclick = function() { 
                        modal.style.display = "none";
                        const starAmount = addStarsButton;
                        const data = {modalImageID, starAmount};
                        const options = {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        body: JSON.stringify(data),
                        };
                        setTimeout(location.reload.bind(location), 1000);
                        return fetch('/api/setstars', options)
                    } 
                });

                span.onclick = function() { 
                    modal.style.display = "none";
                } 
            }

            //IF STATEMENT CHECKING IF FUNCTION IS ACTIVE, THEN SET ATTRIBUTE "CLICKED" TO "YES". FOR CARDS WITH = "YES", RUN PUT FUNCTION 

            if(item.favourite == true) {
                favouriteIcon.innerHTML = `<i class="fas fa-heart" style="color: red;"></i>`;
            } else {
                favouriteIcon.innerHTML = `<i class="far fa-heart"></i>`;
            }

            //Fix this its not working. If it doesn't end up working, just make the favourite cards on the homepage randomised.

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


  