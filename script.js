const dessertList = document.getElementById("desserts-list");
// window.onload(loadDesserts)/\;

function loadDesserts() {
//   console.log("getting here");
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.json', true);
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
              <img src="${dessert.image.desktop}" alt="dessert image" />
              <button class="addtoCart">Add to Cart</button>
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
