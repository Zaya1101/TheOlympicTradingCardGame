//JS for the camera function. Also saves it to the server database.
function setup() {

  let constraints = {
    video: {
        width: 375,
        height: 812,
        facingMode: {
          exact: "environment"
      },
    },
  audio: false
  };

  let sketch = function(p) {
    p.setup = function(){
      const video = p.createCapture(constraints, function(stream) {
        console.log(stream);
      });
    }
  };
  new p5(sketch, window.document.getElementById('container'));

  let lat, lon;
  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const data = { lat, lon, image64};
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