export class Show {
    constructor(offButton1, offButton2, offButton3,mainMenu, navMenu){
        mainMenu.style.display = 'flex';
    
        offButton1.style.display = 'none'
        offButton2.style.display = 'none'
        offButton3.style.display = 'none'
    
        navMenu.classList.toggle("active")
        navMenu.style.visibility = 'visible'
    }
}

export class Close {
    constructor(offButton1, offButton2, offButton3,mainMenu, navMenu){
        mainMenu.style.display = 'none'
    
        navMenu.style.visibility = 'hidden'
        navMenu.classList.remove("active")
    
        offButton1.style.display = 'flex'
        offButton2.style.display = 'flex'
        offButton3.style.display = 'flex' 
    }

}





