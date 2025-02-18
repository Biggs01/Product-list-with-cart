const dessertList = document.getElementById("desserts-list");
// window.onload(loadDesserts)/\;

function loadDesserts() {
  //   console.log("getting here");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.json", true);
  xhr.onload = function () {
    // console.log(this.status);
    if (this.status === 200) {
      const desserts = JSON.parse(this.responseText);
      let output = "";

      desserts.forEach((dessert) => {
        // console.log("paasing through");
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
              <button class="addtoCart" id="addtoCartBtn">Add to Cart</button>
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
    }
  };
  xhr.send();
}

loadDesserts();
var cartItems = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("card-header").textContent = `Your Cart (${cartItems})`;
  document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("addtoCart")) {
      cartItems++;
      document.getElementById("card-header").textContent = `Your Cart (${cartItems})`;
      console.log(cartItems);
    }
  });
});
