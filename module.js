export function initialize(cart, counter) {
  if (localStorage.length>2) {
    window.addEventListener("load", function () {
      let fetchedItem = JSON.parse(localStorage.getItem("itemsId"));
      let fetchedcounter = JSON.parse(localStorage.getItem("itemsCounter"));
      for (let i = 0; i < fetchedItem.length; i++) {
        cart.push(fetchedItem[i]);
      }
      for (let i = 0; i < fetchedcounter.length; i++) {
        counter[i] = fetchedcounter[i];
      }
    });
  }
}
export function addNewPro(id, product, counter, cart) {
  let allPro = document.getElementById("cart-container");
  let newPro = document.createElement("div");
  newPro.setAttribute("class", `Ptr${id} product`);
  newPro.innerHTML = newProinnerText(product, id, counter);
  let rmButton = document.createElement("a");
  rmButton.setAttribute("class", `Ptr${id}`);
  console.log(id);
  rmButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  rmButton.addEventListener("click", function () {
    let thisClass = this.classList[0];
    let divDel = document.getElementsByClassName(this.classList)[0];
    divDel.remove();
    let afterDel = cart.filter(function (pro) {
      console.log(`pro=${pro} ,class=${thisClass.slice(3)}`);
      return pro != `add${thisClass.slice(3)}`;
    });
    while (cart.length != 0) cart.pop();
    let i = 0;
    while (i != afterDel.length) {
      cart.push(afterDel[i]);
      i++;
    }
    localStorage.setItem("itemsId", JSON.stringify(cart));
    let totalprice = document.getElementById("totalprice");
    totalprice.innerText =
      +totalprice.innerText - +counter[+thisClass.slice(3)] * +product.price;
    counter[+thisClass.slice(3)] = 0;
    localStorage.setItem("itemsCounter", JSON.stringify(counter));
  });
  newPro.appendChild(rmButton);
  allPro.appendChild(newPro);

  let totalprice = document.getElementById("totalprice");
  totalprice.innerText = +totalprice.innerText + counter[id] * product.price;
  let addcounter = document.getElementsByClassName(`Ptr${id}`)[0].children[2]
    .children[0];
  addcounter.addEventListener("click", function () {
    let span = document.getElementsByClassName(`Ptr${id}`)[0].children[2]
      .children[1];
    span.innerText = +span.innerText + 1;
    counter[+id] = +span.innerText;
    totalprice.innerText = +totalprice.innerText + product.price;
    localStorage.setItem("itemsCounter", JSON.stringify(counter));
  });
  let minuscounter = document.getElementsByClassName(`Ptr${id}`)[0].children[2]
    .children[2];
  minuscounter.addEventListener("click", function () {
    let span = document.getElementsByClassName(`Ptr${id}`)[0].children[2]
      .children[1];
    if (span.innerText != 1) {
      span.innerText = +span.innerText - 1;
      counter[+id] = +span.innerText;
      totalprice.innerText = +totalprice.innerText - product.price;
      localStorage.setItem("itemsCounter", JSON.stringify(counter));
    }
  });
}

function newProinnerText(product, id, counter) {
  let inner = `<img class ="propic" src="${product.images[0]}">
      <div class ="info">
      <h3>${product.title}</h3>
          <p class="product-description">${product.description}</p>
          <div class="rate">
          <i class="filled fas fa-star" style="color:gold;"></i> ${product.rating}
          </div>
          </div>
          <div class = "counter">
          <button class="add">+</button>
          <span class="quantity">${counter[id]}</span>
          <button class="minus">-</button>
          </div>
          <p class="product-price">$${product.price}</p>
      `;
  return inner;
}
