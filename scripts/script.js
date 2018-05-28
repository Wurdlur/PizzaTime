var sizeRegex = /S|M|L|XL/;
var crustRegex = /HAND-TOSSED|THIN N' CRISPY|CHEESY|STUFFED CRUST/;
var sauceRegex = /MARINARA|BUFFALO|BBQ|GARLIC PARMESAN|ALFREDO/;
var sauceAmtRegex = /LIGHT|REG|EXTRA/;
var cheeseRegex = /LIGHT|REGULAR|EXTRA|NONE/;

var tabButton = [].slice.call(
    document.querySelectorAll("ul.tab-nav li a.button-tab")
);

tabButton.map(button => {
    button.addEventListener("click", () => {
        var href = button.getAttribute("href");
        document.querySelector(".active").classList.remove("active");
        document.querySelector(href).classList.add("active");
        document.querySelector(".active-tab").classList.remove("active-tab");
        button.classList.add("active-tab");
    });
});

var totalCostLabel = document.getElementById('totalcostlbl');
var TOTALPRICE = 0;
var pizzaStack = [];
pizzaStack.push("url(images/handToss.png)");
var currentPizzaCostLabel = document.getElementById('currentPizzaPricelbl');


var dynListArr = [];
var pizza = document.getElementById('pizza');
pizza.style.background = "url(images/marinara.png)," + pizzaStack[0];
pizza.style.backgroundSize = 'cover';

var szBtn = document.getElementById('smallBtn');
szBtn.addEventListener('click', addSmall);
var medBtn = document.getElementById('medBtn');
medBtn.addEventListener('click', addMed);
var largeBtn = document.getElementById('largeBtn');
largeBtn.addEventListener('click', addLarge);
var xlargeBtn = document.getElementById('xlargeBtn');
xlargeBtn.addEventListener('click', addXLarge);

var pizzaSize = document.getElementById('pizzaSZ');
var pizzaCrust = document.getElementById('pizzaCR');
var pizzaCheese = document.getElementById('pizzaCH');
var pizzaTop = document.getElementById('pizzaTOP');
var pizzaSauce = document.getElementById('pizzaSA');
var pizzaSauceAmt = document.getElementById('sauceAmt');
pizzaTop.innerHTML = "";

function addSmall(evt) {
    var u = szBtn.parentElement.innerHTML;
    u = u.match(sizeRegex);
    pizzaSize.innerHTML = u;
    szBtn.style.background = 'red';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'black';
    pizza.style.width = '150px';
    pizza.style.height = '150px';

    // console.log(u);
    // dynListArr.push(u);
    // // console.log(szBtn.innerHTML);
    // console.log("ARR " + dynListArr[0]);

    // var dynList = document.getElementById('dynamicListHolder');

    // for (var i = 0; i < dynListArr.length; i++) {
    //     dynList.innerHTML = dynListArr[i];

    //     console.log("dyn" + dynList.innerHTML);
    // }
}
medBtn.style.background = 'red';
pizzaSize.innerHTML = 'M';
function addMed(evt) {
    var u = medBtn.parentElement.innerHTML;
    u = u.match(sizeRegex);
    pizzaSize.innerHTML = u;
    medBtn.style.background = 'red';
    szBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'black';
    pizza.style.width = '200px';
    pizza.style.height = '200px';

}
function addLarge(evt) {
    var u = largeBtn.parentElement.innerHTML;
    u = u.match(sizeRegex);
    pizzaSize.innerHTML = u;
    largeBtn.style.background = 'red';
    medBtn.style.background = 'black';
    szBtn.style.background = 'black';
    xlargeBtn.style.background = 'black';
    pizza.style.width = '250px';
    pizza.style.height = '250px';

}
function addXLarge(evt) {
    var u = xlargeBtn.parentElement.innerHTML;
    u = u.match(sizeRegex);
    pizzaSize.innerHTML = u;
    xlargeBtn.style.background = 'red';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    szBtn.style.background = 'black';
    pizza.style.width = '300px';
    pizza.style.height = '300px';
}
function resetBackground(a) {
    var s = "";
    // a.forEach(function (element) {
    //     console.log("El: " + element);
    //     pizza.style.background = "url(" + element + ")";
    //     pizza.style.backgroundSize = 'cover';
    // });
    pizzaStack.reverse();
    for (var v = 0; v < pizzaStack.length; v++) {

        if (v > 0) {
            s += ", " + pizzaStack[v];

        } else if (v == pizzaStack.length) {
            s += ";";
        } else {

            s += pizzaStack[v];
        }


        console.log(s);
        pizza.style.background = s;
        pizza.style.backgroundSize = 'cover';
    }


}

// var crustBtn = document.getElementById('crustBtn');
// crustBtn.addEventListener('click', addCrust);
// function addCrust(){
//     var u = crustBtn.parentElement.innerHTML;
//     u = u.match(crustRegex);
//     console.log(u);
//     pizzaCrust.innerHTML = u;
// }

var c1 = document.getElementById('crustBtn1');
var c2 = document.getElementById('crustBtn2');
var c3 = document.getElementById('crustBtn3');
var c4 = document.getElementById('crustBtn4');
function addCrust(elem) {
    var c = elem.parentElement.innerHTML;
    c = c.match(crustRegex);
    switch (elem.id) {
        case "crustBtn1":
            c1.style.background = 'red';
            c2.style.background = 'black';
            c3.style.background = 'black';
            c4.style.background = 'black';
            pizzaStack[0] = "url(images/handToss.png)";
            resetBackground(pizzaStack);
            break;
        case "crustBtn2":
            c2.style.background = 'red';
            c1.style.background = 'black';
            c3.style.background = 'black';
            c4.style.background = 'black';
            pizzaStack[0] = "url(images/thin.png)";
            resetBackground(pizzaStack);
            break;
        case "crustBtn3":
            c3.style.background = 'red';
            c2.style.background = 'black';
            c1.style.background = 'black';
            c4.style.background = 'black';
            pizzaStack[0] = "url(images/stuffed.png)";
            resetBackground(pizzaStack);
            break;
        case "crustBtn4":
            c4.style.background = 'red';
            c2.style.background = 'black';
            c3.style.background = 'black';
            c1.style.background = 'black';
            pizzaStack[0] = "url(images/cheesy.png)";
            resetBackground(pizzaStack);
            break;
    }
    pizzaCrust.innerHTML = c;
}
var s1 = document.getElementById('sauceBtn1');
var s2 = document.getElementById('sauceBtn2');
var s3 = document.getElementById('sauceBtn3');
var s4 = document.getElementById('sauceBtn4');
var s5 = document.getElementById('sauceBtn5');
function addSauce(elem) {
    var c = elem.parentElement.innerHTML;
    c = c.match(sauceRegex);
    switch (elem.id) {
        case "sauceBtn1":
            s1.style.background = 'red';
            s2.style.background = 'black';
            s3.style.background = 'black';
            s4.style.background = 'black';
            s5.style.background = 'black';
            pizzaStack[1] = "url(images/marinara.png)";
            resetBackground(pizzaStack);
            break;
        case "sauceBtn2":
            s2.style.background = 'red';
            s1.style.background = 'black';
            s3.style.background = 'black';
            s4.style.background = 'black';
            s5.style.background = 'black';
            pizzaStack[1] = "url(images/buffalo.png)";
            resetBackground(pizzaStack);
            break;
        case "sauceBtn3":
            s3.style.background = 'red';
            s2.style.background = 'black';
            s1.style.background = 'black';
            s4.style.background = 'black';
            s5.style.background = 'black';
            pizzaStack[1] = "url(images/bbq.png)";
            resetBackground(pizzaStack);
            break;
        case "sauceBtn4":
            s4.style.background = 'red';
            s2.style.background = 'black';
            s3.style.background = 'black';
            s1.style.background = 'black';
            s5.style.background = 'black';
            pizzaStack[1] = "url(images/alfredo.png)";
            resetBackground(pizzaStack);
            break;
        case "sauceBtn5":
            s5.style.background = 'red';
            s2.style.background = 'black';
            s3.style.background = 'black';
            s1.style.background = 'black';
            s4.style.background = 'black';
            pizzaStack[1] = "url(images/garlicParm.png)";
            resetBackground(pizzaStack);
            break;
    }
    pizzaSauce.innerHTML = c;
}
function addSauceAmt(elem) {
    var c = elem.innerHTML;
    c = c.match(sauceAmtRegex);
    pizzaSauceAmt.innerHTML = c;
}
var ch1 = document.getElementById('cheeseBtn1');
var ch2 = document.getElementById('cheeseBtn2');
var ch3 = document.getElementById('cheeseBtn3');
var ch4 = document.getElementById('cheeseBtn4');
function addCheese(elem) {
    var c = elem.parentElement.innerHTML;
    c = c.match(cheeseRegex);
    switch (elem.id) {
        case "cheeseBtn1":
            ch1.style.background = 'red';
            ch2.style.background = 'black';
            ch3.style.background = 'black';
            ch4.style.background = 'black';
            break;
        case "cheeseBtn2":
            ch2.style.background = 'red';
            ch1.style.background = 'black';
            ch3.style.background = 'black';
            ch4.style.background = 'black';

            break;
        case "cheeseBtn3":
            ch3.style.background = 'red';
            ch2.style.background = 'black';
            ch1.style.background = 'black';
            ch4.style.background = 'black';

            break;
        case "cheeseBtn4":
            ch4.style.background = 'red';
            ch2.style.background = 'black';
            ch3.style.background = 'black';
            ch1.style.background = 'black';

            break;
    }
    pizzaCheese.innerHTML = c;
    console.log(dynListArr);
}
var addBtn = document.getElementById('addToOrderBtn');
addBtn.addEventListener('click', addToOrder);
var orderContainer = document.getElementById('orderContainer');
var pizzaCt = 0;
var pizzaString = "";
var isSupreme = false;
var isSuperSupreme = false;
var isBBQChicken = false;
var isFiveCheese = false;
var isMeatLovers = false;

function addToOrder() {
    pizzaCt += 1;
    // orderContainer.innerHTML = "";
    var pizzaCtHeader = document.createElement('h2');
    pizzaCtHeader.id = 'pizzaHeader' + pizzaCt;
    pizzaCtHeader.className = 'wrap';
    pizzaCtHeader.innerHTML = "Pizza" + pizzaCt;
    pizzaString += "<h2 class='otherwrap'>" + "Pizza #" + pizzaCt + "</h2>";
    orderContainer.appendChild(pizzaCtHeader);

    dynListArr.push(pizzaSize.innerHTML);
    dynListArr.push(pizzaCrust.innerHTML);
    dynListArr.push(pizzaSauce.innerHTML + " " + pizzaSauceAmt.innerHTML);
    dynListArr.push(pizzaCheese.innerHTML);
    dynListArr.push(pizzaTop.innerHTML);

    for (var i = 0; i < dynListArr.length; i++) {
        console.log(dynListArr[i]);
        pizzaString += "<p class='listwrap'>" + dynListArr[i] + "</p>";
        orderContainer.innerHTML = pizzaString;
    }
    pizzaSize.innerHTML = "M";
    pizzaCrust.innerHTML = "";
    pizzaCheese.innerHTML = "";
    pizzaSauce.innerHTML = "";
    pizzaSauceAmt.innerHTML = "";
    pizzaTop.innerHTML = "";
    ch1.style.background = 'black';
    ch2.style.background = 'black';
    ch3.style.background = 'black';
    ch4.style.background = 'black';
    s1.style.background = 'black';
    s2.style.background = 'black';
    s3.style.background = 'black';
    s4.style.background = 'black';
    s5.style.background = 'black';
    c1.style.background = 'black';
    c2.style.background = 'black';
    c3.style.background = 'black';
    c4.style.background = 'black';
    // document.getElementById(dynListArr[]);
    medBtn.style.background = 'red';
    szBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'black';
    pizza.style.width = '200px';
    pizza.style.height = '200px';
    console.log(isSupreme);
    if (isSupreme) {
        TOTALPRICE += 15;
    } else if (isSuperSupreme) {
        TOTALPRICE += 17;

    } else if (isBBQChicken) {
        TOTALPRICE += 15;

    } else if (isFiveCheese) {
        TOTALPRICE += 16;

    } else if (isMeatLovers) {
        TOTALPRICE += 16;

    }
    console.log("TP" + TOTALPRICE);
    totalCostLabel.innerHTML = "$ " + TOTALPRICE;
    dynListArr = [];

}
//PRE-BUILT
var supremeBtn = document.getElementById('supremeBtn');
var supersupremeBtn = document.getElementById('supersupremeBtn');
var bbqBtn = document.getElementById('bbqBtn');
var fivecheeseBtn = document.getElementById('fivecheeseBtn');
var meatloversBtn = document.getElementById('meatloversBtn');
supremeBtn.addEventListener('click', addSupreme);
supersupremeBtn.addEventListener('click', addSuperSupreme);
bbqBtn.addEventListener('click', addBBQ);
fivecheeseBtn.addEventListener('click', addFiveCheese);
meatloversBtn.addEventListener('click', addMeatLovers);

function addSupreme() {
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
    szBtn.disabled = true;
    pizza.style.width = '300px';
    pizza.style.height = '300px';
    pizzaSize.innerHTML = "XL";
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    pizzaSauceAmt.innerHTML = "REGULAR";
    pizzaTop.innerHTML = "ALMOST EVERYTHING";
    supremeBtn.style.background = 'red';
    supersupremeBtn.style.background = 'black';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'black';
    isSupreme = true;
    isSuperSupreme = false;
    isBBQChicken = false;
    isFiveCheese = false;
    isMeatLovers = false;
    currentPizzaCostLabel.innerHTML = "$ " + 15;
}
function addSuperSupreme() {
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
    szBtn.disabled = true;
    pizza.style.width = '300px';
    pizza.style.height = '300px';
    pizzaSize.innerHTML = "XL";
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    pizzaSauceAmt.innerHTML = "REGULAR";
    pizzaTop.innerHTML = "EVERYTHING";
    supremeBtn.style.background = 'black';
    supersupremeBtn.style.background = 'red';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'black';
    isSupreme = false;
    isSuperSupreme = true;
    isBBQChicken = false;
    isFiveCheese = false;
    isMeatLovers = false;
    currentPizzaCostLabel.innerHTML = "$ " + 17;

}
function addBBQ() {
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
    szBtn.disabled = true;
    pizza.style.width = '300px';
    pizza.style.height = '300px';
    pizzaSize.innerHTML = "XL";
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "BBQ";
    pizzaSauceAmt.innerHTML = "REGULAR";
    pizzaTop.innerHTML = "BACON<br/>CHICKEN<br/>ONION<br/>";
    supremeBtn.style.background = 'black';
    supersupremeBtn.style.background = 'black';
    bbqBtn.style.background = 'red';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'black';
    isSupreme = false;
    isSuperSupreme = false;
    isBBQChicken = true;
    isFiveCheese = false;
    isMeatLovers = false;
    currentPizzaCostLabel.innerHTML = "$ " + 15;

}
function addFiveCheese() {
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
    szBtn.disabled = true;
    pizza.style.width = '300px';
    pizza.style.height = '300px';
    pizzaSize.innerHTML = "XL";
    pizzaCrust.innerHTML = "CHEESY";
    pizzaCheese.innerHTML = "MOZZARELLA<br/>CHEDDAR<br/>PARMESAN<br/>ASIAGO<br/>ROMANO<br/>";
    pizzaSauce.innerHTML = "GARLIC PARMESAN";
    pizzaSauceAmt.innerHTML = "REGULAR";
    pizzaTop.innerHTML = "NONE";
    supremeBtn.style.background = 'black';
    supersupremeBtn.style.background = 'black';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'red';
    meatloversBtn.style.background = 'black';
    isSupreme = false;
    isSuperSupreme = false;
    isBBQChicken = false;
    isFiveCheese = true;
    isMeatLovers = false;
    currentPizzaCostLabel.innerHTML = "$ " + 16;

}
function addMeatLovers() {
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
    szBtn.disabled = true;
    pizza.style.width = '300px';
    pizza.style.height = '300px';
    pizzaSize.innerHTML = "XL";
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    pizzaSauceAmt.innerHTML = "REGULAR";
    pizzaTop.innerHTML = "PEPPERONI<br/>SAUSAGE<br/>BACON<br/>HAM<br/>SALAMI";
    supremeBtn.style.background = 'red';
    supersupremeBtn.style.background = 'black';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'red';
    isSupreme = false;
    isSuperSupreme = false;
    isBBQChicken = false;
    isFiveCheese = false;
    isMeatLovers = true;
    currentPizzaCostLabel.innerHTML = "$ " + 16;

}