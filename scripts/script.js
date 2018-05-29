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
// pizzaStack.push("url(images/handToss.png)");
var currentPizzaCostLabel = document.getElementById('currentPizzaPricelbl');
var TOPPINGS = [];

var dynListArr = [];
var pizza = document.getElementById('pizza');
// pizza.style.background = "url(images/alfredo.png)," + pizzaStack[0];
// pizza.style.backgroundSize = 'cover';

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

var cheesy = "url(images/cheesy.png)";
var handToss = "url(images/handToss.png)";
var stuffed = "url(images/stuffed.png)";
var thin = "url(images/thin.png)";

var aldredo = "url(images/alfredo.png)";
var bbq = "url(images/bbq.png)";
var buffalo = "url(images/buffalo.png)";
var garlicParm = "url(images/garlicParm.png)";
var marinara = "url(images/marinara.png)";

var cheese = "url(images/cheese.png)";
var lightCheese = "url(images/lightCheese.png)";
var extraCheese = "url(images/extraCheese.png)";

var bacon1 = "url(images/bacon.png)";
var baconLeft = "url(images/baconLeft.png)";
var baconRight = "url(images/baconRight.png)";
var baconExtra = "url(images/baconExtra.png)";
var baconExtraLeft = "url(images/baconExtraLeft.png)";
var baconExtraRight = "url(images/baconExtraRight.png)";
var chicken1 = "url(images/chicken.png)";
var chickenLeft = "url(images/chickenLeft.png)";
var chickenRight = "url(images/chickenRight.png)";
var chickenExtra = "url(images/chickenExtra.png)";
var chickenExtraLeft = "url(images/chickenExtraLeft.png)";
var chickenExtraRight = "url(images/chickenExtraRight.png)";
var ham1 = "url(images/ham.png)";
var hamLeft = "url(images/hamLeft.png)";
var hamRight = "url(images/hamRight.png)";
var hamExtra = "url(images/hamExtra.png)";
var hamExtraLeft = "url(images/hamExtraLeft.png)";
var hamExtraRight = "url(images/hamExtraRight.png)";
var pepperoni1 = "url(images/pepperoni.png)";
var pepperoniLeft = "url(images/pepperoniLeft.png)";
var pepperoniRight = "url(images/pepperoniRight.png)";
var pepperoniExtra = "url(images/pepperoniExtra.png)";
var pepperoniExtraLeft = "url(images/pepperoniExtraLeft.png)";
var pepperoniExtraRight = "url(images/pepperoniExtraRight.png)";
var salami1 = "url(images/salami.png)";
var salamiLeft = "url(images/salamiLeft.png)";
var salamiRight = "url(images/salamiRight.png)";
var salamiExtra = "url(images/salamiExtra.png)";
var salamiExtraLeft = "url(images/salamiExtraLeft.png)";
var salamiExtraRight = "url(images/salamiExtraRight.png)";
var sausage1 = "url(images/sausage.png)";
var sausageLeft = "url(images/sausageLeft.png)";
var sausageRight = "url(images/sausageRight.png)";
var sausageExtra = "url(images/sausageExtra.png)";
var sausageExtraLeft = "url(images/sausageExtraLeft.png)";
var sausageExtraRight = "url(images/sausageExtraRight.png)";

var bananaPepper1 = "url(images/bananaPepper.png)";
var bananaPepperLeft = "url(images/bananaPepperLeft.png)";
var bananaPepperRight = "url(images/bananaPepperRight.png)";
var bananaPepperExtra = "url(images/bananaPepperExtra.png)";
var bananaPepperExtraLeft = "url(images/bananaPepperExtraLeft.png)";
var bananaPepperExtraRight = "url(images/bananaPepperExtraRight.png)";
var greenPepper1 = "url(images/greenPepper.png)";
var greenPepperLeft = "url(images/greenPepperLeft.png)";
var greenPepperRight = "url(images/greenPepperRight.png)";
var greenPepperExtra = "url(images/greenPepperExtra.png)";
var greenPepperExtraLeft = "url(images/greenPepperExtraLeft.png)";
var greenPepperExtraRight = "url(images/greenPepperExtraRight.png)";
var mushroom1 = "url(images/mushroom.png)";
var mushroomLeft = "url(images/mushroomLeft.png)";
var mushroomRight = "url(images/mushroomRight.png)";
var mushroomExtra = "url(images/mushroomExtra.png)";
var mushroomExtraLeft = "url(images/mushroomExtraLeft.png)";
var mushroomExtraRight = "url(images/mushroomExtraRight.png)";
var olives1 = "url(images/olives.png)";
var olivesLeft = "url(images/olivesLeft.png)";
var olivesRight = "url(images/olivesRight.png)";
var olivesExtra = "url(images/olivesExtra.png)";
var olivesExtraLeft = "url(images/olivesExtraLeft.png)";
var olivesExtraRight = "url(images/olivesExtraRight.png)";
var onion1 = "url(images/onion.png)";
var onionLeft = "url(images/onionLeft.png)";
var onionRight = "url(images/onionRight.png)";
var onionExtra = "url(images/onionExtra.png)";
var onionExtraLeft = "url(images/onionExtraLeft.png)";
var onionExtraRight = "url(images/onionExtraRight.png)";
var spinach1 = "url(images/spinach.png)";
var spinachLeft = "url(images/spinachLeft.png)";
var spinachRight = "url(images/spinachRight.png)";
var spinachExtra = "url(images/spinachExtra.png)";
var spinachExtraLeft = "url(images/spinachExtraLeft.png)";
var spinachExtraRight = "url(images/spinachExtraRight.png)";

pizza.style.background = cheese + "," + marinara + "," + handToss;
pizza.style.backgroundSize = "cover";
pizzaStack[0] = handToss;
pizzaStack[1] = marinara;
pizzaStack[2] = cheese;
pizzaCrust.innerHTML = "HAND-TOSSED";
pizzaCheese.innerHTML = "REGULAR";
pizzaSauce.innerHTML = "MARINARA";
pizzaSauceAmt.innerHTML = "REGULAR";

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

function resetBackground() {
    var s = "";
    // a.forEach(function (element) {
    //     console.log("El: " + element);
    //     pizza.style.background = "url(" + element + ")";
    //     pizza.style.backgroundSize = 'cover';
    // });
    // pizzaStack.reverse();
    for (var counter = pizzaStack.length - 1; counter >= 0; counter--) {
        console.log("CT " + counter);
        if (counter > 0) {
            if (pizzaStack[counter] != undefined) {
                s += pizzaStack[counter] + ",";
            }

        } else if (counter == pizzaStack.length) {
            s += ";";
        } else {

            s += pizzaStack[counter];
        }
        console.log(s);

        pizza.style.background = s;
        pizza.style.backgroundSize = 'cover';
    }
    // for (var v = 0; v < pizzaStack.length; v++) {

    //     if (v > 0) {
    //         s += ", " + pizzaStack[v];

    //     } else if (v == pizzaStack.length) {
    //         s += ";";
    //     } else {

    //         s += pizzaStack[v];
    //     }


    //     console.log(s);
    //     pizza.style.background = s;
    //     pizza.style.backgroundSize = 'cover';
    // }


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
            break;
        case "crustBtn2":
            c2.style.background = 'red';
            c1.style.background = 'black';
            c3.style.background = 'black';
            c4.style.background = 'black';
            pizzaStack[0] = "url(images/thin.png)";
            break;
        case "crustBtn3":
            c3.style.background = 'red';
            c2.style.background = 'black';
            c1.style.background = 'black';
            c4.style.background = 'black';
            pizzaStack[0] = "url(images/stuffed.png)";
            break;
        case "crustBtn4":
            c4.style.background = 'red';
            c2.style.background = 'black';
            c3.style.background = 'black';
            c1.style.background = 'black';
            pizzaStack[0] = "url(images/cheesy.png)";
            break;
    }
    resetBackground();

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
            break;
        case "sauceBtn2":
            s2.style.background = 'red';
            s1.style.background = 'black';
            s3.style.background = 'black';
            s4.style.background = 'black';
            s5.style.background = 'black';
            pizzaStack[1] = "url(images/buffalo.png)";
            break;
        case "sauceBtn3":
            s3.style.background = 'red';
            s2.style.background = 'black';
            s1.style.background = 'black';
            s4.style.background = 'black';
            s5.style.background = 'black';
            pizzaStack[1] = "url(images/bbq.png)";
            break;
        case "sauceBtn4":
            s4.style.background = 'red';
            s2.style.background = 'black';
            s3.style.background = 'black';
            s1.style.background = 'black';
            s5.style.background = 'black';
            pizzaStack[1] = "url(images/alfredo.png)";
            break;
        case "sauceBtn5":
            s5.style.background = 'red';
            s2.style.background = 'black';
            s3.style.background = 'black';
            s1.style.background = 'black';
            s4.style.background = 'black';
            pizzaStack[1] = "url(images/garlicParm.png)";
            break;
    }
    resetBackground();

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
            pizzaStack[2] = "url(images/cheese.png)";

            break;
        case "cheeseBtn2":
            ch2.style.background = 'red';
            ch1.style.background = 'black';
            ch3.style.background = 'black';
            ch4.style.background = 'black';
            pizzaStack[2] = "url(images/extraCheese.png)";
            break;
        case "cheeseBtn3":
            ch3.style.background = 'red';
            ch2.style.background = 'black';
            ch1.style.background = 'black';
            ch4.style.background = 'black';
            pizzaStack[2] = "url(images/lightCheese.png)";

            break;
        case "cheeseBtn4":
            ch4.style.background = 'red';
            ch2.style.background = 'black';
            ch3.style.background = 'black';
            ch1.style.background = 'black';
            pizzaStack[2] = "url()";

            break;
    }
    resetBackground();

    pizzaCheese.innerHTML = c;
    console.log(dynListArr);
}
var addBtn = document.getElementById('addToOrderBtn');
addBtn.addEventListener('click', addToOrder);
var finish = document.getElementById('finishOrderBtn');
finish.addEventListener('click', finishOrder);
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

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function finishOrder() {
    console.log("hi")
    modal.style.display = "block";
    orderContainer.innerHTML = '';
    pizzaString = "";
    pizzaCt = 0;
    dynListArr = []
    pizza.style.background = cheese + "," + marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = marinara;
    pizzaStack[2] = cheese;
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    pizzaSauceAmt.innerHTML = "REGULAR";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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
    pizza.style.width = '300px';
    pizza.style.height = '300px';
    pizzaSize.innerHTML = "XL";
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    pizzaSauceAmt.innerHTML = "REGULAR";
    pizzaTop.innerHTML = "EVERYTHING";
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
    pizza.style.background = greenPepper1 + "," + bananaPepper1 + "," + mushroom1 + "," + olives1 + ","
                            + onion1 + "," + spinach1 + "," + bacon1 + "," + salami1 + "," + pepperoni1
                            + "," + sausage1 + "," + ham1 + "," + chicken1 + "," + extraCheese + "," + 
                            marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
}
function addSuperSupreme() {
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
    pizza.style.width = '300px';
    pizza.style.height = '300px';
    pizzaSize.innerHTML = "XL";
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    pizzaSauceAmt.innerHTML = "REGULAR";
    pizzaTop.innerHTML = "Pepperoni";
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
    pizza.style.background = pepperoniExtra + "," + cheese + "," + marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";

}
function addBBQ() {
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
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
    pizza.style.background = spinach1 + "," + onion1 + "," + chicken1 + "," + cheese + "," + bbq + "," + handToss;
    pizza.style.backgroundSize = "cover";
}
function addFiveCheese() {
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
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
    pizza.style.background = lightCheese + "," + cheese + "," + extraCheese + "," + marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
}
function addMeatLovers() {
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
    pizza.style.width = '300px';
    pizza.style.height = '300px';
    pizzaSize.innerHTML = "XL";
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    pizzaSauceAmt.innerHTML = "REGULAR";
    pizzaTop.innerHTML = "PEPPERONI<br/>SAUSAGE<br/>BACON<br/>HAM<br/>SALAMI<br/>CHICKEN";
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
    pizza.style.background = bacon1 + "," + ham1 + "," + pepperoni1 + "," + chicken1 + "," + salami1
                            + "," + sausage1 + "," + cheese + "," + marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
}
var pepp1 = document.getElementById('peppBtn1');
var pepp2 = document.getElementById('peppBtn2');
var pepp3 = document.getElementById('peppBtn3');
var pepp4 = document.getElementById('peppBtn4');
var pepp5 = document.getElementById('peppBtn5');
var pepp6 = document.getElementById('peppBtn6');
var TOPPING_COUNT = 0;

function addPepp(elem) {
    var arrCount = pizzaStack.length;
    var temp = arrCount;
    console.log("temp " + temp);
    console.log('PS ' + arrCount);
    console.log('PS ' + pizzaStack);
    var c = elem.parentElement.innerHTML;
    // c = c.match(cheeseRegex);
    switch (elem.id) {
        case "peppBtn1":
            pepp1.style.background = 'red';
            pepp2.style.background = 'black';
            pepp3.style.background = 'black';
            if (pepp5.style.background == 'red') {
                pizzaStack[3] = "url(images/pepperoniExtraLeft.png)";
                
                TOPPINGS[0] = "PEPPERONI(EXTRA, LEFT)";
            } else if (pepp6.style.background == 'red') {
                pizzaStack[3] = "url(images/pepperoniExtraRight.png)";
                TOPPINGS[0] = "PEPPERONI(EXTRA, RIGHT)";
            } else {

                pizzaStack[3] = "url(images/pepperoniExtra.png)";
                TOPPINGS[0] = "PEPPERONI(EXTRA)";            
            }
            break;
        case "peppBtn2":
            pepp1.style.background = 'black';
            pepp2.style.background = 'red';
            pepp3.style.background = 'black';
            if (pepp5.style.background == 'red') {
                pizzaStack[3] = "url(images/pepperoniLeft.png)";
                TOPPINGS[0] = "PEPPERONI(LEFT)";                

            } else if (pepp6.style.background == 'red') {
                pizzaStack[3] = "url(images/pepperoniRight.png)";
                TOPPINGS[0] = "PEPPERONI(RIGHT)";
            } else {

                pizzaStack[3] = "url(images/pepperoni.png)";
                TOPPINGS[0] = "PEPPERONI";            
            }
            break;
        case "peppBtn3":
            pepp1.style.background = 'black';
            pepp2.style.background = 'black';
            pepp3.style.background = 'red';
            pepp4.style.background = 'black';
            pepp5.style.background = 'black';
            pepp6.style.background = 'black';
            pizzaStack[3] = "url()";
            TOPPINGS[0] = "";            
            break;
        case "peppBtn4":
            pepp4.style.background = 'red';
            pepp5.style.background = 'black';
            pepp6.style.background = 'black';
            if (pepp1.style.background == 'red') {
                pizzaStack[3] = "url(images/pepperoniExtra.png)";
                TOPPINGS[0] = "PEPPERONI(EXTRA)";            
            } else {
                pizzaStack[3] = "url(images/pepperoni.png)";
                TOPPINGS[0] = "PEPPERONI";                        
            }
            break;
        case "peppBtn5":
            pepp4.style.background = 'black';
            pepp5.style.background = 'red';
            pepp6.style.background = 'black';
            if (pepp1.style.background == 'red') {
                pizzaStack[3] = "url(images/pepperoniExtraLeft.png)";
                TOPPINGS[0] = "PEPPERONI(EXTRA, LEFT)";            

            } else {
                pizzaStack[3] = "url(images/pepperoniLeft.png)";
                TOPPINGS[0] = "PEPPERONI(LEFT)";            

            }
            break;
        case "peppBtn6":
            pepp4.style.background = 'black';
            pepp5.style.background = 'black';
            pepp6.style.background = 'red';
            if (pepp1.style.background == 'red') {
                pizzaStack[3] = "url(images/pepperoniExtraRight.png)";
                TOPPINGS[0] = "PEPPERONI(EXTRA, RIGHT)";            
            } else {
                pizzaStack[3] = "url(images/pepperoniRight.png)";
                TOPPINGS[0] = "PEPPERONI(RIGHT)";            
            
            }
            break;

        default:
            pizzaStack[3] = "url()";

            break;
    }
    viewToppings();
    resetBackground();

    // pizzaCheese.innerHTML = c;
    console.log(dynListArr);
}
var pepp1 = document.getElementById('peppBtn1');
var pepp2 = document.getElementById('peppBtn2');
var pepp3 = document.getElementById('peppBtn3');
var pepp4 = document.getElementById('peppBtn4');
var pepp5 = document.getElementById('peppBtn5');
var pepp6 = document.getElementById('peppBtn6');
var TOPPING_COUNT = 0;

function addSausage(elem) {
    toppingAdder(4, sausage, elem);
    // pizzaCheese.innerHTML = c;
    console.log(dynListArr);
}
function addHam(elem) {
    toppingAdder(5, ham, elem);

}
function addBacon(elem) {
    toppingAdder(6, bacon, elem);

}
function addChicken(elem) {
    toppingAdder(7, chicken, elem);

}
function addSalami(elem) {
    toppingAdder(8, salami, elem);

}
function addGreenPepper(elem) {
    toppingAdder(9, greenPepper, elem);

}
function addBananaPepper(elem) {
    toppingAdder(10, bananaPepper, elem);

}
function addMushrooms(elem) {
    toppingAdder(11, mushroom, elem);

}
function addSpinach(elem) {
    toppingAdder(12, spinach, elem);

}
function addOlives(elem) {
    toppingAdder(13,olives, elem);

}
function addOnions(elem) {
    toppingAdder(14, onion, elem);

}

function viewToppings() {
    for(var i =0; i< TOPPINGS.length;i++ ){
        pizzaTop.innerHTML =""+TOPPINGS[i]+"<br/>";
    }
}

function toppingAdder(arrindex, topppingName, e) {
    // var s1 = topppingName.id + 1;
    // var s2 = topppingName.id + 2;
    // var s3 = topppingName.id + 3;
    // var s4 = topppingName.id + 4;
    // var s5 = topppingName.id + 5;
    // var s6 = topppingName.id + 6;
    console.log(s1);
    // console.log("TN " + topppingName.id + 'Btn1');
    var b1name = topppingName.id + 'Btn1';
    var b2name = topppingName.id + 'Btn2';
    var b3name = topppingName.id + 'Btn3';
    var b4name = topppingName.id + 'Btn4';
    var b5name = topppingName.id + 'Btn5';
    var b6name = topppingName.id + 'Btn6';
    console.log(b1name);
    s1 = document.getElementById(b1name);
    s2 = document.getElementById(b2name);
    s3 = document.getElementById(b3name);
    s4 = document.getElementById(b4name);
    s5 = document.getElementById(b5name);
    s6 = document.getElementById(b6name);
    console.log(s1);
    console.log(s1.id)
    var c = e.parentElement.innerHTML;
    // c = c.match(cheeseRegex);
    console.log(topppingName.id + 1);
    console.log(e.id);
    switch (e.id) {
        case b1name:
            s1.style.background = 'red';
            s2.style.background = 'black';
            s3.style.background = 'black';
            if (s5.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraLeft.png)";
TOPPINGS[arrindex] = topppingName.id + "(EXTRA, LEFT)";
            } else if (s6.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraRight.png)";
                TOPPINGS[arrindex] = topppingName.id + "(EXTRA, RIGHT)";
            } else {

                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Extra.png)";
TOPPINGS[arrindex] = topppingName.id + "(EXTRA)";
                
            }
            break;
        case b2name:
            s1.style.background = 'black';
            s2.style.background = 'red';
            s3.style.background = 'black';
            if (s5.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Left.png)";
                TOPPINGS[arrindex] = topppingName.id + "(LEFT)";

            } else if (s6.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Right.png)";
                TOPPINGS[arrindex] = topppingName.id + "(RIGHT)";

            } else {

                pizzaStack[arrindex] = "url(images/" + topppingName.id + ".png)";
TOPPINGS[arrindex] = topppingName.id + "";
            
            }
            break;
        case b3name:
            s1.style.background = 'black';
            s2.style.background = 'black';
            s3.style.background = 'red';
            s4.style.background = 'black';
            s5.style.background = 'black';
            s6.style.background = 'black';
            pizzaStack[arrindex] = "url()";
            TOPPINGS[arrindex] = "";

            break;
        case b4name:
            s4.style.background = 'red';
            s5.style.background = 'black';
            s6.style.background = 'black';
            if (s1.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Extra.png)";
                TOPPINGS[arrindex] = topppingName.id + "(EXTRA)";

            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + ".png)";
TOPPINGS[arrindex] = topppingName.id + "";
            
            }
            break;
        case b5name:
            s4.style.background = 'black';
            s5.style.background = 'red';
            s6.style.background = 'black';
            if (s1.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraLeft.png)";
                TOPPINGS[arrindex] = topppingName.id + "(EXTRA, LEFT)";

            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Left.png)";
TOPPINGS[arrindex] = topppingName.id + "(LEFT)";                
            }
            break;
        case b6name:
            s4.style.background = 'black';
            s5.style.background = 'black';
            s6.style.background = 'red';
            if (s1.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraRight.png)";
                TOPPINGS[arrindex] = topppingName.id + "(EXTRA, RIGHT)";
            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Right.png)";
TOPPINGS[arrindex] = topppingName.id + "(RIGHT)";
            
            }
            break;

        default:
            pizzaStack[arrindex] = "url()";

            break;
    }
    resetBackground();
}