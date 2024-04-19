
import * as all from "./module.js"

let cart = []
let counter = new Array(30)
counter.fill(0)
all.initialize(cart, counter)

const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const rating = document.getElementById("rating");
const brand = document.getElementById("brand");
const thumbnail = document.getElementById("thumbnail");

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// let productID = window.localStorage.id;
let productID = JSON.parse(localStorage.getItem("id"));
fetch(`https://dummyjson.com/products/${productID}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    title.innerText = data.title;
    description.innerText = data.description;
    price.innerText += data.price;
    rating.innerText = data.rating;
    brand.innerText = data.brand;
    thumbnail.src = data.thumbnail;
    let bigDiv = document.getElementsByClassName("remaingin-images")[0]
    for (let i = 0; i < data.images.length; i++) {
      console.log("here")
      let newDiv = document.createElement('div')
      let newImg = document.createElement('img')
      newImg.src = data.images[i]
      newDiv.appendChild(newImg)
      // newDiv.children[0].src
      newDiv.addEventListener("click", function () {
        thumbnail.src = this.children[0].src
      })
      bigDiv.appendChild(newDiv)
    }

    // ! add to cart part!
    let addToCart = document.getElementById('addToCart')
    console.log(addToCart.innerText)
    let addOrRemove
    if (cart.indexOf(`add${productID - 1}`) != -1) {
      addOrRemove = '<i class="fas fa-shopping-cart"></i> Remove From cart'
    } else {
      addOrRemove = '<i class="fas fa-shopping-cart"></i> Add to cart'
    }
    console.log(addToCart.innerHTML)
    addToCart.innerHTML = addOrRemove
    addToCart.addEventListener("click", function () {
      if (this.innerHTML.trim() == '<i class="fas fa-shopping-cart"></i> Add to cart') {
        cart.push(`add${productID - 1}`)
        counter[productID - 1] = 1
        localStorage.setItem('itemsCounter', JSON.stringify(counter))

        localStorage.setItem('itemsId', JSON.stringify(cart))
        addToCart.innerHTML = '<i class="fas fa-shopping-cart"></i> Remove From cart'
        console.log(addToCart.innerText)

      }
      else if (this.innerHTML.trim() == '<i class="fas fa-shopping-cart"></i> Remove From cart') {
        // let thisId = this.id
        let afterDel = cart.filter(function (product) {
          return product != `add${productID - 1}`
        })
        cart = [...afterDel]
        localStorage.setItem('itemsId', JSON.stringify(cart))
        addToCart.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to cart'
        console.log(addToCart.innerText)

        counter[productID - 1] = 0
        localStorage.setItem('itemsCounter', JSON.stringify(counter))

      }
    }
    )
  });

////////////////////////////////////////////////////////////////////

let logout = document.getElementById("logout");
logout.addEventListener("click", function () {
  localStorage.clear();
  location.replace("login.html");
});

/*========= menu toggler ===============*/
let menuToggle = document.querySelector(".menu_toggler");
let header = document.querySelector("header")
function menuToggler(header , toggler) {
    toggler.addEventListener("click" , ()=> {
        toggler.classList.toggle("show");
        header.classList.toggle("showMenu");
    })
}
menuToggler(header,menuToggle);

/*========= menu toggler ===============*/