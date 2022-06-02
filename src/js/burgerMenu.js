const btnBurger = document.querySelector('.burger');
const mobMenu = document.querySelector('.navrr');

btnBurger.addEventListener('click', btnToggle);

function btnToggle() {
    btnBurger.classList.toggle("toggled");
    mobMenu.classList.toggle('show');
    
};
    

