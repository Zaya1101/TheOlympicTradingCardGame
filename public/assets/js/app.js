//JS for the camera function. Also saves it to the server database.
function setup() {

noCanvas();

  let constraints = {
    video: {
        minwidth: 375,
        minheight: 812,
        aspectRatio: 16/9,
       facingMode: {
        exact: "environment"
      },
    },
  audio: false
  };

  const video = createCapture(constraints, function(stream) {
    console.log(stream);
  });



  video.parent('cameraContainer');

  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    video.loadPixels();

    const image64 = video.canvas.toDataURL();
    const imageType = "RawImage";
    const data = {image64, imageType};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/api', options); 
    const json = await response.json();
    console.log(json);

    setTimeout( function() { window.location.href = "previewcard.html" }, 1000 );
  });
}

