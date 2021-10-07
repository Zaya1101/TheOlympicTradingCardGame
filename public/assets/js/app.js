//JS for the camera function. Also saves it to the server database.
function setup() {

noCanvas();

  let constraints = {
    video: {
        minwidth: 375,
        minheight: 812,
       // facingMode: {
        // exact: "environment"
      //},
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
  });
}

function linkDelay(ev) {
  ev.preventDefault();                    // prevent default anchor behavior
  const goTo = this.getAttribute("href"); // store anchor href

  // do something while timeOut ticks ... 

  setTimeout(function(){
    window.location = goTo;
  }, 3000);                               // time in ms
}; 

document.querySelectorAll(".waitBeforeNavigate")
  .forEach(EL => EL.addEventListener("click", linkDelay));

