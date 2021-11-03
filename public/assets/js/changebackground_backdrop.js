window.onload=function() {
    window.addEventListener('storage', () => {
        location.reload();
    });
    const backgroundImage = document.getElementById('backdrop');
    if(localStorage.getItem('background') === 'aus_olympic_team') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/aus_olympic_team.jpg");'
    }
    if(localStorage.getItem('background') === 'cycling') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/cycling.jpg");'
    }
    if(localStorage.getItem('background') === 'rings') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/olympic_rings.jpg");'
    }
    if(localStorage.getItem('background') === 'pool') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/pool.jpg");'
    }
    if(localStorage.getItem('background') === 'trampoline') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/trampoline.jpg");'
    }
    if(localStorage.getItem('background') === 'waterpolo') {
        backgroundImage.style.cssText = 'background-image: url("assets/images/backgrounds/water_polo.jpg");'
    }

    const backdropPose = document.getElementById('backdrop_pose');
    if(localStorage.getItem('pose') === 'no_pose') {
        backdropPose.src = "#"
    }
    if(localStorage.getItem('pose') === 'archery') {
        backdropPose.src = "assets/images/poses/archery.png"
    }
    if(localStorage.getItem('pose') === 'athletics') {
        backdropPose.src = "assets/images/poses/athletics.png"
    }
    if(localStorage.getItem('pose') === 'basketball') {
        backdropPose.src = "assets/images/poses/basketball.png"
    }
    if(localStorage.getItem('pose') === 'fencing') {
        backdropPose.src = "assets/images/poses/fencing.png"
    }
    if(localStorage.getItem('pose') === 'football') {
        backdropPose.src = "assets/images/poses/football.png"
    }
    if(localStorage.getItem('pose') === 'taekwondo') {
        backdropPose.src = "assets/images/poses/taekwondo.png"
    }
    if(localStorage.getItem('pose') === 'tennis') {
        backdropPose.src = "assets/images/poses/tennis.png"
    }
    if(localStorage.getItem('pose') === 'weightlifting') {
        backdropPose.src = "assets/images/poses/weightlifting.png"
    }
}