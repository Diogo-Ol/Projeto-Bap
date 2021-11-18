function Show() {
        mainMenu.style.display = 'flex';
    
        offButton1.style.display = 'none'
        offButton2.style.display = 'none'
        offButton3.style.display = 'none'
    
        navMenu.classList.toggle("active")
        navMenu.style.visibility = 'visible'
    
}

function Close() {
        mainMenu.style.display = 'none'
    
        navMenu.style.visibility = 'hidden'
        navMenu.classList.remove("active")
    
        offButton1.style.display = 'flex'
        offButton2.style.display = 'flex'
        offButton3.style.display = 'flex' 

}

const mainMenu = document.querySelector('[data-conteudo]')

const offButton1 = document.querySelector('[data-mudar-icone1]')
const offButton2 = document.querySelector('[data-mudar-icone2]')
const offButton3 = document.querySelector('[data-mudar-icone3]')

const navMenu = document.querySelector('[data-menu-animacao]')

const closeMenu = document.getElementById('closeMenu')
closeMenu.addEventListener('click', Close)





