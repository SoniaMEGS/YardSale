const menuEmail = document.querySelector('.navEmail');
const desktopMenu = document.querySelector('.desktopMenu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
}