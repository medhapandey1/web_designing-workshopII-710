

let cartCount = 0;
let totalPrice = 0;

function addToCart(price){

    cartCount++;
    totalPrice += price;

    document.getElementById("cart-count").innerText =
    cartCount;

    document.getElementById("total-price").innerText =
    "₹" + totalPrice;

    localStorage.setItem("cartCount",cartCount);
    localStorage.setItem("totalPrice",totalPrice);
}

window.onload = function(){

    cartCount =
    Number(localStorage.getItem("cartCount")) || 0;

    totalPrice =
    Number(localStorage.getItem("totalPrice")) || 0;

    document.getElementById("cart-count").innerText =
    cartCount;

    document.getElementById("total-price").innerText =
    "₹" + totalPrice;
};

const searchBox =
document.querySelector(".search");

searchBox.addEventListener("keyup",function(){

    let value =
    searchBox.value.toLowerCase();

    let products =
    document.querySelectorAll(".products");

    products.forEach((item)=>{

        let text =
        item.innerText.toLowerCase();

        if(text.includes(value)){
            item.style.display =
            "inline-block";
        }
        else{
            item.style.display =
            "none";
        }

    });

});

function toggleMode(){
    document.body.classList.toggle("dark");
}

function clearCart(){

    cartCount = 0;
    totalPrice = 0;

    document.getElementById("cart-count").innerText = 0;

    document.getElementById("total-price").innerText = "₹0";

    localStorage.clear();
}

