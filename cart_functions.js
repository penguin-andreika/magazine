let total = [];
let buttons = document.querySelectorAll(".add_button");
let totalEl = document.querySelector("#total");
let totalAmountEl = document.querySelector("#total_amount");
let gol = document.querySelector("#gol");
let min = document.querySelector("#min");
let cartItems = document.querySelector("#cart-items");

function addInCart(name = "", price = 0, amount = 1) {
    let element = document.createElement("div");
    let nameEl = document.createElement("h3");
    let priceEl = document.createElement("em");
    let amountEl = document.createElement("span");

    nameEl.innerText = name;
    priceEl.innerText = "Price: " + price;
    amountEl.innerText = "Amount: " + amount;

    element.append(nameEl);
    element.append(priceEl);
    element.append(amountEl);
    cartItems.append(element)
}

function calc() {
    console.log(total)
    let price = 0;
    cartItems.innerHTML = "";
    total.forEach(item => {
        addInCart(item.name, item.price, item.amount);
    });

    total.forEach(item => price += Number(item.price))
    totalEl.style.display = "block";
    totalAmountEl.innerText = price;

    if(price > 0) gol.style.display = "none";
    if(price > 100) min.style.display = "none";
}

buttons.forEach((item) => {
    item.addEventListener("click", (event) => {
        let price = event.target.dataset.pret;
        let name = event.target.dataset.name;

        total.push({
            name: name,
            amount: 1,
            price: price
        });

        calc();
    })
})