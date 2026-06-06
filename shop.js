let menu = document.querySelector(".menu");
let totaldiv = document.querySelector(".total");
let input = document.querySelectorAll("input");

//adding stuff to cart-----------------------------------------------------------------------------
let showCart = document.querySelector(".cart-pop-up-background");
let cartAdd = document.querySelectorAll(".add-to-cart");
let cart = document.getElementById("cart");
let x = document.querySelector(".x");
let addedtocart = document.querySelector(".cart-items-pop-up");
let cartitem = document.querySelector(".cart-item");

cart.addEventListener("click", () => {
  showCart.classList.add("shown");
});

x.addEventListener("click", () => {
  showCart.classList.remove("shown");
});

menu.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    let item = e.target.closest(".item"); // heres the closest item to add to cart button like document.quersel(".item")

    let newcartitem = document.createElement("div");
    newcartitem.classList.add("cart-item");
    newcartitem.classList.add("item");
    addedtocart.append(newcartitem);

    //for here empty div is created and showed only

    let h2cart = item.querySelector("h2");
    let h3cartprice = item.querySelector(".h3price");
    let h3cartdollar = item.querySelector(".h3dollar");
    let itemimg = item.querySelector("img");

    let newimg = document.createElement("img");
    newimg.src = itemimg.src;
    newimg.alt = itemimg.alt;
    newcartitem.append(newimg);

    let newh2 = document.createElement("h2");
    newh2.textContent = h2cart.textContent;
    newcartitem.append(newh2);

    let newh3 = document.createElement("h3");
    newh3.classList.add("priceh3");

    let h3price = document.createElement("span");
    h3price.classList.add("h3price");
    newh3.append(h3price);

    let h3dollar = document.createElement("span");
    h3dollar.classList.add("h3dollar");
    newh3.append(h3dollar);

    h3price.textContent = h3cartprice.innerText;
    h3dollar.textContent = h3cartdollar.innerText;
    newcartitem.append(newh3);

    let newcontrols = document.createElement("div");
    newcontrols.classList.add("controls");

    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.textContent = "-";
    newcontrols.append(remove);

    let amount = document.createElement("div");
    amount.classList.add("amount");
    newcontrols.append(amount);

    let amountnb = document.createElement("p");
    amountnb.classList.add("amountnb");
    amount.append(amountnb);

    let add = document.createElement("button");
    add.classList.add("add");
    add.textContent = "+";
    newcontrols.append(add);

    newcartitem.append(newcontrols);
    // --------------------------------------- + - functinality

    let j = 1;

    amountnb.textContent = j;

    add.addEventListener("click", () => {
      j++;
      amountnb.textContent = j;
      if (j > 1) {
        h3price.textContent = (Number(h3cartprice.textContent) * j).toFixed(2);
      }
      let total = 0;

      let h3total = addedtocart.querySelectorAll("h3");
      let h3prices = addedtocart.querySelectorAll(".h3price");

      for (u = 0; u < h3prices.length; u++) {
        let h3nb = Number(h3prices[u].textContent);
        total = h3nb + total;

        let totaldiv = document.querySelector(".total");
        let totalprice = totaldiv.querySelector(".price");
        totalprice.textContent = total.toFixed(2) + "$";
      }
    });

    remove.addEventListener("click", () => {
      if (j > 1) {
        j--;
        amountnb.textContent = j;
      }
      if (j >= 1) {
        h3price.textContent = Number(h3cartprice.textContent).toFixed(2) * j;
      }

      let total = 0;

      let h3total = addedtocart.querySelectorAll("h3");
      let h3prices = addedtocart.querySelectorAll(".h3price");

      for (u = 0; u < h3prices.length; u++) {
        let h3nb = Number(h3prices[u].textContent);
        total = h3nb + total;

        let totalprice = totaldiv.querySelector(".price");
        totalprice.textContent = total.toFixed(2) + "$";
      }
    });
    let total = 0;

    let h3total = addedtocart.querySelectorAll("h3");
    let h3prices = addedtocart.querySelectorAll(".h3price");

    for (u = 0; u < h3prices.length; u++) {
      let h3nb = Number(h3prices[u].textContent);
      total = h3nb + total;

      let totaldiv = document.querySelector(".total");
      let totalprice = totaldiv.querySelector(".price");
      totalprice.textContent = total.toFixed(2) + "$";
    }

    let pressed = e.target;
    if (pressed.classList.contains("pressed")) {
      return;
    }
    pressed.classList.add("pressed");
  }
});

let removeContainer = document.querySelector(".remove-container");
let editPopUp = document.querySelector(".edit-pop-up");
let additem = document.querySelector(".item-add");

let form = document.getElementById("form");

additem.addEventListener("click", function () {
  let changeImg = document.createElement("input");
  changeImg.type = "file";
  changeImg.classList.add("change-img", "input");
  changeImg.required = true;

  let changeHeading = document.createElement("input");
  changeHeading.type = "text";
  changeHeading.classList.add("change-heading", "input");
  changeHeading.placeholder = "type a heading";
  changeHeading.required = true;

  let changeDescription = document.createElement("input");
  changeDescription.type = "text";
  changeDescription.classList.add("change-description", "input");
  changeDescription.placeholder = "type a Description";
  changeDescription.required = true;

  let changePrice = document.createElement("input");
  changePrice.type = "number";
  changePrice.classList.add("change-price", "input");
  changePrice.placeholder = "type a Price";
  changePrice.required = true;

  let apply = document.createElement("div");
  apply.classList.add("apply-changes");
  apply.textContent = "apply";

  let changespanprice = document.createElement("span");
  changespanprice.classList.add("h3price");

  let changedollar = document.createElement("span");
  changedollar.classList.add("h3dollar");
  changedollar.textContent = "$";

  form.append(changeImg);
  form.append(changeHeading);
  form.append(changeDescription);
  form.append(changePrice);
  form.append(apply);
  changePrice.append(changespanprice);
  changePrice.append(changedollar);

  editPopUp.classList.remove("hidden");
  let newitem = document.createElement("div");
  newitem.classList.add("item");
  let newitemH2 = document.createElement("h2");

  let newitemP = document.createElement("p");

  let newitemPrice = document.createElement("h3");

  let newitemImg = document.createElement("img");

  removeContainer.addEventListener("click", function () {
    editPopUp.classList.add("hidden");
    changeDescription.style.display = "none";
    changeHeading.style.display = "none";
    changePrice.style.display = "none";
    changeImg.style.display = "none";
    apply.style.display = "none";
  });
  changeImg.addEventListener("change", function (e) {
     if (!changeImg.type.startsWith('image/')) {
        alert('Error: Only images are allowed!');
        this.value = null; // Clear the input
    }
    let file = changeImg.files[0];
    let reader = new FileReader();
    let url = reader.readAsDataURL(file);
    reader.addEventListener("load", function () {
      newitemImg.src = reader.result;
    });
  });
  let newcartitembutton = document.createElement("button");

  apply.addEventListener("click", function () {

    if(changeDescription.value =="" || changeHeading.value==""||changePrice.value==""||changeImg.files.length==0){
      alert("Hmm.. Something is Missing")
       return
    }
    
    newcartitembutton.classList.add("add-to-cart");
    newcartitembutton.textContent = cartAdd[0].textContent;
    newitemH2.textContent = changeHeading.value;
    newitemP.textContent = changeDescription.value;
    changespanprice.textContent = changePrice.value;

    menu.append(newitem);
    newitem.append(newitemImg);
    newitem.append(newitemH2);
    newitem.append(newitemP);
    newitem.append(newitemPrice);
    newitem.append(newcartitembutton);
    newitemPrice.append(changespanprice);
    newitemPrice.append(changedollar);

    changeDescription.style.display = "none";
    changeHeading.style.display = "none";
    changePrice.style.display = "none";
    changeImg.style.display = "none";
    apply.style.display = "none";

    editPopUp.classList.add("hidden");
  });
});
