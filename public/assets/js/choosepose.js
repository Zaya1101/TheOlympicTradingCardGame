window.onload=function() {
    const button1 = document.getElementById('pose1');
    button1.addEventListener('click', async event => { 
        localStorage.setItem('pose', 'no_pose');
        window.location.href = '../../takepicture.html';
        console.log('pressed');
    });
    const button2 = document.getElementById('pose2');
    button2.addEventListener('click', async event => { 
        localStorage.setItem('pose', 'archery');
        window.location.href = '../../takepicture.html';
        console.log('pressed');
    });
    const button3 = document.getElementById('pose3');
    button3.addEventListener('click', async event => { 
        localStorage.setItem('pose', 'athletics');
        window.location.href = '../../takepicture.html';
        console.log('pressed');
    });
    const button4 = document.getElementById('pose4');
    button4.addEventListener('click', async event => { 
        localStorage.setItem('pose', 'basketball');
        window.location.href = '../../takepicture.html';
        console.log('pressed');
    });
    const button5 = document.getElementById('pose5');
    button5.addEventListener('click', async event => { 
        localStorage.setItem('pose', 'fencing');
        window.location.href = '../../takepicture.html';
        console.log('pressed');
    });
    const button6 = document.getElementById('pose6');
    button6.addEventListener('click', async event => { 
        localStorage.setItem('pose', 'football');
        window.location.href = '../../takepicture.html';
        console.log('pressed');
    });
    const button7 = document.getElementById('pose7');
    button7.addEventListener('click', async event => { 
        localStorage.setItem('pose', 'taekwondo');
        window.location.href = '../../takepicture.html';
        console.log('pressed');
    });
    const button8 = document.getElementById('pose8');
    button8.addEventListener('click', async event => { 
        localStorage.setItem('pose', 'tennis');
        window.location.href = '../../takepicture.html';
        console.log('pressed');
    });
    const button9 = document.getElementById('pose9');
    button9.addEventListener('click', async event => { 
        localStorage.setItem('pose', 'weightlifting');
        window.location.href = '../../takepicture.html';
        console.log('pressed');
    });

}
