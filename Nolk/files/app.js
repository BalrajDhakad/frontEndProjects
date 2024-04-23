let menuOpen = document.querySelector('.menuOpen a');
let menuClose = document.querySelector('.menuClose a');
let backgroundSquare = document.querySelector('.menuBackgroundSquare');
let menuLinks = document.querySelector('.menuLinks a')

menuOpen.addEventListener('click' , () => {
    menuLinks.style.color = 'red' ;
    console.log('thso')
})
