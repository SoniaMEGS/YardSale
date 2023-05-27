const menuBars = document.querySelector('.menu');
const closeContainers =  document.querySelector('.closeContainer');
const mobileMenu = document.querySelector('.mobileMenu');
const menuEmail = document.querySelector('.navEmail');
const desktopMenu = document.querySelector('.desktopMenu');
const shoppingCartIcon = document.querySelector('.navShoppingCart');
const shoppingCart = document.querySelector('.shoppingCartContent');
const shoppingCartCard = document.querySelector('.mainContainer-shoppingCart')
const productDetail = document.querySelector('.mainContentDetails');
const closeProductDetail =  document.querySelector('.closeProductDetailContainer');
const cardContainer = document.querySelector('.cardsContainer');


menuBars.addEventListener('click', toggleMobileMenu);
closeContainers.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);
closeProductDetail.addEventListener('click', closeProductDetailAside);

// ↓ Este es un array vacio que va contener la lista de productos que se van a vender en la pg web, estos van a entrar al array por medio de un push de objetos. 
let productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:'A great bike, easy to assemble and fun to ride!, A play on speed and style, the Urban Track takes the street head-on with no regrets. With its performance inspired aluminium frame and fork paired with comfortable riser handlebars, you can effortlessly navigate whatever life throws at you while looking your best. We love how it can fit any occasion.',
})
productList.push({
    name: 'Sofa',
    price: 199,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:'Create a lounge-worthy living room with this modern Chesterfield sofa. Rich brown leather upholstery, along with curved back and arms, invite you to curl up to read a good book or take a catnap, engineered wood frame and 100% leather upholstery for reliable strength and maximum style, restyled modern aesthetics with classic touches.',
})
productList.push({
    name: 'Random book',
    price: 2,
    image: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:'You can get a novel from any of these categories: romance, horror, suspense, fiction, adventure, fairy tales, dystopian.',
})
productList.push({
    name: 'Laptop',
    price: 950,
    image: 'https://images.pexels.com/photos/5703527/pexels-photo-5703527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:'Substantial high-bandwidth RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. Save files fast and store more data. With massive amounts of storage and advanced communication power, PCI-e SSDs are great for major gaming applications, multiple servers, daily backups, and more. AMD Athlon Silver 3050U (2.3 GHz, up to 3.2 GHz). This laptop is powered by AMD which gives good performance with efficiency. It can also do simple gaming thanks to its integrated AMD Radeon graphics.Integrated graphics chipset with shared video memory provides solid image quality for Internet use, movies, basic photo editing and casual gaming. View all your photos, movies, and games in crisp HD (1366 x 768) resolution on a narrow-edge. Energy-efficient LED backlight.',
})
productList.push({
    name: 'Lamp',
    price: 5,
    image: 'https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:'Light up a large area and move its position with the flexible spring-balanced adjusted arm that can extend up to 18" and the rotatable base and shade, the lamp stands firmly thanks to the weighted base and the swing arm and lamp shade are made from solid metal with a black finish, making them durable and exquisite to look at. The power plug is UL-listed, making it safe to use, its slim shape and 51” power cable means you can place it anywhere without taking up too much space and the easy to use on/off rocker switch ensures day-to-day use',
})
productList.push({
    name: 'Table and chairs',
    price: 170,
    image: 'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:'Industrial Dining Table Set for 2：This bar table and chairs with prime quality rustic brown finish, it is a wonderful addition to your kitchen, game room, or living room. The black iron frame not only forms an appealing contrast to the wood tone, but also serves as a practical footrest.',
})
productList.push({
    name: 'Painting',
    price: 500,
    image: 'https://images.pexels.com/photos/8792983/pexels-photo-8792983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:'Thick natural canvas, Eco-pigment. High definition giclee modern canvas printing artwork which has strong sense of texture and full of artistic touch. It is a good idear for decorating your bedroom, living room, kitchen, dining room, home office, entryway, meditation room, teen girl bedroom, hallway, dorm room, spa, and so on.',
})
productList.push({
    name: 'GameBoy',
    price: 300,
    image: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:'The product is refurbished, fully functional, and in excellent condition.',
})
productList.push({
    name: 'Antique phone',
    price: 150,
    image: 'https://images.pexels.com/photos/163007/phone-old-year-built-1955-bakelite-163007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:'Retro Rotary Dial Phone for Landline: This landline home phone is metal alloy rotary dial and ABS material body which are both retro and luxurious. Not only looks retro, you can also play more retro. This rotary dial way of calling takes you back and feeling to the old times.',
})

// ↓Funcion que hace que se abra y cierre el mobileMenu cart al carle click al icono de este y ademas cierra otros componentes que esten abiertos y asi evitar conflictos.
function toggleMobileMenu (){
    const isShoppingCartClose = shoppingCart.classList.contains('inactive');
    if (!isShoppingCartClose){
        shoppingCart.classList.add('inactive');
    }
    closeProductDetailAside();
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
function openProductDetailAside(){
    shoppingCart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetail.classList.add('inactive');
}

// Función para poner los datos del producto seleccionado en el aside de detalles.
const detailsProduct = product => {
    console.log(product)
    openProductDetailAside();

    const detailImage = document.querySelector('.productImgDetails');
    const detailPrice = document.querySelector('.productInformation p:nth-child(1)');
    const detailName = document.querySelector('.productInformation p:nth-child(2)');
    const detailDescription = document.querySelector('.productInformation p:nth-child(3)');

    detailImage.setAttribute('src', product.image);
    detailPrice.innerText = `$${product.price}`;
    detailName.innerText = product.name;
    detailDescription.innerText = product.description;
};

function addToShoppingCart(product){
    console.log(product)

    let shoppingCartCards = document.createElement('article');
    
        let shoppingCartFigure = document.createElement('figure');

            let shoppingCartimage = document.createElement('img');
            shoppingCartimage.setAttribute('src', product.image);
            shoppingCartimage.setAttribute('alt', product.name);
            let shoppingCartfigcaption = document.createElement('figcaption');
            shoppingCartfigcaption.innerText = product.name;
        
        shoppingCartFigure.append(shoppingCartimage, shoppingCartfigcaption)

        let shoppingCartDivContainer = document.createElement('div');

            let shoppingCartProductP = document.createElement('p');
                let shoppingCartProductPrice = document.createElement('span');
                shoppingCartProductPrice.innerText = '$' + product.price;
            shoppingCartProductP.append(shoppingCartProductPrice);

            let shoppingCartCloseFigure = document.createElement('figure');
                let shoppingCartCloseImage = document.createElement('img');
                shoppingCartCloseImage.setAttribute('src', './img/icons/icon_close.png');
                shoppingCartCloseImage.classList.add('deleteImg');
            shoppingCartCloseFigure.append(shoppingCartCloseImage);

        shoppingCartDivContainer.append(shoppingCartProductP, shoppingCartCloseFigure);       
    shoppingCartCards.append(shoppingCartFigure, shoppingCartDivContainer);
shoppingCartCard.append(shoppingCartCards);
}

// ↓ Esta funcion se creo para manipular el DOM desde JS, evitando asi escribir en el HTML de forma manual cada uno de los elemntos que se encontraran a la venta.
function renderProducts(arreglo){
    // ↓ Este for nos dice que para cada elemento del arreglo que entra a la funcion se va a crear un codigo HTML desde JS que queda posicionado dentro de una etiqueta que ya existe en el index.html
    for (const [index, product] of arreglo.entries()) {
        // ↓ En las siquientes dos lineas se expresa lo siquiente: 1.- Se crea una variable  cuyo argumento es la creacion de una etiqueta de HTML "div". 2.- A esa etiqueta creada  se le agrega una clase, en este caso la clase productCard.
        let productCards = document.createElement('div');
        productCards.classList.add('productCard');
        
            let productImage = document.createElement('img');
            // ↓ En lasiguiente linea se crea un atributo de la etiqueta img creada en la lina anterior.
            productImage.setAttribute('src', product.image);
            productImage.classList.add('productImg');
            productImage.addEventListener('click', function () {
                detailsProduct(product);
            });
    
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
                    imgCartIcon.addEventListener('click', () => {
                        addToShoppingCart(product);
                    });
                productInformationFigure.appendChild(imgCartIcon);
    
            productInformation.append(productInformationDiv, productInformationFigure);
        
        productCards.append(productImage, productInformation);
    
        cardContainer.append(productCards);
    }
}

// ↓ Se esta ejecutando la funcion.
renderProducts(productList);