const baseURL = window.location.origin;

const mode = document.querySelector('.mode');
const square = document.querySelector('.square');
const links = document.querySelectorAll('.nav-link');

let darkmode = localStorage.getItem('darkmode');


const enableDarkMode = () => {
    document.querySelector('body').classList.add('dark-mode');

    localStorage.setItem('darkmode', 'enabled');
}

const disableDarkMode = () => {
    document.querySelector('body').classList.remove('dark-mode');

    localStorage.setItem('darkmode', null);
}


if(darkmode==='enabled') {
    square.style.left='20px';
    enableDarkMode();
}

mode.addEventListener('click', (e) => {
    e.stopPropagation();
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== 'enabled') {
        square.style.left='20px';
        enableDarkMode();
    }
    else {
        square.style.left='2px';
        disableDarkMode();
    }
});

links.forEach(link => {
    let current_page = baseURL + window.location.pathname;
    if(link.href===current_page) {
        link.classList.add('selected');
    }
    else {
        link.classList.remove('selected');
    }
    
})

