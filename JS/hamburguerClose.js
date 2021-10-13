function CloseM(){
    mainMenuClose.style.top = '-100%';
}

const mainMenuClose = document.getElementById('content__ham')

const closeMenu  = document.querySelector('[data-menu-animacao]')
closeMenu = addEventListener('click', CloseM)