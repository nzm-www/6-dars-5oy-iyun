// const img = document.createElement("img");
// const block = document.getElementById("block");

// img.setAttribute("alt", "buyerda tabiat rasmi bor");
// img.setAttribute("src", "https://picsum.photos/200/300");

// block.appendChild(img)

// console.log(img);


// const btn = document.getElementById('button')
// const input = document.getElementById('input')
// input.addEventListener('keydown', function() {
//     console.log('hello');
// })

// const code = document.getElementById("code");

// code.addEventListener("mouseup", function () {
//   code.style.color = "red";
// });
// code.addEventListener("mouseover", function () {
//   code.style.color = "blue";
// });
// code.addEventListener("mouseout", function () {
//   code.style.color = "green";
// });
// const cars = ["mers", "BMW", "GM", "Porche"];

// const btn = document.getElementById("button");
// const list = document.querySelector("#list");

// btn.addEventListener("click", function () {
//   cars.forEach(function (el) {
//     const li = document.createElement("li");
//     li.innerHTML = el;
//     list.appendChild(li);
//   });
// }); 
// const fruits = ["olma", "banan", "anjir", "mandarin"];

// const btn = document.getElementById("button");
// const list = document.querySelector("#list");

// btn.addEventListener("click", function () {
//   fruits.forEach(function (el) {
//     const li = document.createElement("li");
//     li.innerHTML = el;
//     list.appendChild(li);
//   });
// });

const infos = ['vj','rathod','phonenumberst','email','password','takrorpassword',]
const form = document.getElementById("form");
const vj = document.getElementById("vj");
const rathod = document.getElementById("rathod");
const phonenumberst = document.getElementById("phonenumber");
const email = document.getElementById("email");
const password = document.getElementById("password");
const takrorpassword = document.getElementById("takrorpassword");
const button = document.querySelector("#btn");
const list = document.querySelector("#list");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const users = {
    takrorpassword: takrorpassword.value,
    password: password.value,
    email: email.value,
    phonenumberst: phonenumberst.value,
    rathod: rathod.value,
    vj: vj.value,
  };
  console.log(users);
});

button.addEventListener('click', function(){
  infos.forEach(function(el) {
    const li = document.createElement('li')
    li.innerHTML = el
    list.appendChild(li)
  })
})