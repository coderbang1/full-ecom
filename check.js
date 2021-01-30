
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems)
            productContainer.innerHTML += `<div class="basketTotalContainer">
            <h4 class="basketTotalTitle"> Total</h4>
            <h4 class="basketTotal">$${cart},00</h4>
            
        </div>`
            
            
            
    };
    }

displayCart();
