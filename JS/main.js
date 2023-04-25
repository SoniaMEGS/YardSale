const menuBars = document.querySelector('.menu');
const closeContainers =  document.querySelector('.closeContainer');
const mobileMenu = document.querySelector('.mobileMenu');
const menuEmail = document.querySelector('.navEmail');
const desktopMenu = document.querySelector('.desktopMenu');

menuBars.addEventListener('click', toggleMobileMenu);
closeContainers.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive');
}
function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
}