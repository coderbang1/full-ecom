
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems)
            productContainer.innerHTML += `<div class="container">
                                                
            <h2>Your Order</h2>
            <table class="table ">
            <thead >
            <tr>
        <th> <h4 class="basketTotalTitle" style="font-size:25px;color:green;"> Total</h4></th>
        <th><h4 class="basketTotal" style="color:red;">$${cart}.00</h4> </th>
        
      </tr>
           
      
            
        </div>`
        productContainer.innerHTML +=
       ` <div class="row-right ">
       <div class="col" style="color: rgb(212, 0, 81);">Payment methods</div>  
  
        <div class="col-sm-12-right"><i class="fa fa-cc-paypal" style="font-size:48px;color:rgb(8, 94, 0)"></i></div>
        <div class="col-sm-12-right"><i class="fa fa-cc-visa" style="font-size:48px;color:green"></i></div>
        <div class="col-sm-8-right"><i class="fa fa-cc-amex" style="font-size:48px;color:rgb(32, 128, 8)"></i></div>
      </div>
      
      
      
      `
            
    };
    }

displayCart();
