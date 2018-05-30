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

var c1 = document.getElementById('crustBtn1');
var s1 = document.getElementById('sauceBtn1');
var ch1 = document.getElementById('cheeseBtn1');

var supremeBasePrice = 30;
var pepperoniBasePrice = 21;
var bbqBasePrice = 23;
var fivecheeseBasePrice = 20;
var meatsloversBasePrice = 24;


pizza.style.background = cheese + "," + marinara + "," + handToss;
pizza.style.backgroundSize = "cover";
var currPriceHolder = 5;
currentPizzaCostLabel.innerHTML = '$' + currPriceHolder;
pizzaStack[0] = handToss;
pizzaStack[1] = marinara;
pizzaStack[2] = cheese;
c1.style.background = 'red';
ch1.style.background = 'red';
s1.style.background = 'red';
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

    if (isSupreme) {
        currPriceHolder = (supremeBasePrice - 6);
        FNCUSTOMPRICE = currPriceHolder;
    } else if (isPepperoni) {
        pepperoniBasePrice = (pepperoniBasePrice - 6);
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isBBQChicken) {
        currPriceHolder = (bbqBasePrice - 6);
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isFiveCheese) {
        currPriceHolder = (fivecheeseBasePrice - 6);
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isMeatLovers) {
        currPriceHolder = (meatsloversBasePrice - 6);
        FNCUSTOMPRICE = currPriceHolder;

    } else {
        currPriceHolder = 5;

    }
    currentPizzaCostLabel.innerHTML = '$' + currPriceHolder;
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
    if (isSupreme) {
        currPriceHolder = (supremeBasePrice - 4);
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isPepperoni) {
        currPriceHolder = (pepperoniBasePrice - 4);
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isBBQChicken) {
        currPriceHolder = (bbqBasePrice - 4);
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isFiveCheese) {
        currPriceHolder = (fivecheeseBasePrice - 4);
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isMeatLovers) {
        currPriceHolder = (meatsloversBasePrice - 4);
        FNCUSTOMPRICE = currPriceHolder;

    } else {
        currPriceHolder = 7;

    }
    currentPizzaCostLabel.innerHTML = '$' + currPriceHolder;


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
    if (isSupreme) {
        currPriceHolder = (supremeBasePrice - 2);
        FNCUSTOMPRICE = currPriceHolder;
    } else if (isPepperoni) {
        currPriceHolder = (pepperoniBasePrice - 2);
        FNCUSTOMPRICE = currPriceHolder;
    } else if (isBBQChicken) {
        currPriceHolder = (bbqBasePrice - 2);
        FNCUSTOMPRICE = currPriceHolder;
    } else if (isFiveCheese) {
        currPriceHolder = (fivecheeseBasePrice - 2);
        FNCUSTOMPRICE = currPriceHolder;
    } else if (isMeatLovers) {
        currPriceHolder = (meatsloversBasePrice - 2);
        FNCUSTOMPRICE = currPriceHolder;
    } else {

        currPriceHolder = 9;
    }
    currentPizzaCostLabel.innerHTML = '$' + currPriceHolder;


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
    if (isSupreme) {
        currPriceHolder = supremeBasePrice;
        FNCUSTOMPRICE = currPriceHolder;
    } else if (isPepperoni) {
        currPriceHolder = pepperoniBasePrice;
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isBBQChicken) {
        currPriceHolder = bbqBasePrice;
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isFiveCheese) {
        currPriceHolder = fivecheeseBasePrice;
        FNCUSTOMPRICE = currPriceHolder;

    } else if (isMeatLovers) {
        currPriceHolder = meatsloversBasePrice;
        FNCUSTOMPRICE = currPriceHolder;

    } else {

        currPriceHolder = 11;
    }
    currentPizzaCostLabel.innerHTML = '$' + currPriceHolder;

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
    console.log("lenght " + TOPPINGS.length);

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
var isPepperoni = false;
var isBBQChicken = false;
var isFiveCheese = false;
var isMeatLovers = false;

var final = 0;
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
    // if (isSupreme) {
    //     TOTALPRICE += 30;
    // } else if (isPepperoni) {
    //     TOTALPRICE += 17;

    // } else if (isBBQChicken) {
    //     TOTALPRICE += 15;

    // } else if (isFiveCheese) {
    //     TOTALPRICE += 16;

    // } else if (isMeatLovers) {
    //     TOTALPRICE += 16;

    // }
    // TOTALPRICE = currPriceHolder;
    console.log("TP" + TOTALPRICE);
    console.log("FN" + FNCUSTOMPRICE);
    var price = currentPizzaCostLabel.innerHTML;
    console.log(price);
    final += FNCUSTOMPRICE;
    console.log(final);
    totalCostLabel.innerHTML = "$" + final;
    dynListArr = [];
    TOPPINGS = [];
    FNCUSTOMPRICE = 5;
    pizza.style.background = cheese + "," + marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = marinara;
    pizzaStack[2] = cheese;
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    pizzaSauceAmt.innerHTML = "REGULAR";
    currentPizzaCostLabel.innerHTML = "$" + 5;
    supremeBtn.style.background = 'black';
    pepperoniPizzaBtn.style.background = 'black';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'black';
    c1.style.background = 'red';
    ch1.style.background = 'red';
    s1.style.background = 'red';
    ///
    document.getElementById('pepperoniBtn1').style.background = 'black';
    document.getElementById('pepperoniBtn2').style.background = 'black';
    document.getElementById('pepperoniBtn3').style.background = 'black';
    document.getElementById('pepperoniBtn4').style.background = 'black';
    document.getElementById('pepperoniBtn5').style.background = 'black';
    document.getElementById('pepperoniBtn6').style.background = 'black';
    document.getElementById('sausageBtn1').style.background = 'black';
    document.getElementById('sausageBtn2').style.background = 'black';
    document.getElementById('sausageBtn3').style.background = 'black';
    document.getElementById('sausageBtn4').style.background = 'black';
    document.getElementById('sausageBtn5').style.background = 'black';
    document.getElementById('sausageBtn6').style.background = 'black';
    document.getElementById('hamBtn1').style.background = 'black';
    document.getElementById('hamBtn2').style.background = 'black';
    document.getElementById('hamBtn3').style.background = 'black';
    document.getElementById('hamBtn4').style.background = 'black';
    document.getElementById('hamBtn5').style.background = 'black';
    document.getElementById('hamBtn6').style.background = 'black';
    document.getElementById('baconBtn1').style.background = 'black';
    document.getElementById('baconBtn2').style.background = 'black';
    document.getElementById('baconBtn3').style.background = 'black';
    document.getElementById('baconBtn4').style.background = 'black';
    document.getElementById('baconBtn5').style.background = 'black';
    document.getElementById('baconBtn6').style.background = 'black';
    document.getElementById('chickenBtn1').style.background = 'black';
    document.getElementById('chickenBtn2').style.background = 'black';
    document.getElementById('chickenBtn3').style.background = 'black';
    document.getElementById('chickenBtn4').style.background = 'black';
    document.getElementById('chickenBtn5').style.background = 'black';
    document.getElementById('chickenBtn6').style.background = 'black';
    document.getElementById('salamiBtn1').style.background = 'black';
    document.getElementById('salamiBtn2').style.background = 'black';
    document.getElementById('salamiBtn3').style.background = 'black';
    document.getElementById('salamiBtn4').style.background = 'black';
    document.getElementById('salamiBtn5').style.background = 'black';
    document.getElementById('salamiBtn6').style.background = 'black';
    document.getElementById('greenPepperBtn1').style.background = 'black';
    document.getElementById('greenPepperBtn2').style.background = 'black';
    document.getElementById('greenPepperBtn3').style.background = 'black';
    document.getElementById('greenPepperBtn4').style.background = 'black';
    document.getElementById('greenPepperBtn5').style.background = 'black';
    document.getElementById('greenPepperBtn6').style.background = 'black';
    document.getElementById('bananaPepperBtn1').style.background = 'black';
    document.getElementById('bananaPepperBtn2').style.background = 'black';
    document.getElementById('bananaPepperBtn3').style.background = 'black';
    document.getElementById('bananaPepperBtn4').style.background = 'black';
    document.getElementById('bananaPepperBtn5').style.background = 'black';
    document.getElementById('bananaPepperBtn6').style.background = 'black';
    document.getElementById('mushroomBtn1').style.background = 'black';
    document.getElementById('mushroomBtn2').style.background = 'black';
    document.getElementById('mushroomBtn3').style.background = 'black';
    document.getElementById('mushroomBtn4').style.background = 'black';
    document.getElementById('mushroomBtn5').style.background = 'black';
    document.getElementById('mushroomBtn6').style.background = 'black';
    document.getElementById('spinachBtn1').style.background = 'black';
    document.getElementById('spinachBtn2').style.background = 'black';
    document.getElementById('spinachBtn3').style.background = 'black';
    document.getElementById('spinachBtn4').style.background = 'black';
    document.getElementById('spinachBtn5').style.background = 'black';
    document.getElementById('spinachBtn6').style.background = 'black';
    document.getElementById('olivesBtn1').style.background = 'black';
    document.getElementById('olivesBtn2').style.background = 'black';
    document.getElementById('olivesBtn3').style.background = 'black';
    document.getElementById('olivesBtn4').style.background = 'black';
    document.getElementById('olivesBtn5').style.background = 'black';
    document.getElementById('olivesBtn6').style.background = 'black';
    document.getElementById('onionBtn1').style.background = 'black';
    document.getElementById('onionBtn2').style.background = 'black';
    document.getElementById('onionBtn3').style.background = 'black';
    document.getElementById('onionBtn4').style.background = 'black';
    document.getElementById('onionBtn5').style.background = 'black';
    document.getElementById('onionBtn6').style.background = 'black';
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
    currPriceHolder = 5;
    dynListArr = [];
    currentPizzaCostLabel.innerHTML = '$' + 5;
    pizza.style.background = cheese + "," + marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = marinara;
    pizzaStack[2] = cheese;
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    pizzaSauceAmt.innerHTML = "REGULAR";
    c1.style.background = 'red';
    ch1.style.background = 'red';
    s1.style.background = 'red';
    document.getElementById('pepperoniBtn1').style.background = 'black';
    document.getElementById('pepperoniBtn2').style.background = 'black';
    document.getElementById('pepperoniBtn3').style.background = 'black';
    document.getElementById('pepperoniBtn4').style.background = 'black';
    document.getElementById('pepperoniBtn5').style.background = 'black';
    document.getElementById('pepperoniBtn6').style.background = 'black';
    document.getElementById('sausageBtn1').style.background = 'black';
    document.getElementById('sausageBtn2').style.background = 'black';
    document.getElementById('sausageBtn3').style.background = 'black';
    document.getElementById('sausageBtn4').style.background = 'black';
    document.getElementById('sausageBtn5').style.background = 'black';
    document.getElementById('sausageBtn6').style.background = 'black';
    document.getElementById('hamBtn1').style.background = 'black';
    document.getElementById('hamBtn2').style.background = 'black';
    document.getElementById('hamBtn3').style.background = 'black';
    document.getElementById('hamBtn4').style.background = 'black';
    document.getElementById('hamBtn5').style.background = 'black';
    document.getElementById('hamBtn6').style.background = 'black';
    document.getElementById('baconBtn1').style.background = 'black';
    document.getElementById('baconBtn2').style.background = 'black';
    document.getElementById('baconBtn3').style.background = 'black';
    document.getElementById('baconBtn4').style.background = 'black';
    document.getElementById('baconBtn5').style.background = 'black';
    document.getElementById('baconBtn6').style.background = 'black';
    document.getElementById('chickenBtn1').style.background = 'black';
    document.getElementById('chickenBtn2').style.background = 'black';
    document.getElementById('chickenBtn3').style.background = 'black';
    document.getElementById('chickenBtn4').style.background = 'black';
    document.getElementById('chickenBtn5').style.background = 'black';
    document.getElementById('chickenBtn6').style.background = 'black';
    document.getElementById('salamiBtn1').style.background = 'black';
    document.getElementById('salamiBtn2').style.background = 'black';
    document.getElementById('salamiBtn3').style.background = 'black';
    document.getElementById('salamiBtn4').style.background = 'black';
    document.getElementById('salamiBtn5').style.background = 'black';
    document.getElementById('salamiBtn6').style.background = 'black';
    document.getElementById('greenPepperBtn1').style.background = 'black';
    document.getElementById('greenPepperBtn2').style.background = 'black';
    document.getElementById('greenPepperBtn3').style.background = 'black';
    document.getElementById('greenPepperBtn4').style.background = 'black';
    document.getElementById('greenPepperBtn5').style.background = 'black';
    document.getElementById('greenPepperBtn6').style.background = 'black';
    document.getElementById('bananaPepperBtn1').style.background = 'black';
    document.getElementById('bananaPepperBtn2').style.background = 'black';
    document.getElementById('bananaPepperBtn3').style.background = 'black';
    document.getElementById('bananaPepperBtn4').style.background = 'black';
    document.getElementById('bananaPepperBtn5').style.background = 'black';
    document.getElementById('bananaPepperBtn6').style.background = 'black';
    document.getElementById('mushroomBtn1').style.background = 'black';
    document.getElementById('mushroomBtn2').style.background = 'black';
    document.getElementById('mushroomBtn3').style.background = 'black';
    document.getElementById('mushroomBtn4').style.background = 'black';
    document.getElementById('mushroomBtn5').style.background = 'black';
    document.getElementById('mushroomBtn6').style.background = 'black';
    document.getElementById('spinachBtn1').style.background = 'black';
    document.getElementById('spinachBtn2').style.background = 'black';
    document.getElementById('spinachBtn3').style.background = 'black';
    document.getElementById('spinachBtn4').style.background = 'black';
    document.getElementById('spinachBtn5').style.background = 'black';
    document.getElementById('spinachBtn6').style.background = 'black';
    document.getElementById('olivesBtn1').style.background = 'black';
    document.getElementById('olivesBtn2').style.background = 'black';
    document.getElementById('olivesBtn3').style.background = 'black';
    document.getElementById('olivesBtn4').style.background = 'black';
    document.getElementById('olivesBtn5').style.background = 'black';
    document.getElementById('olivesBtn6').style.background = 'black';
    document.getElementById('onionBtn1').style.background = 'black';
    document.getElementById('onionBtn2').style.background = 'black';
    document.getElementById('onionBtn3').style.background = 'black';
    document.getElementById('onionBtn4').style.background = 'black';
    document.getElementById('onionBtn5').style.background = 'black';
    document.getElementById('onionBtn6').style.background = 'black';
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//PRE-BUILT
var supremeBtn = document.getElementById('supremeBtn');
var pepperoniPizzaBtn = document.getElementById('pepperoniPizzaBtn');
var bbqBtn = document.getElementById('bbqBtn');
var fivecheeseBtn = document.getElementById('fivecheeseBtn');
var meatloversBtn = document.getElementById('meatloversBtn');
supremeBtn.addEventListener('click', addSupreme);
pepperoniPizzaBtn.addEventListener('click', addPepperoniPizza);
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
    pepperoniPizzaBtn.style.background = 'black';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'black';
    isSupreme = true;
    isPepperoni = false;
    isBBQChicken = false;
    isFiveCheese = false;
    isMeatLovers = false;
    currentPizzaCostLabel.innerHTML = "$ " + 20;
    FNCUSTOMPRICE = supremeBasePrice;
    TOPPINGS = [];
    currentPizzaCostLabel.innerHTML = "$ " + supremeBasePrice;
    pizza.style.background = greenPepper1 + "," + bananaPepper1 + "," + mushroom1 + "," + olives1 + ","
        + onion1 + "," + spinach1 + "," + bacon1 + "," + salami1 + "," + pepperoni1
        + "," + sausage1 + "," + ham1 + "," + chicken1 + "," + extraCheese + "," +
        marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = marinara;
    pizzaStack[2] = cheese;
    pizzaStack[3] = pepperoni1;
    pizzaStack[4] = sausage1;
    pizzaStack[5] = ham1;
    pizzaStack[6] = bacon1;
    pizzaStack[7] = chicken1;
    pizzaStack[8] = salami1;
    pizzaStack[9] = greenPepper1;
    pizzaStack[10] = bananaPepper1;
    pizzaStack[11] = mushroom1;
    pizzaStack[12] = spinach1;
    pizzaStack[13] = olives1;
    pizzaStack[14] = onion1;
    currPriceHolder = 20;
    document.getElementById('pepperoniBtn1').style.background = 'black';
    document.getElementById('pepperoniBtn2').style.background = 'red';
    document.getElementById('pepperoniBtn3').style.background = 'black';
    document.getElementById('pepperoniBtn4').style.background = 'black';
    document.getElementById('pepperoniBtn5').style.background = 'black';
    document.getElementById('pepperoniBtn6').style.background = 'black';
    document.getElementById('sausageBtn1').style.background = 'black';
    document.getElementById('sausageBtn2').style.background = 'red';
    document.getElementById('sausageBtn3').style.background = 'black';
    document.getElementById('sausageBtn4').style.background = 'black';
    document.getElementById('sausageBtn5').style.background = 'black';
    document.getElementById('sausageBtn6').style.background = 'black';
    document.getElementById('hamBtn1').style.background = 'black';
    document.getElementById('hamBtn2').style.background = 'red';
    document.getElementById('hamBtn3').style.background = 'black';
    document.getElementById('hamBtn4').style.background = 'black';
    document.getElementById('hamBtn5').style.background = 'black';
    document.getElementById('hamBtn6').style.background = 'black';
    document.getElementById('baconBtn1').style.background = 'black';
    document.getElementById('baconBtn2').style.background = 'red';
    document.getElementById('baconBtn3').style.background = 'black';
    document.getElementById('baconBtn4').style.background = 'black';
    document.getElementById('baconBtn5').style.background = 'black';
    document.getElementById('baconBtn6').style.background = 'black';
    document.getElementById('chickenBtn1').style.background = 'black';
    document.getElementById('chickenBtn2').style.background = 'red';
    document.getElementById('chickenBtn3').style.background = 'black';
    document.getElementById('chickenBtn4').style.background = 'black';
    document.getElementById('chickenBtn5').style.background = 'black';
    document.getElementById('chickenBtn6').style.background = 'black';
    document.getElementById('salamiBtn1').style.background = 'black';
    document.getElementById('salamiBtn2').style.background = 'red';
    document.getElementById('salamiBtn3').style.background = 'black';
    document.getElementById('salamiBtn4').style.background = 'black';
    document.getElementById('salamiBtn5').style.background = 'black';
    document.getElementById('salamiBtn6').style.background = 'black';
    document.getElementById('greenPepperBtn1').style.background = 'black';
    document.getElementById('greenPepperBtn2').style.background = 'red';
    document.getElementById('greenPepperBtn3').style.background = 'black';
    document.getElementById('greenPepperBtn4').style.background = 'black';
    document.getElementById('greenPepperBtn5').style.background = 'black';
    document.getElementById('greenPepperBtn6').style.background = 'black';
    document.getElementById('bananaPepperBtn1').style.background = 'black';
    document.getElementById('bananaPepperBtn2').style.background = 'red';
    document.getElementById('bananaPepperBtn3').style.background = 'black';
    document.getElementById('bananaPepperBtn4').style.background = 'black';
    document.getElementById('bananaPepperBtn5').style.background = 'black';
    document.getElementById('bananaPepperBtn6').style.background = 'black';
    document.getElementById('mushroomBtn1').style.background = 'black';
    document.getElementById('mushroomBtn2').style.background = 'red';
    document.getElementById('mushroomBtn3').style.background = 'black';
    document.getElementById('mushroomBtn4').style.background = 'black';
    document.getElementById('mushroomBtn5').style.background = 'black';
    document.getElementById('mushroomBtn6').style.background = 'black';
    document.getElementById('spinachBtn1').style.background = 'black';
    document.getElementById('spinachBtn2').style.background = 'red';
    document.getElementById('spinachBtn3').style.background = 'black';
    document.getElementById('spinachBtn4').style.background = 'black';
    document.getElementById('spinachBtn5').style.background = 'black';
    document.getElementById('spinachBtn6').style.background = 'black';
    document.getElementById('olivesBtn1').style.background = 'black';
    document.getElementById('olivesBtn2').style.background = 'red';
    document.getElementById('olivesBtn3').style.background = 'black';
    document.getElementById('olivesBtn4').style.background = 'black';
    document.getElementById('olivesBtn5').style.background = 'black';
    document.getElementById('olivesBtn6').style.background = 'black';
    document.getElementById('onionBtn1').style.background = 'black';
    document.getElementById('onionBtn2').style.background = 'red';
    document.getElementById('onionBtn3').style.background = 'black';
    document.getElementById('onionBtn4').style.background = 'black';
    document.getElementById('onionBtn5').style.background = 'black';
    document.getElementById('onionBtn6').style.background = 'black';
    TOPPINGS[3] = "PEPPERONI";
    TOPPINGS[4] = "SAUSAGE";
    TOPPINGS[5] = "HAM";
    TOPPINGS[6] = "BACON";
    TOPPINGS[7] = "CHICKEN";
    TOPPINGS[8] = "SALAMI";
    TOPPINGS[9] = "GREENPEPPER";
    TOPPINGS[10] = "BANANAPERPPER";
    TOPPINGS[11] = "MUSHROOM";
    TOPPINGS[12] = "SPINACH";
    TOPPINGS[13] = "OLIVES";
    TOPPINGS[14] = "ONIONS";
    viewToppings();
}
function addPepperoniPizza() {
    TOPPINGS = [];
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
    pizzaTop.innerHTML = "PEPPERONI";
    supremeBtn.style.background = 'black';
    pepperoniPizzaBtn.style.background = 'red';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'black';
    isSupreme = false;
    isPepperoni = true;
    isBBQChicken = false;
    isFiveCheese = false;
    isMeatLovers = false;
    currentPizzaCostLabel.innerHTML = "$ " + 11;
    FNCUSTOMPRICE = pepperoniBasePrice;
    currentPizzaCostLabel.innerHTML = "$ " + pepperoniBasePrice;
    pizza.style.background = pepperoniExtra + "," + cheese + "," + marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = marinara;
    pizzaStack[2] = cheese;
    pizzaStack[3] = pepperoniExtra;
    currPriceHolder = 11;
    document.getElementById('pepperoniBtn1').style.background = 'black';
    document.getElementById('pepperoniBtn2').style.background = 'red';
    document.getElementById('pepperoniBtn3').style.background = 'black';
    document.getElementById('pepperoniBtn4').style.background = 'black';
    document.getElementById('pepperoniBtn5').style.background = 'black';
    document.getElementById('pepperoniBtn6').style.background = 'black';
    document.getElementById('sausageBtn1').style.background = 'black';
    document.getElementById('sausageBtn2').style.background = 'black';
    document.getElementById('sausageBtn3').style.background = 'black';
    document.getElementById('sausageBtn4').style.background = 'black';
    document.getElementById('sausageBtn5').style.background = 'black';
    document.getElementById('sausageBtn6').style.background = 'black';
    document.getElementById('hamBtn1').style.background = 'black';
    document.getElementById('hamBtn2').style.background = 'black';
    document.getElementById('hamBtn3').style.background = 'black';
    document.getElementById('hamBtn4').style.background = 'black';
    document.getElementById('hamBtn5').style.background = 'black';
    document.getElementById('hamBtn6').style.background = 'black';
    document.getElementById('baconBtn1').style.background = 'black';
    document.getElementById('baconBtn2').style.background = 'black';
    document.getElementById('baconBtn3').style.background = 'black';
    document.getElementById('baconBtn4').style.background = 'black';
    document.getElementById('baconBtn5').style.background = 'black';
    document.getElementById('baconBtn6').style.background = 'black';
    document.getElementById('chickenBtn1').style.background = 'black';
    document.getElementById('chickenBtn2').style.background = 'black';
    document.getElementById('chickenBtn3').style.background = 'black';
    document.getElementById('chickenBtn4').style.background = 'black';
    document.getElementById('chickenBtn5').style.background = 'black';
    document.getElementById('chickenBtn6').style.background = 'black';
    document.getElementById('salamiBtn1').style.background = 'black';
    document.getElementById('salamiBtn2').style.background = 'black';
    document.getElementById('salamiBtn3').style.background = 'black';
    document.getElementById('salamiBtn4').style.background = 'black';
    document.getElementById('salamiBtn5').style.background = 'black';
    document.getElementById('salamiBtn6').style.background = 'black';
    document.getElementById('greenPepperBtn1').style.background = 'black';
    document.getElementById('greenPepperBtn2').style.background = 'black';
    document.getElementById('greenPepperBtn3').style.background = 'black';
    document.getElementById('greenPepperBtn4').style.background = 'black';
    document.getElementById('greenPepperBtn5').style.background = 'black';
    document.getElementById('greenPepperBtn6').style.background = 'black';
    document.getElementById('bananaPepperBtn1').style.background = 'black';
    document.getElementById('bananaPepperBtn2').style.background = 'black';
    document.getElementById('bananaPepperBtn3').style.background = 'black';
    document.getElementById('bananaPepperBtn4').style.background = 'black';
    document.getElementById('bananaPepperBtn5').style.background = 'black';
    document.getElementById('bananaPepperBtn6').style.background = 'black';
    document.getElementById('mushroomBtn1').style.background = 'black';
    document.getElementById('mushroomBtn2').style.background = 'black';
    document.getElementById('mushroomBtn3').style.background = 'black';
    document.getElementById('mushroomBtn4').style.background = 'black';
    document.getElementById('mushroomBtn5').style.background = 'black';
    document.getElementById('mushroomBtn6').style.background = 'black';
    document.getElementById('spinachBtn1').style.background = 'black';
    document.getElementById('spinachBtn2').style.background = 'black';
    document.getElementById('spinachBtn3').style.background = 'black';
    document.getElementById('spinachBtn4').style.background = 'black';
    document.getElementById('spinachBtn5').style.background = 'black';
    document.getElementById('spinachBtn6').style.background = 'black';
    document.getElementById('olivesBtn1').style.background = 'black';
    document.getElementById('olivesBtn2').style.background = 'black';
    document.getElementById('olivesBtn3').style.background = 'black';
    document.getElementById('olivesBtn4').style.background = 'black';
    document.getElementById('olivesBtn5').style.background = 'black';
    document.getElementById('olivesBtn6').style.background = 'black';
    document.getElementById('onionBtn1').style.background = 'black';
    document.getElementById('onionBtn2').style.background = 'black';
    document.getElementById('onionBtn3').style.background = 'black';
    document.getElementById('onionBtn4').style.background = 'black';
    document.getElementById('onionBtn5').style.background = 'black';
    document.getElementById('onionBtn6').style.background = 'black';
    TOPPINGS[3] = "PEPPERONI";
    viewToppings();
}
function addBBQ() {
    TOPPINGS = [];
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
    pepperoniPizzaBtn.style.background = 'black';
    bbqBtn.style.background = 'red';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'black';
    isSupreme = false;
    isPepperoni = false;
    isBBQChicken = true;
    isFiveCheese = false;
    isMeatLovers = false;
    currentPizzaCostLabel.innerHTML = "$ " + 13;
    FNCUSTOMPRICE = bbqBasePrice;
    currentPizzaCostLabel.innerHTML = "$ " + bbqBasePrice;
    pizza.style.background = spinach1 + "," + onion1 + "," + chicken1 + "," + cheese + "," + bbq + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = bbq;
    pizzaStack[2] = cheese;
    pizzaStack[7] = chicken1;
    pizzaStack[12] = spinach1;
    pizzaStack[14] = onion1;
    currPriceHolder = 13;
    document.getElementById('pepperoniBtn1').style.background = 'black';
    document.getElementById('pepperoniBtn2').style.background = 'red';
    document.getElementById('pepperoniBtn3').style.background = 'black';
    document.getElementById('pepperoniBtn4').style.background = 'black';
    document.getElementById('pepperoniBtn5').style.background = 'black';
    document.getElementById('pepperoniBtn6').style.background = 'black';
    document.getElementById('sausageBtn1').style.background = 'black';
    document.getElementById('sausageBtn2').style.background = 'black';
    document.getElementById('sausageBtn3').style.background = 'black';
    document.getElementById('sausageBtn4').style.background = 'black';
    document.getElementById('sausageBtn5').style.background = 'black';
    document.getElementById('sausageBtn6').style.background = 'black';
    document.getElementById('hamBtn1').style.background = 'black';
    document.getElementById('hamBtn2').style.background = 'black';
    document.getElementById('hamBtn3').style.background = 'black';
    document.getElementById('hamBtn4').style.background = 'black';
    document.getElementById('hamBtn5').style.background = 'black';
    document.getElementById('hamBtn6').style.background = 'black';
    document.getElementById('baconBtn1').style.background = 'black';
    document.getElementById('baconBtn2').style.background = 'black';
    document.getElementById('baconBtn3').style.background = 'black';
    document.getElementById('baconBtn4').style.background = 'black';
    document.getElementById('baconBtn5').style.background = 'black';
    document.getElementById('baconBtn6').style.background = 'black';
    document.getElementById('chickenBtn1').style.background = 'black';
    document.getElementById('chickenBtn2').style.background = 'red';
    document.getElementById('chickenBtn3').style.background = 'black';
    document.getElementById('chickenBtn4').style.background = 'black';
    document.getElementById('chickenBtn5').style.background = 'black';
    document.getElementById('chickenBtn6').style.background = 'black';
    document.getElementById('salamiBtn1').style.background = 'black';
    document.getElementById('salamiBtn2').style.background = 'black';
    document.getElementById('salamiBtn3').style.background = 'black';
    document.getElementById('salamiBtn4').style.background = 'black';
    document.getElementById('salamiBtn5').style.background = 'black';
    document.getElementById('salamiBtn6').style.background = 'black';
    document.getElementById('greenPepperBtn1').style.background = 'black';
    document.getElementById('greenPepperBtn2').style.background = 'black';
    document.getElementById('greenPepperBtn3').style.background = 'black';
    document.getElementById('greenPepperBtn4').style.background = 'black';
    document.getElementById('greenPepperBtn5').style.background = 'black';
    document.getElementById('greenPepperBtn6').style.background = 'black';
    document.getElementById('bananaPepperBtn1').style.background = 'black';
    document.getElementById('bananaPepperBtn2').style.background = 'black';
    document.getElementById('bananaPepperBtn3').style.background = 'black';
    document.getElementById('bananaPepperBtn4').style.background = 'black';
    document.getElementById('bananaPepperBtn5').style.background = 'black';
    document.getElementById('bananaPepperBtn6').style.background = 'black';
    document.getElementById('mushroomBtn1').style.background = 'black';
    document.getElementById('mushroomBtn2').style.background = 'black';
    document.getElementById('mushroomBtn3').style.background = 'black';
    document.getElementById('mushroomBtn4').style.background = 'black';
    document.getElementById('mushroomBtn5').style.background = 'black';
    document.getElementById('mushroomBtn6').style.background = 'black';
    document.getElementById('spinachBtn1').style.background = 'black';
    document.getElementById('spinachBtn2').style.background = 'red';
    document.getElementById('spinachBtn3').style.background = 'black';
    document.getElementById('spinachBtn4').style.background = 'black';
    document.getElementById('spinachBtn5').style.background = 'black';
    document.getElementById('spinachBtn6').style.background = 'black';
    document.getElementById('olivesBtn1').style.background = 'black';
    document.getElementById('olivesBtn2').style.background = 'black';
    document.getElementById('olivesBtn3').style.background = 'black';
    document.getElementById('olivesBtn4').style.background = 'black';
    document.getElementById('olivesBtn5').style.background = 'black';
    document.getElementById('olivesBtn6').style.background = 'black';
    document.getElementById('onionBtn1').style.background = 'black';
    document.getElementById('onionBtn2').style.background = 'red';
    document.getElementById('onionBtn3').style.background = 'black';
    document.getElementById('onionBtn4').style.background = 'black';
    document.getElementById('onionBtn5').style.background = 'black';
    document.getElementById('onionBtn6').style.background = 'black';
    TOPPINGS[7] = "CHICKEN";
    TOPPINGS[12] = "SPINACH";
    TOPPINGS[14] = "ONIONS";
    viewToppings();
}
function addFiveCheese() {
    TOPPINGS = [];
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
    pepperoniPizzaBtn.style.background = 'black';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'red';
    meatloversBtn.style.background = 'black';
    isSupreme = false;
    isPepperoni = false;
    isBBQChicken = false;
    isFiveCheese = true;
    isMeatLovers = false;
    currentPizzaCostLabel.innerHTML = "$ " + 11;
    FNCUSTOMPRICE = fivecheeseBasePrice;
    currentPizzaCostLabel.innerHTML = "$ " + fivecheeseBasePrice;
    pizza.style.background = lightCheese + "," + cheese + "," + extraCheese + "," + garlicParm + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = garlicParm;
    pizzaStack[2] = extraCheese;
    currPriceHolder = 11;
    document.getElementById('sauceBtn1').style.background = 'black';
    document.getElementById('sauceBtn5').style.background = 'red';
    document.getElementById('cheeseBtn1').style.background = 'black';
    document.getElementById('cheeseBtn2').style.background = 'red';
    document.getElementById('pepperoniBtn1').style.background = 'black';
    document.getElementById('pepperoniBtn2').style.background = 'black';
    document.getElementById('pepperoniBtn3').style.background = 'black';
    document.getElementById('pepperoniBtn4').style.background = 'black';
    document.getElementById('pepperoniBtn5').style.background = 'black';
    document.getElementById('pepperoniBtn6').style.background = 'black';
    document.getElementById('sausageBtn1').style.background = 'black';
    document.getElementById('sausageBtn2').style.background = 'black';
    document.getElementById('sausageBtn3').style.background = 'black';
    document.getElementById('sausageBtn4').style.background = 'black';
    document.getElementById('sausageBtn5').style.background = 'black';
    document.getElementById('sausageBtn6').style.background = 'black';
    document.getElementById('hamBtn1').style.background = 'black';
    document.getElementById('hamBtn2').style.background = 'black';
    document.getElementById('hamBtn3').style.background = 'black';
    document.getElementById('hamBtn4').style.background = 'black';
    document.getElementById('hamBtn5').style.background = 'black';
    document.getElementById('hamBtn6').style.background = 'black';
    document.getElementById('baconBtn1').style.background = 'black';
    document.getElementById('baconBtn2').style.background = 'black';
    document.getElementById('baconBtn3').style.background = 'black';
    document.getElementById('baconBtn4').style.background = 'black';
    document.getElementById('baconBtn5').style.background = 'black';
    document.getElementById('baconBtn6').style.background = 'black';
    document.getElementById('chickenBtn1').style.background = 'black';
    document.getElementById('chickenBtn2').style.background = 'black';
    document.getElementById('chickenBtn3').style.background = 'black';
    document.getElementById('chickenBtn4').style.background = 'black';
    document.getElementById('chickenBtn5').style.background = 'black';
    document.getElementById('chickenBtn6').style.background = 'black';
    document.getElementById('salamiBtn1').style.background = 'black';
    document.getElementById('salamiBtn2').style.background = 'black';
    document.getElementById('salamiBtn3').style.background = 'black';
    document.getElementById('salamiBtn4').style.background = 'black';
    document.getElementById('salamiBtn5').style.background = 'black';
    document.getElementById('salamiBtn6').style.background = 'black';
    document.getElementById('greenPepperBtn1').style.background = 'black';
    document.getElementById('greenPepperBtn2').style.background = 'black';
    document.getElementById('greenPepperBtn3').style.background = 'black';
    document.getElementById('greenPepperBtn4').style.background = 'black';
    document.getElementById('greenPepperBtn5').style.background = 'black';
    document.getElementById('greenPepperBtn6').style.background = 'black';
    document.getElementById('bananaPepperBtn1').style.background = 'black';
    document.getElementById('bananaPepperBtn2').style.background = 'black';
    document.getElementById('bananaPepperBtn3').style.background = 'black';
    document.getElementById('bananaPepperBtn4').style.background = 'black';
    document.getElementById('bananaPepperBtn5').style.background = 'black';
    document.getElementById('bananaPepperBtn6').style.background = 'black';
    document.getElementById('mushroomBtn1').style.background = 'black';
    document.getElementById('mushroomBtn2').style.background = 'black';
    document.getElementById('mushroomBtn3').style.background = 'black';
    document.getElementById('mushroomBtn4').style.background = 'black';
    document.getElementById('mushroomBtn5').style.background = 'black';
    document.getElementById('mushroomBtn6').style.background = 'black';
    document.getElementById('spinachBtn1').style.background = 'black';
    document.getElementById('spinachBtn2').style.background = 'black';
    document.getElementById('spinachBtn3').style.background = 'black';
    document.getElementById('spinachBtn4').style.background = 'black';
    document.getElementById('spinachBtn5').style.background = 'black';
    document.getElementById('spinachBtn6').style.background = 'black';
    document.getElementById('olivesBtn1').style.background = 'black';
    document.getElementById('olivesBtn2').style.background = 'black';
    document.getElementById('olivesBtn3').style.background = 'black';
    document.getElementById('olivesBtn4').style.background = 'black';
    document.getElementById('olivesBtn5').style.background = 'black';
    document.getElementById('olivesBtn6').style.background = 'black';
    document.getElementById('onionBtn1').style.background = 'black';
    document.getElementById('onionBtn2').style.background = 'black';
    document.getElementById('onionBtn3').style.background = 'black';
    document.getElementById('onionBtn4').style.background = 'black';
    document.getElementById('onionBtn5').style.background = 'black';
    document.getElementById('onionBtn6').style.background = 'black';
}
function addMeatLovers() {
    TOPPINGS = [];
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
    supremeBtn.style.background = 'black';
    pepperoniPizzaBtn.style.background = 'black';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'red';
    isSupreme = false;
    isPepperoni = false;
    isBBQChicken = false;
    isFiveCheese = false;
    isMeatLovers = true;
    currentPizzaCostLabel.innerHTML = "$ " + 14;
    FNCUSTOMPRICE = meatsloversBasePrice;
    currentPizzaCostLabel.innerHTML = "$ " + meatsloversBasePrice;
    pizza.style.background = bacon1 + "," + ham1 + "," + pepperoni1 + "," + chicken1 + "," + salami1
                            + "," + sausage1 + "," + cheese + "," + marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = marinara;
    pizzaStack[2] = cheese;
    pizzaStack[3] = pepperoni1;
    pizzaStack[4] = sausage1;
    pizzaStack[5] = ham1;
    pizzaStack[6] = bacon1;
    pizzaStack[7] = chicken1;
    pizzaStack[8] = salami1;
    currPriceHolder = 14;
    document.getElementById('pepperoniBtn1').style.background = 'black';
    document.getElementById('pepperoniBtn2').style.background = 'red';
    document.getElementById('pepperoniBtn3').style.background = 'black';
    document.getElementById('pepperoniBtn4').style.background = 'black';
    document.getElementById('pepperoniBtn5').style.background = 'black';
    document.getElementById('pepperoniBtn6').style.background = 'black';
    document.getElementById('sausageBtn1').style.background = 'black';
    document.getElementById('sausageBtn2').style.background = 'red';
    document.getElementById('sausageBtn3').style.background = 'black';
    document.getElementById('sausageBtn4').style.background = 'black';
    document.getElementById('sausageBtn5').style.background = 'black';
    document.getElementById('sausageBtn6').style.background = 'black';
    document.getElementById('hamBtn1').style.background = 'black';
    document.getElementById('hamBtn2').style.background = 'red';
    document.getElementById('hamBtn3').style.background = 'black';
    document.getElementById('hamBtn4').style.background = 'black';
    document.getElementById('hamBtn5').style.background = 'black';
    document.getElementById('hamBtn6').style.background = 'black';
    document.getElementById('baconBtn1').style.background = 'black';
    document.getElementById('baconBtn2').style.background = 'red';
    document.getElementById('baconBtn3').style.background = 'black';
    document.getElementById('baconBtn4').style.background = 'black';
    document.getElementById('baconBtn5').style.background = 'black';
    document.getElementById('baconBtn6').style.background = 'black';
    document.getElementById('chickenBtn1').style.background = 'black';
    document.getElementById('chickenBtn2').style.background = 'red';
    document.getElementById('chickenBtn3').style.background = 'black';
    document.getElementById('chickenBtn4').style.background = 'black';
    document.getElementById('chickenBtn5').style.background = 'black';
    document.getElementById('chickenBtn6').style.background = 'black';
    document.getElementById('salamiBtn1').style.background = 'black';
    document.getElementById('salamiBtn2').style.background = 'red';
    document.getElementById('salamiBtn3').style.background = 'black';
    document.getElementById('salamiBtn4').style.background = 'black';
    document.getElementById('salamiBtn5').style.background = 'black';
    document.getElementById('salamiBtn6').style.background = 'black';
    document.getElementById('greenPepperBtn1').style.background = 'black';
    document.getElementById('greenPepperBtn2').style.background = 'black';
    document.getElementById('greenPepperBtn3').style.background = 'black';
    document.getElementById('greenPepperBtn4').style.background = 'black';
    document.getElementById('greenPepperBtn5').style.background = 'black';
    document.getElementById('greenPepperBtn6').style.background = 'black';
    document.getElementById('bananaPepperBtn1').style.background = 'black';
    document.getElementById('bananaPepperBtn2').style.background = 'black';
    document.getElementById('bananaPepperBtn3').style.background = 'black';
    document.getElementById('bananaPepperBtn4').style.background = 'black';
    document.getElementById('bananaPepperBtn5').style.background = 'black';
    document.getElementById('bananaPepperBtn6').style.background = 'black';
    document.getElementById('mushroomBtn1').style.background = 'black';
    document.getElementById('mushroomBtn2').style.background = 'black';
    document.getElementById('mushroomBtn3').style.background = 'black';
    document.getElementById('mushroomBtn4').style.background = 'black';
    document.getElementById('mushroomBtn5').style.background = 'black';
    document.getElementById('mushroomBtn6').style.background = 'black';
    document.getElementById('spinachBtn1').style.background = 'black';
    document.getElementById('spinachBtn2').style.background = 'black';
    document.getElementById('spinachBtn3').style.background = 'black';
    document.getElementById('spinachBtn4').style.background = 'black';
    document.getElementById('spinachBtn5').style.background = 'black';
    document.getElementById('spinachBtn6').style.background = 'black';
    document.getElementById('olivesBtn1').style.background = 'black';
    document.getElementById('olivesBtn2').style.background = 'black';
    document.getElementById('olivesBtn3').style.background = 'black';
    document.getElementById('olivesBtn4').style.background = 'black';
    document.getElementById('olivesBtn5').style.background = 'black';
    document.getElementById('olivesBtn6').style.background = 'black';
    document.getElementById('onionBtn1').style.background = 'black';
    document.getElementById('onionBtn2').style.background = 'black';
    document.getElementById('onionBtn3').style.background = 'black';
    document.getElementById('onionBtn4').style.background = 'black';
    document.getElementById('onionBtn5').style.background = 'black';
    document.getElementById('onionBtn6').style.background = 'black';
    TOPPINGS[3] = "PEPPERONI";
    TOPPINGS[4] = "SAUSAGE";
    TOPPINGS[5] = "HAM";
    TOPPINGS[6] = "BACON";
    TOPPINGS[7] = "CHICKEN";
    TOPPINGS[8] = "SALAMI";
    viewToppings();
}

var pepp2 = document.getElementById('peppBtn2');
var pepp3 = document.getElementById('peppBtn3');
var pepp4 = document.getElementById('peppBtn4');
var pepp5 = document.getElementById('peppBtn5');
var pepp6 = document.getElementById('peppBtn6');
var TOPPING_COUNT = 0;
var toppingCounter = 0;
var selected = 0;
var b1selected = false;
var b2selected = false;
var b3selected = false;
var b4selected = false;
var b5selected = false;
var b6selected = false;

function addPepp(elem) {
    toppingAdder(3, pepperoni, elem)

}
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
    toppingAdder(13, olives, elem);

}
function addOnions(elem) {
    toppingAdder(14, onion, elem);

}

var alreadygone = false;
var alreadygone2 = false;
var alreadygone3 = false;
var alreadygone4 = false;
var alreadygone5 = false;
var alreadygone6 = false;
var alreadygone7 = false;
var alreadygone8 = false;
var alreadygone9 = false;
var alreadygone10 = false;
var alreadygone11 = false;
var alreadygone12 = false;
var l = TOPPINGS.length;
var len = 0;
var newARR = [];
var FNCUSTOMPRICE = 5;
function viewToppings() {
    for (var y = 0; y < TOPPINGS.length; y++) {
        if (TOPPINGS[y] != undefined || TOPPINGS[y] != "," || !TOPPINGS[y].contains(',')) {
            newARR[y] = TOPPINGS[y];
        }

        // TOPPINGS.splice(0,TOPPINGS.length-1,"");
        // if (TOPPINGS[y] == undefined) {
        //     TOPPINGS[y] = "";
        // }
        // if (TOPPINGS[y] != "" && TOPPINGS[y] !=  undefined &&TOPPINGS[y] != ",") {
        //     len++;
        // }
        // console.log(TOPPINGS[y]);
        // console.log(newARR);
    }
    function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    }


    len = cleanArray(TOPPINGS).length;
    console.log("len " + len);
    console.log("TOPP " + cleanArray(TOPPINGS));

    l = TOPPINGS.length;
    pizzaTop.innerHTML = "";
    console.log("lenght " + (l));
    var x = currPriceHolder;
    console.log(x);
    console.log(x + 1);
    var currPrice = x;
    if (len == 1) {
        console.log(currPrice);
        currentPizzaCostLabel.innerHTML = "$ " + currPrice;

    } else if (len == 5) {
        currPrice = x + (len - 2);
        currentPizzaCostLabel.innerHTML = "$ " + currPrice;
        document.getElementById('dealtext').style.visibility = 'visible';
    } else if (len > 5) {
        currPrice = x + (len - 2);
        currentPizzaCostLabel.innerHTML = "$ " + currPrice;
        document.getElementById('dealtext').style.visibility = 'hidden';

    }
    else {
        document.getElementById('dealtext').style.visibility = 'hidden';
        currPrice = x + (len - 1);
        console.log(currPrice);
        currentPizzaCostLabel.innerHTML = "$ " + currPrice;
    }
    FNCUSTOMPRICE = currPrice;
    for (var i = 0; i < TOPPINGS.length; i++) {
        if (TOPPINGS[i] != undefined && TOPPINGS[i] != "") {

            pizzaTop.innerHTML += "" + TOPPINGS[i] + "<br/>";
        }
    }
}
var alreadySubtracted = false;
var alreadySubtracted2 = false;
var alreadySubtracted3 = false;
var alreadySubtracted4 = false;
var alreadySubtracted5 = false;
var alreadySubtracted6 = false;
var alreadySubtracted7 = false;
var alreadySubtracted8 = false;
var alreadySubtracted9 = false;
var alreadySubtracted10 = false;
var alreadySubtracted11 = false;
var alreadySubtracted12 = false;
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
    // console.log(b1name);
    s1 = document.getElementById(b1name);
    s2 = document.getElementById(b2name);
    s3 = document.getElementById(b3name);
    s4 = document.getElementById(b4name);
    s5 = document.getElementById(b5name);
    s6 = document.getElementById(b6name);
    // console.log(s1);
    // console.log(s1.id)
    var c = e.parentElement.innerHTML;
    // c = c.match(cheeseRegex);
    // console.log(topppingName.id + 1);
    // console.log(e.id);
    switch (e.id) {
        case b1name:
            s1.style.background = 'red';
            s2.style.background = 'black';
            s3.style.background = 'black';
            if (s5.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraLeft.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA, LEFT)";
            } else if (s6.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraRight.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA, RIGHT)";
            } else {

                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Extra.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA)";

            }
            b1selected = true;
            selected = 1;
            break;
        case b2name:
            s1.style.background = 'black';
            s2.style.background = 'red';
            s3.style.background = 'black';
            if (s5.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Left.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(LEFT)";

            } else if (s6.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Right.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(RIGHT)";

            } else {

                pizzaStack[arrindex] = "url(images/" + topppingName.id + ".png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "";

            }
            selected = 1;
            break;
        case b3name:
            var x = currPriceHolder;
            s1.style.background = 'black';
            s2.style.background = 'black';
            s3.style.background = 'red';
            s4.style.background = 'black';
            s5.style.background = 'black';
            s6.style.background = 'black';
            pizzaStack[arrindex] = "url()";
            TOPPINGS[arrindex] = "";

            console.log("len inside DEL: " + len);
            console.log("DEL :" + TOPPINGS.length);
            len -= 1;
            if (isSupreme) {
                switch (topppingName.id) {
                    case "pepperoni":
console.log("MADE IT");
TOPPINGS[3] = "";
                        pizza.style.background = greenPepper1 + "," + bananaPepper1 + "," + mushroom1 + "," + olives1 + ","
                            + onion1 + "," + spinach1 + "," + bacon1 + "," + salami1 + ","
                            + sausage1 + "," + ham1 + "," + chicken1 + "," + extraCheese + "," +
                            marinara + "," + handToss;
                        pizza.style.backgroundSize = "cover";
                        break;
                }
            }
            // if (TOPPINGS.length > 4) {
            //     TOPPINGS.pop();
            // }
            // selected = 1;
            // var currPrice = (x + l) - 2;
            // console.log("INSIDE DELEETE: " + currPrice);
            // currentPizzaCostLabel.innerHTML = "$ " + currPrice;

            break;

        case b4name:
            s3.style.background = 'black';
            s4.style.background = 'red';
            s5.style.background = 'black';
            s6.style.background = 'black';
            if (s1.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Extra.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA)";

            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + ".png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "";

            }
            selected = 1;

            break;

        case b5name:
            s3.style.background = 'black';

            s4.style.background = 'black';
            s5.style.background = 'red';
            s6.style.background = 'black';
            if (s1.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraLeft.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA, LEFT)";

            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Left.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(LEFT)";
            }

            selected = 1;

            break;
        case b6name:
            s3.style.background = 'black';

            s4.style.background = 'black';
            s5.style.background = 'black';
            s6.style.background = 'red';
            if (s1.style.background == 'red') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraRight.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA, RIGHT)";
            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id.toUpperCase() + "Right.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(RIGHT)";

            }

            selected = 1;

            break;

        default:
            pizzaStack[arrindex] = "url()";

            break;
    }

    viewToppings();
    resetBackground();
}