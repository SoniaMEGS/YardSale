const menuBars = document.querySelector('.menu');
const closeContainers =  document.querySelector('.closeContainer');
const mobileMenu = document.querySelector('.mobileMenu');
const menuEmail = document.querySelector('.navEmail');
const desktopMenu = document.querySelector('.desktopMenu');
const shoppingCartIcon = document.querySelector('.navShoppingCart')
const shoppingCart = document.querySelector('.shoppingCartContent')

menuBars.addEventListener('click', toggleMobileMenu);
closeContainers.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleMobileMenu (){
    const isShoppingCartClose = shoppingCart.classList.contains('inactive');
    if (!isShoppingCartClose){
        shoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleDesktopMenu (){
    const isShoppingCartClose = shoppingCart.classList.contains('inactive');
    if (!isShoppingCartClose){
        shoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleShoppingCart (){
    // ↓ Esta varible es para preguntar si mobileMenu esta cerrado o inactivo.
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    // ↓ Esta condicional pregunta si el mobileMenu esta abierto o activo y si es que esta abierto lo que pasara es que se cambiara a estar cerrado o inactivo.
    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    // ↓ Este lo que hace es que abre y cierra el shoppingCart (activa y descativa la clase inactive que lo que hace es darle un display: none a la etiqueta de HTML lo que hace que desaparezca cuendo esta inactivo.)
    shoppingCart.classList.toggle('inactive');
}