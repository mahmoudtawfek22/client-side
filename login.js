let loginuser;
let userval = false;
let passval = false;

let user = document.getElementById("username");
let pass = document.getElementById("password");

let form = document.forms[0];
// let validname = false;
let span = document.querySelector("form span");

function gettoken(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

async function validate() {
  await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: `${user.value}`,
      password: `${pass.value}`,
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("name or pass isnot correct");
      }
    })
    .then((res) => {
      console.log(res);
      gettoken(res.token);
      form.submit();
      location.replace("home.html");
    })
    .catch((err) => {
      span.style.cssText = "display:block";
      console.log(err);
    });
}

function uservalidate() {
  var nameReg = /^[^\d][\w-]{4,25}$/;
  if (nameReg.test(user.value)) {
    userval = true;
    console.log("username is right");
  } else {
    userval = false;
    console.log("username is wrong");
  }
}

function passvalidate() {
  var passReg = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/;
  if (passReg.test(pass.value)) {
    console.log("pass is right");
    passval = true;
  } else {
    console.log("pass is wrong");
    passval = false;
  }
}

form.addEventListener("submit", function (e) {
  uservalidate();
  passvalidate();
  if (userval == false || passval == false) {
    e.preventDefault();
  } else {
    e.preventDefault();
    validate();
  }
});
