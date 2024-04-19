import * as all from "./module.js"

let cart = []
let counter = new Array(30)
counter.fill(0)
all.initialize(cart, counter)


fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        if (!Array.isArray(data)) {
            if (data && Array.isArray(data.products)) {
                data = data.products;
            }
            else {
                console.log(data)
            }
        }


        cart.forEach(itemId => {
            all.addNewPro(itemId.slice(3), data[itemId.slice(3)], counter, cart)

        }
        )
    });
let logout = document.getElementById("logout");
logout.addEventListener("click", function () {
    localStorage.clear();
    location.replace("login.html")
})

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