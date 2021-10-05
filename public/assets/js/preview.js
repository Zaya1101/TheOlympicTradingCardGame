//JS for the Collection page that requests the trading card data from the server.

getData();


async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

        const root = document.querySelector('#cardContainer');
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

function saveCardImage() {
    window.scrollTo(0, 0);

    html2canvas(document.getElementById("cardContainer")).then(function (canvas) {
 
        // Create an AJAX object
        var ajax = new XMLHttpRequest();
 
        // Setting method, server file name, and asynchronous
        ajax.open("POST", "save-capture.php", true);
 
        // Setting headers for POST method
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 
        // Sending image data to server
        ajax.send("image=" + canvas.toDataURL("image/png", 0.9));
 
        // Receiving response from server
        // This function will be called multiple times
        ajax.onreadystatechange = function () {
 
            // Check when the requested is completed
            if (this.readyState == 4 && this.status == 200) {
 
                // Displaying response from server
                console.log(this.responseText);
            }
        };
    });
}