getData();
async function getData() {
    const response = await fetch('/all-backgrounds');
    const data = await response.json();
    const item = data;

    const button1 = document.getElementById('clearScreen');
    button1.addEventListener('click', async event => { 
    item.pose = "no-pose";
    item.background = "";
        const poseType = item.pose;
        const backgroundImage = item.background;
        const data = {backgroundImage, poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../index.html';

        return fetch('/all-backgrounds/clear', options);
    });
}
