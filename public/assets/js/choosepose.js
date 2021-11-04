getData();
async function getData() {
    const response = await fetch('/all-backgrounds');
    const data = await response.json();
    const item = data;

    const button1 = document.getElementById('pose1');
    button1.addEventListener('click', async event => { 
    item.pose = "no-pose"
        const poseType = item.pose;
        const data = {poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../takepicture.html';
        console.log(poseType);

        return fetch('/all-backgrounds/setpose', options);
    });
    const button2 = document.getElementById('pose2');
    button2.addEventListener('click', async event => { 
        item.pose = "archery"
        const poseType = item.pose;
        const data = {poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../takepicture.html';
        console.log(poseType);

        return fetch('/all-backgrounds/setpose', options);
    });
    const button3 = document.getElementById('pose3');
    button3.addEventListener('click', async event => { 
        item.pose = "athletics"
        const poseType = item.pose;
        const data = {poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../takepicture.html';
        console.log(poseType);

        return fetch('/all-backgrounds/setpose', options);
    });
    const button4 = document.getElementById('pose4');
    button4.addEventListener('click', async event => { 
        item.pose = "basketball"
        const poseType = item.pose;
        const data = {poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../takepicture.html';
        console.log(poseType);

        return fetch('/all-backgrounds/setpose', options);
    });
    const button5 = document.getElementById('pose5');
    button5.addEventListener('click', async event => { 
        item.pose = "fencing"
        const poseType = item.pose;
        const data = {poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../takepicture.html';
        console.log(poseType);

        return fetch('/all-backgrounds/setpose', options);
    });
    const button6 = document.getElementById('pose6');
    button6.addEventListener('click', async event => { 
        item.pose = "football"
        const poseType = item.pose;
        const data = {poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../takepicture.html';
        console.log(poseType);

        return fetch('/all-backgrounds/setpose', options);
    });
    const button7 = document.getElementById('pose7');
    button7.addEventListener('click', async event => { 
        item.pose = "taekwondo"
        const poseType = item.pose;
        const data = {poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../takepicture.html';
        console.log(poseType);

        return fetch('/all-backgrounds/setpose', options);
    });
    const button8 = document.getElementById('pose8');
    button8.addEventListener('click', async event => { 
        item.pose = "tennis"
        const poseType = item.pose;
        const data = {poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../takepicture.html';
        console.log(poseType);

        return fetch('/all-backgrounds/setpose', options);
    });
    const button9 = document.getElementById('pose9');
    button9.addEventListener('click', async event => { 
        item.pose = "weightlifting"
        const poseType = item.pose;
        const data = {poseType};
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        };
        
        window.location.href = '../../takepicture.html';
        console.log(poseType);

        return fetch('/all-backgrounds/setpose', options);
    });

}
