let token = JSON.parse(localStorage.getItem("token"));

if (!token) {
  location.replace("login.html");
}

console.log(window.localStorage.token);
// let token = JSON.parse(window.localStorage.token);
/* providing token in bearer */
fetch("https://dummyjson.com/auth/me", {
  method: "GET",
  headers: {
    Authorization: token,
  },
})
  .then((res) => res.json())
  .then((data) => {
    let id = document.getElementById("id");
    let firstName = document.getElementById("firstName");
    let firstNameSecond = document.getElementById("firstNameSecond");
    let maidenName = document.getElementById("maidenName");
    let lastName = document.getElementById("lastName");
    let lastNameSecond = document.getElementById("lastNameSecond");
    let age = document.getElementById("age");
    let gender = document.getElementById("gender");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let phoneSecond = document.getElementById("phoneSecond");
    let username = document.getElementById("username");
    let usernameSecond = document.getElementById("usernameSecond");
    let birthDate = document.getElementById("birthDate");
    let img = document.getElementById("img");
    let bloodGroup = document.getElementById("bloodGroup");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let ip = document.getElementById("ip");
    let address = document.getElementById("address");
    let addressSecind = document.getElementById("addressSecond");
    let city = document.getElementById("city");
    let postalCode = document.getElementById("postalCode");
    let state = document.getElementById("state");
    // let university = document.getElementById("university");
    let cardExpire = document.getElementById("cardExpire");
    let cardNumber = document.getElementById("cardNumber");
    let cardType = document.getElementById("cardType");
    let currency = document.getElementById("currency");
    let iban = document.getElementById("iban");
    let coin = document.getElementById("coin");
    let wallet = document.getElementById("wallet");
    let network = document.getElementById("network");
    console.log(data);
    id.innerText = data.id;
    firstName.innerText = data.firstName;
    firstNameSecond.innerText = data.firstName;
    maidenName.innerText = data.maidenName;
    lastName.innerText = data.lastName;
    lastNameSecond.innerText = data.lastName;
    age.innerText = data.age;
    gender.innerText = data.gender;
    email.innerText = data.email;
    phone.innerText = data.phone;
    phoneSecond.innerText = data.phone;
    username.innerText = data.username;
    usernameSecond.innerText = data.username;
    birthDate.innerText = data.birthDate;
    img.src = data.image;
    bloodGroup.innerText = data.bloodGroup;
    height.innerText = data.height;
    weight.innerText = data.weight;
    ip.innerText = data.ip;
    address.innerText = data.address.address;
    addressSecond.innerText = data.address.address;
    city.innerText = data.address.city;
    postalCode.innerText = data.address.postalCode;
    state.innerText = data.address.state;
    // university.innerText = data.university;
    cardExpire.innerText = data.bank.cardExpire;
    cardNumber.innerText = data.bank.cardNumber;
    cardType.innerText = data.bank.cardType;
    currency.innerText = data.bank.currency;
    iban.innerText = data.bank.iban;
    coin.innerText = data.crypto.coin;
    wallet.innerText = data.crypto.wallet;
    network.innerText = data.crypto.network;
  });

///////////////////////////////////////////////////////////////////////////////////

let showBTn = document.getElementsByClassName("show");
let accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
  showBTn[i].addEventListener("click", function () {
    this.classList.toggle("hide");
  });

  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.height = "0";
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      panel.style.height = "fit-content";
    }
  });
}
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