window.onload=function() {
    const button1 = document.getElementById('background1');
    button1.addEventListener('click', async event => { 
        localStorage.clear();
        localStorage.setItem('background', 'aus_olympic_team');
        window.location.href = '../../choosepose.html';
        console.log('pressed');
    });
    const button2 = document.getElementById('background2');
    button2.addEventListener('click', async event => { 
        localStorage.clear();
        localStorage.setItem('background', 'cycling');
        window.location.href = '../../choosepose.html';
        console.log('pressed');
    });
    const button3 = document.getElementById('background3');
    button3.addEventListener('click', async event => { 
        localStorage.clear();
        localStorage.setItem('background', 'rings');
        window.location.href = '../../choosepose.html';
        console.log('pressed');
    });
    const button4 = document.getElementById('background4');
    button4.addEventListener('click', async event => { 
        localStorage.clear();
        localStorage.setItem('background', 'pool');
        window.location.href = '../../choosepose.html';
        console.log('pressed');
    });
    const button5 = document.getElementById('background5');
    button5.addEventListener('click', async event => { 
        localStorage.clear();
        localStorage.setItem('background', 'trampoline');
        window.location.href = '../../choosepose.html';
        console.log('pressed');
    });
    const button6 = document.getElementById('background6');
    button6.addEventListener('click', async event => { 
        localStorage.clear();
        localStorage.setItem('background', 'waterpolo');
        window.location.href = '../../choosepose.html';
        console.log('pressed');
    });
}
