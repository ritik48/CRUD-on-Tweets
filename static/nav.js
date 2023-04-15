const mode = document.querySelector('.mode');
const square = document.querySelector('.square');
const links = document.querySelectorAll('.nav-link');


function changeTheme(to) {
    const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    const secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');

    // changing background theme
    const dark_gradient = getComputedStyle(document.documentElement).getPropertyValue('--primary-gradient-dark');
    const light_gradient = getComputedStyle(document.documentElement).getPropertyValue('--primary-gradient-light');

    if (to === 'dark') {
        document.documentElement.style.setProperty('--bg-gradient-tp', dark_gradient);
    } else {
        document.documentElement.style.setProperty('--bg-gradient-tp', light_gradient);
    }

    // changing text theme
    document.documentElement.style.setProperty('--primary-color', secondary);
    document.documentElement.style.setProperty('--secondary-color', primary);
    console.log("Theme change");

    // changing mode btn theme
    const dark_mode = getComputedStyle(document.documentElement).getPropertyValue('--mode-color-dark');
    const light_mode = getComputedStyle(document.documentElement).getPropertyValue('--mode-color-light');

    if (to === 'dark') {
        document.documentElement.style.setProperty('--mode-color', dark_mode);
    } else {
        document.documentElement.style.setProperty('--mode-color', light_mode);
    }

    // changing hover color
    const dark_hover = getComputedStyle(document.documentElement).getPropertyValue('--nav-link-hover-dark');
    const light_hover = getComputedStyle(document.documentElement).getPropertyValue('--nav-link-hover-light');

    if (to === 'dark') {
        document.querySelector('.selected').style.borderBottom = '2px solid white';
        document.documentElement.style.setProperty('--nav-link-hover', dark_hover);
    } else {
        document.querySelector('.selected').style.borderBottom = '2px solid black';
        document.documentElement.style.setProperty('--nav-link-hover', light_hover);
    }



}

mode.addEventListener('click', (e) => {
    e.stopPropagation();
    if (square.classList.contains('dark')) {
        changeTheme('light');
        square.classList.remove('dark');
    } else {
        changeTheme('dark');
        square.classList.add('dark');
    }
});

