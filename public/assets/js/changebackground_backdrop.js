async function getData() {

    const response = await fetch('/all-backgrounds');
    const data = await response.json();
        
    setTimeout(getData, 5000);


    const backgroundImage = document.getElementById('backdrop');
    if(data[0].background === 'aus_olympic_team') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/aus_olympic_team.jpg");'
    }
    if(data[0].background === 'cycling') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/cycling.jpg");'
    }
    if(data[0].background === 'olympic_rings') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/olympic_rings.jpg");'
    }
    if(data[0].background === 'swimming_pool') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/pool.jpg");'
    }
    if(data[0].background === 'trampoline') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/trampoline.jpg");'
    }
    if(data[0].background === 'water_polo') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/water_polo.jpg");'
    }

    const backdropPose = document.getElementById('backdrop_pose');
    if(data[0].pose === 'no_pose') {
        backdropPose.src = "#"
    }
    if(data[0].pose === 'archery') {
        backdropPose.src = "assets/images/poses/archery.png"
    }
    if(data[0].pose === 'athletics') {
        backdropPose.src = "assets/images/poses/athletics.png"
    }
    if(data[0].pose === 'basketball') {
        backdropPose.src = "assets/images/poses/basketball.png"
    }
    if(data[0].pose === 'fencing') {
        backdropPose.src = "assets/images/poses/fencing.png"
    }
    if(data[0].pose === 'football') {
        backdropPose.src = "assets/images/poses/football.png"
    }
    if(data[0].pose === 'taekwondo') {
        backdropPose.src = "assets/images/poses/taekwondo.png"
    }
    if(data[0].pose === 'tennis') {
        backdropPose.src = "assets/images/poses/tennis.png"
    }
    if(data[0].pose === 'weightlifting') {
        backdropPose.src = "assets/images/poses/weightlifting.png"
    }

}
getData();