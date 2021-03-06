getData();

async function getData() {
    const response = await fetch('/all-raw-images');
    const data = await response.json();

        //Could add an if statement here to only allow raw images to appear but it would be impossible
        //for the user to break the preview if they use the app naturally.

        const cardImage = document.querySelector('.imageContainer');
 
        var current_max = 0;
        var current_timestamp = 0;

        //Cycles through images in database and displays the most recent entry
        for (var i = 0; i < data.length; i++) {
        var timestamp = Date.parse(data[i].createdAt);
            if (timestamp > current_timestamp) {
                console.log("working");
                current_timestamp = Date.parse(data[i].createdAt);
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
      
    setTimeout( function() { window.location.href = "picturesuccess.html" }, 2000 );
    });

    //Draggable objects
    //Need to find a way to append this to the div container so HTML2Canvas can snapshot it.
    //Make it work for multiple objects


    

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
        cardBorder.style.cssText = "border: 4px solid #3399FF;"
    });

    themeButton2.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_green.svg"
        cardBorder.style.cssText = "border: 4px solid #138200;"
    });

    themeButton3.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_pink.svg"
        cardBorder.style.cssText = "border: 4px solid #AF489B;"
    });

    themeButton4.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_midnight.svg"
        cardBorder.style.cssText = "border: 4px solid #0E163A;"
    });

    themeButton5.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_citrus.svg"
        cardBorder.style.cssText = "border: 4px solid #FAE800;"
    });

    themeButton6.addEventListener('click', async event => {
        themeShape.src = "assets/images/bottomShape_red.svg"
        cardBorder.style.cssText = "border: 4px solid #D82924;"
    });

    //Fix it to one element then fake the rest for design reasons
    function drag_start(event) {
        var style = window.getComputedStyle(event.target, null);
        event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'));
    }
    
    function drag_over(event) {
        event.preventDefault();
        return false;
    }
    
    function drop(event) {
        var offset = event.dataTransfer.getData("text/plain").split(',');
        var dm = document.getElementsByClassName('dragme');
        var dropContainer = document.getElementById('cardContainer');
        dm[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
        dm[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
        
        //Checks if object has already been dragged into container
        if (dropContainer.contains(dm[parseInt(offset[2])])) {       
            console.log('already in container')
        } else {
            dropContainer.appendChild(dm[parseInt(offset[2])]); 
        }

        event.preventDefault();
        return false;
    }

    var dm = document.getElementsByClassName('dragme');
    for (var i = 0; i < dm.length; i++) {
        dm[i].addEventListener('dragstart', drag_start, false);
        document.body.addEventListener('dragover', drag_over, false);
        document.body.addEventListener('drop', drop, false);
      }
}