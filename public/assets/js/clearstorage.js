window.onload=function() {
    const clearStorage = document.getElementById('clearScreen');
    clearStorage.addEventListener('click', async event => { 
        localStorage.clear();
        window.location.href = '../../index.html';
        console.log('pressed');
    });
}