getData();
async function getData() {
    const response = await fetch('/all-backgrounds');
    const data = await response.json();
    const item = data;

    const button1 = document.getElementById('background1');
    button1.addEventListener('click', async event => { 
        item.background = "aus_olympic_team"
        const backgroundImage = item.background;
        const data = {backgroundImage};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../choosepose.html';
        console.log(backgroundImage);

        return fetch('/all-backgrounds/setbackground', options)
    });
    const button2 = document.getElementById('background2');
    button2.addEventListener('click', async event => { 
        item.background = "cycling"
        const backgroundImage = item.background;
        const data = {backgroundImage};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../choosepose.html';
        console.log(backgroundImage);

        return fetch('/all-backgrounds/setbackground', options)
    });
    const button3 = document.getElementById('background3');
    button3.addEventListener('click', async event => { 
        item.background = "olympic_rings"
        const backgroundImage = item.background;
        const data = {backgroundImage};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../choosepose.html';
        console.log(backgroundImage);

        return fetch('/all-backgrounds/setbackground', options)
    });
    const button4 = document.getElementById('background4');
    button4.addEventListener('click', async event => { 
        item.background = "swimming_pool"
        const backgroundImage = item.background;
        const data = {backgroundImage};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../choosepose.html';
        console.log(backgroundImage);

        return fetch('/all-backgrounds/setbackground', options)
    });
    const button5 = document.getElementById('background5');
    button5.addEventListener('click', async event => { 
        item.background = "trampoline"
        const backgroundImage = item.background;
        const data = {backgroundImage};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../choosepose.html';
        console.log(backgroundImage);

        return fetch('/all-backgrounds/setbackground', options)
    });
    const button6 = document.getElementById('background6');
    button6.addEventListener('click', async event => { 
        item.background = "water_polo"
        const backgroundImage = item.background;
        const data = {backgroundImage};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../choosepose.html';
        console.log(backgroundImage);

        return fetch('/all-backgrounds/setbackground', options)
    });
}


function setup() {

    
}
