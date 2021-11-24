let total = [];
let buttons = document.querySelectorAll(".add_button");
let totalEl = document.querySelector("#total");
let totalAmountEl = document.querySelector("#total_amount");
let gol = document.querySelector("#gol");
let min = document.querySelector("#min");


function calc() {
    console.log(total)
    // let price = 0;
    // total.forEach(item => price += Number(item))
    // totalEl.style.display = "block";
    // totalAmountEl.innerText = price;

    // if(price > 0) gol.style.display = "none";
    // if(price > 100) min.style.display = "none";
}

buttons.forEach((item) => {
    item.addEventListener("click", (event) => {
        let price = event.target.dataset.pret;
        let name = event.target.dataset.name;

        if(!total.length) {
            console.log(total.length)
            total.push({
                name: name,
                amount: 1,
                price: price
            });
            calc();
            return false;
        }

        total = total.map(item => {
            console.log("mao: ", item)
            return item.name == name ? item.amount += 1 : {
                name: name,
                amount: 1,
                price: price
            }
        });

        calc();
    })
})