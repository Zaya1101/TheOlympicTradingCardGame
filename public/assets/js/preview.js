//JS for the Collection page that requests the trading card data from the server.

getData();

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

        //Could add an if statement here to only allow raw images to appear but it would be impossible
        //for the user to break the preview if they use the app naturally.

        const cardImage = document.querySelector('.imageContainer');
 
        var current_max = 0;
        var current_timestamp = 0;

        //Cycles through images in database and displays the most recent entry
        for (var i = 0; i < data.length; i++) {
            if (data[i].timestamp > current_timestamp) {
                current_timestamp = data[i].timestamp;
                current_max = i;
            } 
        }

        cardImage.src = data[current_max].image64;

        //root.append(image);
        //document.body.append(root);


    console.log(data);
}

function setup() {

    //Add theme functionality, attatch example below to different buttons
    
    //document.getElementById("p2").style.color="blue";


    //Button that saves and prints image
    const button = document.getElementById('saveImage');
    button.addEventListener('click', async event => {

        window.scrollTo(0, 0);
 
    // Convert the div to image (canvas)
    
    html2canvas(document.getElementById("cardContainer")).then(function (canvas) {
        const image64 = canvas.toDataURL("image/png");
        const imageType = "TradingCard";
        const data = {image64, imageType};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        return fetch('/api', options)
      });
    });
}