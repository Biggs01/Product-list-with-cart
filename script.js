const dessertList = document.getElementById("desserts-list");
let cartItems = 0;
let cart = {};
let index = 0; // Object to store cart items by name

// function loadDesserts() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "data.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const desserts = JSON.parse(this.responseText);
//       let output = "";

//       desserts.forEach((dessert, index) => {
//         output += `
//           <div class="dessertCards" id="desserts-card-${index}">
//             <div class="desserts-image" id="desserts-card">
//               <picture>
//                 <source media="(max-width:650px)" srcset="${
//                   dessert.image.tablet
//                 }">
//                 <source media="(max-width:465px)" srcset="${
//                   dessert.image.mobile
//                 }">
//                 <img src="${dessert.image.desktop}" alt="${dessert.name}" />
//               </picture>
//               <button class="addtoCart" data-index="${index}">Add to Cart</button>
//               <div class="increaseReduce" id="cart-controls-${index}" style="display: none;">
//                 <button class="decrement" data-index="${index}">−</button>
//                 <span id="cart-count-${index}">0</span>
//                 <button class="increment" data-index="${index}">+</button>
//               </div>
//             </div>
//             <div>
//               <p class="category">${dessert.category}</p>
//               <p class="name">${dessert.name}</p>
//               <p class="price">$${dessert.price.toFixed(2)}</p>
//             </div>
//           </div>
//         `;
//       });

//       dessertList.innerHTML = output;

//       // Add event listener for "Add to Cart"
//       document.querySelectorAll(".addtoCart").forEach((button) => {
//         button.addEventListener("click", function () {
//           const index = this.getAttribute("data-index");
//           const dessert = desserts[index];

//           if (!cart[dessert.name]) {
//             cart[dessert.name] = 1;
//             cartItems++;
//             updateCartUI(index);

//             // Hide "Add to Cart" button and show quantity controls
//             this.style.display = "none";
//             document.getElementById(`cart-controls-${index}`).style.display =
//               "flex";
//           }
//         });
//       });

//       // Add event listeners for + and - buttons
//       document.addEventListener("click", function (e) {
//         if (e.target.classList.contains("increment")) {
//           const index = e.target.getAttribute("data-index");
//           const dessert = desserts[index];
//           cart[dessert.name]++;
//           cartItems++;
//           updateCartUI(index);
//         }

//         if (e.target.classList.contains("decrement")) {
//           const index = e.target.getAttribute("data-index");
//           const dessert = desserts[index];
//           if (cart[dessert.name] > 0) {
//             cart[dessert.name]--;
//             cartItems--;
//             updateCartUI(index);
//           }
//         }
//       });
//     }
//   };

//   xhr.send();
// }

// function updateCartUI(index) {
//   document.getElementById(
//     "card-header"
//   ).textContent = `Your Cart (${cartItems})`;

//   const controls = document.getElementById(`cart-controls-${index}`);
//   const countSpan = document.getElementById(`cart-count-${index}`);

//   if (controls) {
//     controls.style.display = "flex";
//     countSpan.textContent = Object.values(cart)[index]; // Update quantity
//   }
// }

loadDesserts();

function loadDesserts() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const desserts = JSON.parse(this.responseText);
      let output = "";

      desserts.forEach((dessert) => {
        output += `
          <div class="dessertCards" id="desserts-card">
            <div id="desserts-image">
              <picture>
              <source media="(max-width:650px)" srcset="${
                dessert.image.tablet
              }">
              <source media="(max-width:465px)" srcset="${
                dessert.image.mobile
              }">
              <img src="${dessert.image.desktop}" alt="dessert image" />
              </picture>
              <button class="addtoCart" id="addtoCartBtn"
              )}">Add to Cart</button>
              <div class="increaseReduce" id="cart-controls-${index}" style="display: none;">
                <button class="decrement" data-index="${index}">−</button>
                <span id="cart-count-${index}">0</span>
                <button class="increment" data-index="${index}">+</button>              </div>
            </div>
            <div>
              <p id="category">${dessert.category}</p>
              <p id="name">${dessert.name}</p>
              <p id="price">$${dessert.price.toFixed(2)}</p>
            </div>
          </div>
                `;
      });

      dessertList.innerHTML = output;
      // document.getElementById(
      //   "card-header"
      // ).textContent = `Your Cart (${cartItems})`;
      // document.addEventListener("click", (e) => {
      //   if (e.target && e.target.classList.contains("addtoCart")) {
      //     cartItems++;
      //     document.getElementById(
      //       "card-header"
      //     ).textContent = `Your Cart (${cartItems})`;
      //     let list = document.getElementById("desserts-image");
      //     list.removeChild(list.lastElementChild);

      //     let newContent = `<div class="increaseReduce">
      //               <div><img id="reduce" src="./assets/images/icon-decrement-quantity.svg" alt="decrease-cartItems"></div>
      //               <p id="cartItemCount">${cartItems}</p>
      //               <div><img id="increase" src="./assets/images/icon-increment-quantity.svg" alt="increase-cartItems"></div>
      //             </div>`;

      //     document.getElementById("desserts-image").innerHTML += newContent;
      //   }
      // });
    }
  };
  xhr.send();
}
