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
    //https://stackoverflow.com/questions/42155317/override-global-css-with-pure-javascript/42155495

    //Card Cusomisation with draggable objects https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/

    //Button that saves and prints image
    const saveButton = document.getElementById('saveImage');
    saveButton.addEventListener('click', async event => {

        window.scrollTo(0, 0);
 
    // Convert the div to image (canvas)
    html2canvas(document.getElementById('cardContainer')).then(function (canvas) {
        const image64 = canvas.toDataURL("image/png");
        const imageType = "TradingCard";
        const favourite = false;
        const stars = 0;
        const rarity = "common";
        const data = {image64, imageType, favourite, stars, rarity};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        return fetch('/api', options)
      }); 
      
    setTimeout( function() { window.location.href = "picturesuccess.html" }, 10000 );
    });

    //Draggable objects
    //Need to find a way to append this to the div container so HTML2Canvas can snapshot it.
    //Make it work for multiple objects
    function drag_start(event) {
        var style = window.getComputedStyle(event.target, null);
        event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
    } 
    function drag_over(event) { 
        event.preventDefault(); 
        return false; 
    } 
    function drop(event) { 
        var offset = event.dataTransfer.getData("text/plain").split(',');
        var dm = document.getElementById('dragme');
        dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
        dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
        event.preventDefault();
        return false;
    } 
    var dm = document.getElementById('dragme'); 
    dm.addEventListener('dragstart',drag_start,false); 
    document.body.addEventListener('dragover',drag_over,false); 
    document.body.addEventListener('drop',drop,false); 

    

    //Customise theme buttons
    const themeButton1 = document.getElementById('blue');
    const themeButton2 = document.getElementById('darkgreen');
    const themeButton3 = document.getElementById('pink');
    const themeButton4 = document.getElementById('midnightblue');
    const themeButton5 = document.getElementById('lime');
    const themeButton6 = document.getElementById('red');
    const themeShape = document.getElementById('bottomShapeTheme');
    const cardBorder = document.getElementById('cardContainer');

    themeButton1.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape.svg"
        cardBorder.style.cssText = "border-image: linear-gradient(45deg,#0019FF, #3399FF, #0019FF, #3399FF) 1;"
    });

    themeButton2.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_green.svg"
        cardBorder.style.cssText = "border-image: linear-gradient(45deg,#138200, #30c200, #138200, #30c200) 1;"
    });

    themeButton3.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_pink.svg"
        cardBorder.style.cssText = "border-image: linear-gradient(45deg,#AF489B, #9A459A 65%) 1;"
    });

    themeButton4.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_midnight.svg"
        cardBorder.style.cssText = "border-image: linear-gradient(45deg,#0E163A, #384A99 77%) 1;"
    });

    themeButton5.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_citrus.svg"
        cardBorder.style.cssText = "border-image: linear-gradient(45deg,#FAE800, #7AFF00 65%) 1;"
    });

    themeButton6.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_red.svg"
        cardBorder.style.cssText = "border-image: linear-gradient(45deg,#D82924, #981B1D 55%) 1;"
    });

}
