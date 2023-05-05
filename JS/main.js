const menuBars = document.querySelector('.menu');
const closeContainers =  document.querySelector('.closeContainer');
const mobileMenu = document.querySelector('.mobileMenu');
const menuEmail = document.querySelector('.navEmail');
const desktopMenu = document.querySelector('.desktopMenu');
const shoppingCartIcon = document.querySelector('.navShoppingCart');
const shoppingCart = document.querySelector('.shoppingCartContent');
const productDetail = document.querySelector('.mainContentDetails');
const closeProductDetail =  document.querySelector('.closeProductDetailContainer');
const cardContainer = document.querySelector('.cardsContainer');


menuBars.addEventListener('click', toggleMobileMenu);
closeContainers.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);
closeProductDetail.addEventListener('click', closeProductDetailAsaide);

// ↓ Este es un array vacio que va contener la lista de productos que se van a vender en la pg web, estos van a entrar al array por medio de un push de objetos. 
let productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Sofa',
    price: 199,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Random book',
    price: 2,
    image: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Laptop',
    price: 950,
    image: 'https://images.pexels.com/photos/5703527/pexels-photo-5703527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Lamp',
    price: 5,
    image: 'https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Table and chairs',
    price: 170,
    image: 'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Painting',
    price: 500,
    image: 'https://images.pexels.com/photos/8792983/pexels-photo-8792983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'GameBoy',
    price: 300,
    image: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Antique phone',
    price: 150,
    image: 'https://images.pexels.com/photos/163007/phone-old-year-built-1955-bakelite-163007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})

// ↓Funcion que hace que se abra y cierre el mobileMenu cart al carle click al icono de este y ademas cierra otros componentes que esten abiertos y asi evitar conflictos.
function toggleMobileMenu (){
    const isShoppingCartClose = shoppingCart.classList.contains('inactive');
    if (!isShoppingCartClose){
        shoppingCart.classList.add('inactive');
    }
    closeProductDetailAsaide();
    mobileMenu.classList.toggle('inactive');
}
// ↓Funcion que hace que se abra y cierre el desktopMenu cart al carle click al icono de este y ademas cierra otros componentes que esten abiertos y asi evitar conflictos.
function toggleDesktopMenu (){
    const isShoppingCartClose = shoppingCart.classList.contains('inactive');
    const isProductDetailAsaideClose = productDetail.classList.contains('inactive');
    if (!isShoppingCartClose){
        shoppingCart.classList.add('inactive');
    }
    if (!isProductDetailAsaideClose){
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
// ↓Funcion que hace que se abra y cierre el shopping cart al carle click al icono de este y ademas cierra otros componentes que esten abiertos y asi evitar conflictos.
function toggleShoppingCart (){
    // ↓ Esta varible es para preguntar si mobileMenu esta cerrado o inactivo.
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isProductDetailAsaideClose = productDetail.classList.contains('inactive');

    // ↓ Esta condicional pregunta si el mobileMenu esta abierto o activo y si es que esta abierto lo que pasara es que se cambiara a estar cerrado o inactivo.
    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailAsaideClose){
        productDetail.classList.add('inactive');
    }

    // ↓ Este lo que hace es que abre y cierra el shoppingCart (activa y descativa la clase inactive que lo que hace es darle un display: none a la etiqueta de HTML lo que hace que desaparezca cuendo esta inactivo.)
    shoppingCart.classList.toggle('inactive');
}
function openProductDetailAsaide(){
    shoppingCart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.remove('inactive');
}
function closeProductDetailAsaide(){
    productDetail.classList.add('inactive');
}
// ↓ Esta funcion se creo para manipular el DOM desde JS, evitando asi escribir en el HTML de forma manual cada uno de los elemntos que se encontraran a la venta.
function renderProducts(arreglo){
    // ↓ Este for nos dice que para cada elemento del arreglo que entra a la funcion se va a crear un codigo HTML desde JS que queda posicionado dentro de una etiqueta que ya existe en el index.html
    for (product of arreglo) {
        // ↓ En las siquientes dos lineas se expresa lo siquiente: 1.- Se crea una variable  cuyo argumento es la creacion de una etiqueta de HTML "div". 2.- A esa etiqueta creada  se le agrega una clase, en este caso la clase productCard.
        let productCards = document.createElement('div');
        productCards.classList.add('productCard');
        
            let productImage = document.createElement('img');
            // ↓ En lasiguiente linea se crea un atributo de la etiqueta img creada en la lina anterior.
            productImage.setAttribute('src', product.image);
            productImage.classList.add('productImg');
            productImage.addEventListener('click', openProductDetailAsaide);
    
            let productInformation = document.createElement('div');
            productInformation.classList.add('productInfo');
                let productInformationDiv = document.createElement('div');
                    let productInformationPrice = document.createElement('p');
                    // ↓ En la siguiente linea se crea el texto que va ir dentro de la etiqueta p creada en la linea anterior.
                    productInformationPrice.innerText = '$' + product.price;
                    let productInformationName = document.createElement('p');
                    productInformationName.innerText = product.name;

                // ↓ En esta linea de codigo se esta indicando que etiqueta es hija de que etiqueta, por ejemplo aqui productInformationDiv es la etiqueta padre de las etiquetas productInformationPrice y productInformationName
                productInformationDiv.append(productInformationPrice, productInformationName);
                
                let productInformationFigure= document.createElement('figure');
                    let imgCartIcon = document.createElement('img');
                    imgCartIcon.setAttribute('src', './img/icons/bt_add_to_cart.svg');
    
                productInformationFigure.appendChild(imgCartIcon);
    
            productInformation.append(productInformationDiv, productInformationFigure);
        
        productCards.append(productImage, productInformation);
    
        cardContainer.append(productCards);
    }
}

// ↓ Se esta ejecutando la funcion.
renderProducts(productList);