//adding new items on shop page menu --------------------------------------------------------
let newitem = document.querySelector(".item-add");
let menu = document.querySelector(".menu");

newitem.addEventListener("click", function () {
  let newdiv = document.createElement("div");
  menu.append(newdiv);
  newdiv.classList.add("item");
});
// DONE adding new items on shop page menu --------------------------------------------------------

//adding stuff to cart-----------------------------------------------------------------------------
let showCart = document.querySelector(".cart-pop-up-container");
let cartAdd = document.querySelectorAll(".add-to-cart");
let cart = document.getElementById("cart");
let x = document.querySelector(".x");
let addedtocart = document.querySelector(".cart-pop-up");
let cartitem = document.querySelector(".cart-item");

cart.addEventListener("click", () => {
  showCart.classList.add("shown");
});

x.addEventListener("click", () => {
  showCart.classList.remove("shown");
});

let i = 0;
cartAdd.forEach((cartAdd) => {
  cartAdd.addEventListener("click", () => {
    let newcart = document.createElement("div");
    newcart.classList.add("cart-item");
    newcart.classList.add("item");
    addedtocart.append(newcart);
    //for here empty div is created and showed only

    let item = document.querySelectorAll(".item");
    ++i;

    let h2cart = item[i].querySelector("h2");
    let h3cart = item[i].querySelector("h3");
    let itemimg = item[i].querySelector("img");

    let newimg = document.createElement("img");
    newimg.src = itemimg.src;
    newimg.alt = itemimg.alt;
    newcart.append(newimg);

    let newh2 = document.createElement("h2");
    newh2.textContent = h2cart.textContent;
    newcart.append(newh2);

    let newh3 = document.createElement("h3");
    newh3.textContent = h3cart.textContent;
    newcart.append(newh3);

    let newcontrols = document.createElement("div");
    newcontrols.classList.add("controls");

    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerText = "-";
    newcontrols.append(remove);

    let amount = document.createElement("div");
    amount.classList.add("amount");
    newcontrols.append(amount);

    let add = document.createElement("button");
    add.classList.add("add");
    add.textContent = "+";
    newcontrols.append(add);

    newcart.append(newcontrols);

    console.log(i);
  });
});

//DONE adding stuff to cart-----------------------------------------------------------------------------

let moreitem = document.querySelectorAll(".add");
let lessitem = document.querySelectorAll(".remove");
let amountnb = document.querySelector(".amountnb");
let newcontrols = document.createElement("div");

let j = 0;
amount.textContent = 0;
amountnb.textContent = 0;

moreitem.forEach((moreitem) => {
  moreitem.addEventListener("click", () => {
    j++;
    amountnb.textContent = j;
    amount.textContent = j;
  });
});

lessitem.forEach((lessitem) => {
  lessitem.addEventListener("click", () => {
    j--;
    amountnb.textContent = j;
    amount.textContent = j;
  });
});
