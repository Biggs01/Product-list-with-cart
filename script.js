const dessertList = document.getElementById("desserts-list");
let cartItems = 0;
let cart = [];
let index = 0;
let generatedIndex = [];
let generatedCartUI = `<ul>
            <li class="cartItem">
              <div>
                <p class="dessertName">Classic Tiramisu</p>
                <p class="qtyPrice">
                  1x &nbsp &nbsp<span class="unitPrice">@ $5.50 &nbsp</span>
                  <span class="accPrice">$5.50</span>
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#CAAFA7"
                  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                />
              </svg>
            </li>
            <li class="cartItem">
              <div>
                <p class="dessertName">Classic Tiramisu</p>
                <p class="qtyPrice">
                  1x &nbsp &nbsp<span class="unitPrice">@ $5.50 &nbsp</span>
                  <span class="accPrice">$5.50</span>
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#CAAFA7"
                  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                />
              </svg>
            </li>
            <li class="cartItem">
              <div>
                <p class="dessertName">Classic Tiramisu</p>
                <p class="qtyPrice">
                  1x &nbsp &nbsp<span class="unitPrice">@ $5.50 &nbsp</span>
                  <span class="accPrice">$5.50</span>
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#CAAFA7"
                  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                />
              </svg>
            </li>
          </ul>
          <div class="orderTotal" id="order-total">
            <p>Order Total</p>
            <span class="total">$46.50</span>
          </div>
          <div class="carbonNeutralContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                fill="#1EA575"
                d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
              />
              <path
                fill="#1EA575"
                d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
              />
            </svg>
            <p>This is a <span>carbon-neutral</span> delivery</p>
          </div>
          <button class="confirmOrder" id="confirm-order-btn">
            Confirm Order
          </button>
        </div>`;

class UI {
  loadDesserts() {}
  addCartItem() {}
  removeCartItem() {}
  newOrder() {}
}

function loadDesserts() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const desserts = JSON.parse(this.responseText);
      let output = "";

      desserts.forEach((dessert, index) => {
        output += `
          <div class="dessertCards" id="desserts-card">
            <div class="dessertsImage" id="desserts-image-${index}">
              <picture>
              <source media="(max-width:650px)" srcset="${
                dessert.image.tablet
              }">
              <source media="(max-width:465px)" srcset="${
                dessert.image.mobile
              }">
              <img src="${dessert.image.desktop}" alt="dessert image" />
              </picture>
              <button class="addtoCart" id="addtoCartBtn-${index}"
              )}">Add to Cart</button>
              </div>
            <div>
              <p id="category">${dessert.category}</p>
              <p id="name">${dessert.name}</p>
              <p id="price">$${dessert.price.toFixed(2)}</p>
            </div>
          </div>
                `;
        generatedIndex.push(index);
        let inCart = {
          name: dessert.name,
          unitPrice: dessert.price.toFixed(2),
          qtyInCart: 0,
          id: index,
          inCart: false,
        };
        cart.push(inCart);
      });

      dessertList.innerHTML = output;
      console.log(cart);
      //Add event listener for "Add to Cart"
      document.getElementById(
        "card-header"
      ).textContent = `Your Cart (${cartItems})`;

      cart.forEach((addedToCart) => {
        document
          .getElementById(`addtoCartBtn-${addedToCart.id}`)
          .addEventListener("click", () => {
            cartItems++;
            addedToCart.qtyInCart++;
            document.getElementById(
              "card-header"
            ).textContent = `Your Cart (${cartItems})`;
            document.getElementById(
              `addtoCartBtn-${addedToCart.id}`
            ).style.display = "none";
            let newContent = `<div class="increaseReduce" id="cart-controls-${addedToCart.id}">
                  <button class="decrement" id="decrementBtn" data-index="${addedToCart.id}">−</button>
                  <span id="cart-count-${index}">${addedToCart.qtyInCart}</span>
                  <button class="increment" id="increaseBtn" data-index="${addedToCart.id}">+</button>
              </div>
            `;
            document.getElementById(
              `desserts-image-${addedToCart.id}`
            ).innerHTML += newContent;
            // loadCart();
            if (document.getElementById("cartList")) {
              // console.log("not found 1");
              addToCartList(addedToCart);
              document
                .getElementById("decrementBtn")
                .addEventListener("click", () => {
                  if (cartItems >= 1) {
                    cartItems = cartItems - 1;
                    addedToCart.qtyInCart--;
                    document.getElementById(
                      "card-header"
                    ).textContent = `Your Cart (${cartItems})`;
                  }
                });
              document
                .getElementById("increaseBtn")
                .addEventListener("click", () => {
                  cartItems = cartItems + 1;
                  addedToCart.qtyInCart++;
                  addToCartList(addedToCart);
                  document.getElementById(
                    "card-header"
                  ).textContent = `Your Cart (${cartItems})`;
                  document.getElementById(`cart-count-${index}`).textContent =
                    cartItems;
                });
            } else {
              loadFilledCart();
              addToCartList(addedToCart);
              console.log("not found");
              document
                .getElementById("increaseBtn")
                .addEventListener("click", () => {
                  cartItems = cartItems + 1;
                  addedToCart.qtyInCart++;
                  addToCartList(addedToCart);
                  document.getElementById(
                    "card-header"
                  ).textContent = `Your Cart (${cartItems})`;
                  document.getElementById(`cart-count-${index}`).textContent =
                    addedToCart.qtyInCart;
                });
            }
          });
      });
    }
  };
  xhr.send();
}

loadDesserts();

function addToCartList(addedToCart) {
  let cartList = `
  <li class="cartItem">
    <div>
      <p class="dessertName">${addedToCart.name}</p>
      <p class="qtyPrice">${addedToCart.qtyInCart}x &nbsp &nbsp<span class="unitPrice">@ $${addedToCart.unitPrice} &nbsp</span>
        <span class="accPrice">$5.50</span>
      </p>
    </div>
    <svg id="cancelBtn" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
      <path fill="#CAAFA7"
        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
    </svg>
  </li>
  `;
  document.getElementById("cartList").innerHTML += cartList;
}

function loadEmptyCart() {
  const emptyCart = `
      <div class="emptyCart">
          <img src="../assets/images/illustration-empty-cart.svg"" alt="">
         <p>Your added items will appear here</p>
        </div>
    `;
  document.getElementById("cartDisplayItem").innerHTML = emptyCart;
}
loadEmptyCart();

function loadFilledCart() {
  const addedCart = `
      <ul id="cartList">
            
          </ul>
          <div class="orderTotal" id="order-total">
            <p>Order Total</p>
            <span class="total">$46.50</span>
          </div>
          <div class="carbonNeutralContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
              <path fill="#1EA575"
                d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z" />
              <path fill="#1EA575"
                d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z" />
            </svg>
            <p>This is a <span>carbon-neutral</span> delivery</p>
          </div>
          <button class="confirmOrder" id="confirm-order-btn">
            Confirm Order
          </button>
    `;

  document.getElementById("cartDisplayItem").innerHTML = addedCart;
}
