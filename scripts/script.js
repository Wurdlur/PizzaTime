var sizeRegex = /S|M|L|XL/;
var toppingRegex = /pepperoni|sausage|ham|bacon|chicken|salami|greenPepper|bananaPepper|spinach|olives|mushroom|onion/;
var meatsArray = ["pepperoni", "sausage", "ham", "bacon", "chicken", "salami"];
var veggieArray = ["greenPepper", "bananaPepper", "spinach", "olives", "mushroom", "onion"];
var preBuiltArray = ["supreme", "pepperoni", "bbq", "fivecheese", "meatlovers"];
var preBuiltNamesArray = ["SUPREME", "PEPPERONI", "BBQ CHICKEN", "FIVE CHEESE", "MEAT LOVERS"];
var activeBg = '#D82D2A';
var defaultBg = '#8F0937';
//EXTRA
var mypizza = document.getElementById('mypizza');
var Header = document.createElement('div');
Header.className = 'wrap';
Header.id = 'header';
var HeaderChild = document.createElement('h1');
HeaderChild.innerHTML = "PIZZA BUILDER";
Header.appendChild(HeaderChild);
mypizza.appendChild(Header);

var Wrapper = document.createElement('div');
Wrapper.className = 'wrapper';
var allwrapper = document.createElement('div');
allwrapper.id = 'allwrapper';
var leftrightWrap = document.createElement('div');
leftrightWrap.id = 'leftrightwrapper';
var left = document.createElement('div');
left.id = 'left';
var deal = document.createElement('div');
deal.innerHTML = '**SPECIAL DEAL**';
deal.id = 'dealtext';
deal.className = 'otherwrap';
var pizzaCon = document.createElement('div');
pizzaCon.className = 'pizzacontainer otherwrap';
var pz = document.createElement('div');
pz.id = 'pizza';
pz.className = 'imgContainer';
pizzaCon.appendChild(pz);
var leftch = document.createElement('div');
leftch.className = 'otherwrap';
var leftch2 = document.createElement('div');
leftch2.id = "sizeContainer";
leftch2.className = 'otherwrap';
var leftchSpan1 = document.createElement('span');
leftchSpan1.className = 'wrap';
var leftchSpanBtn1 = document.createElement('button');
leftchSpanBtn1.id = 'smallBtn';
leftchSpanBtn1.className = 'rndBtn';
leftchSpan1.innerHTML = 'S ';
leftchSpan1.appendChild(leftchSpanBtn1);
var leftchSpan2 = document.createElement('span');
leftchSpan2.className = 'wrap';
var leftchSpanBtn2 = document.createElement('button');
leftchSpanBtn2.id = 'medBtn';
leftchSpanBtn2.className = 'rndBtn';
leftchSpan2.innerHTML = 'M ';
leftchSpan2.appendChild(leftchSpanBtn2);
var leftchSpan3 = document.createElement('span');
leftchSpan3.className = 'wrap';
var leftchSpanBtn3 = document.createElement('button');
leftchSpanBtn3.id = 'largeBtn';
leftchSpanBtn3.className = 'rndBtn';
leftchSpan3.innerHTML = 'L ';
leftchSpan3.appendChild(leftchSpanBtn3);
var leftchSpan4 = document.createElement('span');
leftchSpan4.className = 'wrap';
var leftchSpanBtn4 = document.createElement('button');
leftchSpanBtn4.id = 'xlargeBtn';
leftchSpanBtn4.className = 'rndBtn';
leftchSpan4.innerHTML = 'XL ';
leftchSpan4.appendChild(leftchSpanBtn4);
leftch2.appendChild(leftchSpan1);
leftch2.appendChild(leftchSpan2);
leftch2.appendChild(leftchSpan3);
leftch2.appendChild(leftchSpan4);
var priceCon = document.createElement('div');
priceCon.id = 'priceContainer';
priceCon.className = 'otherwrap';
var priceSpan = document.createElement('span');
priceSpan.innerHTML = 'TOTAL: '
var priceLbl = document.createElement('label');
priceLbl.innerHTML = '$0';
priceLbl.id = 'totalcostlbl';
priceSpan.appendChild(priceLbl);
priceCon.appendChild(priceSpan);
leftch.appendChild(leftch2);
left.appendChild(deal);
left.appendChild(pizzaCon);
left.appendChild(leftch);
left.appendChild(priceCon);
///end of left
//RIGHT
var right = document.createElement('div');
right.id = 'right';
var menu = document.createElement('div');
menu.id = 'menuText';
menu.innerHTML = '<p><em> First topping is free, each after that is $1.00.Five toppings is $3.00, each after that is still $1.00.</em></p>';
var tabCon = document.createElement('div');
    tabCon.className = 'tab-container';
    var Ul = document.createElement('ul');
    Ul.className = 'tab-nav wrap';
    var li1 = document.createElement('li');
    var a1 = document.createElement('a');
    a1.className ='button-tab active-tab';
    a1.href = '#one';
    a1.innerHTML = "SET-UP";
    li1.appendChild(a1);
    var li2 = document.createElement('li');
    var a2 = document.createElement('a');
    a2.className ='button-tab';
    a2.id = 'meatsTab';
    a2.href = '#two';
    a2.innerHTML = "MEATS";
    li2.appendChild(a2);
    var li3 = document.createElement('li');
    var a3 = document.createElement('a');
    a3.className ='button-tab';
    a3.id = 'veggiesTab';    
    a3.href = '#three';
    a3.innerHTML = "VEGGIES";
    li3.appendChild(a3);    
    var li4 = document.createElement('li');
    var a4 = document.createElement('a');
    a4.className ='button-tab';
    a4.href = '#four';
    a4.innerHTML = "PRE-BUILT";
    li4.appendChild(a4);
    Ul.appendChild(li1);
    Ul.appendChild(li2);
    Ul.appendChild(li3);
    Ul.appendChild(li4);
    var tabOne = document.createElement('div');
    tabOne.id = 'one';
    tabOne.className = 'tab-content active';
    var setUpHeader1 = document.createElement('h3');
    setUpHeader1.innerHTML = "CRUST";
    setUpHeader1.className = 'wrap';    
    var setUpCrust = document.createElement('div');
    setUpCrust.id = 'crustHolder';
    var crustwrap = document.createElement('div');    
        crustwrap.className ='row21item wrap';
    var crustcolwrap1 = document.createElement('div');    
        crustcolwrap1.id = 'col2';
        crustcolwrap1.className = 'wrap';
        var crustwrapchild1= document.createElement('div');
        crustwrapchild1.id  = 'crustcol1';
        crustcolwrap1.appendChild(crustwrapchild1);
    var crustcolwrap2 = document.createElement('div');    
        crustcolwrap2.id = 'col2';
        crustcolwrap2.className = 'wrap';
        var crustwrapchild2= document.createElement('div');
        crustwrapchild2.id  = 'crustcol2';
        crustcolwrap2.appendChild(crustwrapchild2);
        crustwrap.appendChild(crustcolwrap1);
        crustwrap.appendChild(crustcolwrap2);
        setUpCrust.appendChild(crustwrap);
    var sectionDiv1 = document.createElement('hr');
    sectionDiv1.className = "section-divider";

    var setUpHeader2 = document.createElement('h3');
    setUpHeader2.innerHTML = "SAUCE";
    setUpHeader2.className = 'wrap';    
    var setUpSauce = document.createElement('div');
    setUpSauce.id = 'crustHolder';
    var saucewrap = document.createElement('div');    
        saucewrap.className ='row21item wrap';
    var saucecolwrap1 = document.createElement('div');    
        saucecolwrap1.id = 'col2';
        saucecolwrap1.className = 'wrap';
        var saucewrapchild1= document.createElement('div');
        saucewrapchild1.id  = 'saucecol1';
        saucecolwrap1.appendChild(saucewrapchild1);
    var saucecolwrap2 = document.createElement('div');    
        saucecolwrap2.id = 'col2';
        saucecolwrap2.className = 'wrap';
        var saucewrapchild2= document.createElement('div');
        saucewrapchild2.id  = 'saucecol2';
        saucecolwrap2.appendChild(saucewrapchild2);
    saucewrap.appendChild(saucecolwrap1);
    saucewrap.appendChild(saucecolwrap2);
        setUpSauce.appendChild(saucewrap);
    var sectionDiv2 = document.createElement('hr');
    sectionDiv2.className = "section-divider";

    var setUpHeader3 = document.createElement('h3');
    setUpHeader3.innerHTML = "CHEESE";
    setUpHeader3.className = 'wrap';    
    var setUpCheese = document.createElement('div');
    setUpCheese.id = 'crustHolder';
    var cheesewrap = document.createElement('div');    
        cheesewrap.className ='row21item wrap';
    var cheesecolwrap1 = document.createElement('div');    
        cheesecolwrap1.id = 'col2';
        cheesecolwrap1.className = 'wrap';
        var cheesewrapchild1= document.createElement('div');
        cheesewrapchild1.id  = 'cheesecol1';
        cheesecolwrap1.appendChild(cheesewrapchild1);
    var cheesecolwrap2 = document.createElement('div');    
        cheesecolwrap2.id = 'col2';
        cheesecolwrap2.className = 'wrap';
        var cheesewrapchild2= document.createElement('div');
        cheesewrapchild2.id  = 'cheesecol2';
        cheesecolwrap2.appendChild(cheesewrapchild2);
        cheesewrap.appendChild(cheesecolwrap1);
        cheesewrap.appendChild(cheesecolwrap2);
        setUpCheese.appendChild(cheesewrap);
    var tabTwo = document.createElement('div');
    tabTwo.id = 'two';
    tabTwo.className = 'tab-content';
    var top1 = document.createElement('div');
    top1.className = 'pizzacontainer';
    top1.id ='topMainContainer'
    tabTwo.appendChild(top1);
    var tabThree = document.createElement('div');
    tabThree.id = 'three';
    tabThree.className = 'tab-content';
    var top2 = document.createElement('div');
    top2.className = 'pizzacontainer';
    top2.id ='topMainContainer2'
    tabThree.appendChild(top2);
    var tabFour = document.createElement('div');
    tabFour.id = 'four';
    tabFour.className = 'tab-content';
    var top3 = document.createElement('div');
    top3.id ='preBuiltsContainer'
    tabFour.appendChild(top3);


tabOne.appendChild(setUpHeader1);
tabOne.appendChild(setUpCrust);
tabOne.appendChild(sectionDiv1);
tabOne.appendChild(setUpHeader2);
tabOne.appendChild(setUpSauce);
tabOne.appendChild(sectionDiv2);
tabOne.appendChild(setUpHeader3);
tabOne.appendChild(setUpCheese);

tabCon.appendChild(Ul);
tabCon.appendChild(tabOne);
tabCon.appendChild(tabTwo);
tabCon.appendChild(tabThree);
tabCon.appendChild(tabFour);

right.appendChild(menu);
right.appendChild(tabCon);

leftrightWrap.appendChild(left);
leftrightWrap.appendChild(right);
//RIGHT 2
var right2 = document.createElement('div');
right2.id = 'right2';
    var right2List = document.createElement('div');
    right2List.id = 'dynamicListHolder';
    var currHeader = document.createElement('h3');
    currHeader.className = 'otherwrap';
    currHeader.innerHTML = 'CURRENT PIZZA';
    var currHeader2 = document.createElement('h4');
    currHeader2.className = 'otherwrap';
    currHeader2.innerHTML = 'PIZZA PRICE';
        var currHeader2Child = document.createElement('label');
        currHeader2Child.id ='currentPizzaPricelbl';
        currHeader2Child.innerHTML = "$0" 
        currHeader2.appendChild(currHeader2Child);
    var sizeDiv = document.createElement('div');
    sizeDiv.className = 'addwrap';
sizeDiv.innerHTML = 'SIZE: ';
var sizeChild = document.createElement('label');
sizeChild.id = "pizzaSZ";
sizeDiv.appendChild(sizeChild);
    var crustDiv = document.createElement('div');
    crustDiv.className = 'addwrap';
    crustDiv.innerHTML = 'CRUST: ';
var crustChild = document.createElement('label');
crustChild.id = "pizzaCR";
crustDiv.appendChild(crustChild);
    
    var sauceDiv = document.createElement('div');
    sauceDiv.className = 'addwrap';
    sauceDiv.innerHTML = 'SAUCE: ';
    var sauceChild = document.createElement('label');
    sauceChild.id = "pizzaSA";
    sauceDiv.appendChild(sauceChild);
    var cheeseDiv = document.createElement('div');
    cheeseDiv.className = 'addwrap';
    cheeseDiv.innerHTML = 'CHEESE: ';
var cheeseChild = document.createElement('label');
cheeseChild.id = "pizzaCH";
cheeseDiv.appendChild(cheeseChild);
    var topDiv = document.createElement('div');
    topDiv.className = 'addwrap';
    topDiv.innerHTML = 'TOPPINGS: ';
    var topChild = document.createElement('label');
    topChild.id = "pizzaTOP";
    topDiv.appendChild(topChild);
var addConDiv = document.createElement('div');
addConDiv.className = 'otherwrap';
addConDiv.id = 'addtoContainer';
    var addConButton = document.createElement('button');
    addConButton.id = 'addToOrderBtn';
    addConButton.innerHTML = "ADD TO ORDER";
    addConDiv.appendChild(addConButton);

right2List.appendChild(currHeader);
right2List.appendChild(currHeader2);
right2List.appendChild(sizeDiv);
right2List.appendChild(crustDiv);
right2List.appendChild(sauceDiv);
right2List.appendChild(cheeseDiv);
right2List.appendChild(topDiv);
right2List.appendChild(addConDiv);
    right2.appendChild(right2List);
    var orderViewDiv = document.createElement('div');
        orderViewDiv.id = 'orderViewer';
        var orderHeader = document.createElement('h1');
        orderHeader.innerHTML = 'MY ORDER';
        orderHeader.className = 'wrap';
        var orderContainerDiv= document.createElement('div');
        orderContainerDiv.id = 'orderContainer';
        var finishOrderDiv = document.createElement('div');
        finishOrderDiv.id = 'finishOrder';
        finishOrderDiv.className ='wrap';
        var forderBtn = document.createElement('button');
            forderBtn.innerHTML = 'FINISH ORDER';
            forderBtn.id = 'finishOrderBtn';
            finishOrderDiv.appendChild(forderBtn);
orderViewDiv.appendChild(orderHeader);
orderViewDiv.appendChild(orderContainerDiv);
orderViewDiv.appendChild(finishOrderDiv);
right2.appendChild(orderViewDiv);

allwrapper.appendChild(leftrightWrap);
allwrapper.appendChild(right2);

Wrapper.appendChild(allwrapper);
mypizza.appendChild(Wrapper);

var modalDiv = document.createElement('div');
modalDiv.id = 'myModal';
modalDiv.className = 'modal';
var modalDivChild = document.createElement('div');
 modalDivChild.className ='modal-content';
    var modalSpan = document.createElement('span');
    modalSpan.className = 'close';
    modalSpan.innerHTML = '&times;';
    var modalp = document.createElement('p');
    modalp.innerHTML = 'TRANSACTION COMPLETE!';
    modalDivChild.appendChild(modalSpan);
    modalDivChild.appendChild(modalp);
    modalDiv.appendChild(modalDivChild);
    mypizza.appendChild(modalDiv);

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
var toppingMainContainer = document.getElementById('topMainContainer');
var toppingMainContainer2 = document.getElementById('topMainContainer2');
var preBuiltContainer = document.getElementById('preBuiltsContainer');
function createToppingElements() {

    for (var j = 0; j < meatsArray.length; j++) {
        var wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrap toppingContainer';
        var nameDiv = document.createElement('div');
        nameDiv.className = "nameContainer"
        var toppingHeader = document.createElement('h4');
        toppingHeader.innerHTML = meatsArray[j].toUpperCase();
        nameDiv.appendChild(toppingHeader);
        var toppingImgNameDiv = document.createElement('div');
        toppingImgNameDiv.id = meatsArray[j];
        nameDiv.appendChild(toppingImgNameDiv);

        var amtBtnDiv = document.createElement('div');
        amtBtnDiv.className = 'amountButtons';
        var amtBtnChild1 = document.createElement('div');
        amtBtnChild1.className = 'col2';
        var amtBtnChild2 = document.createElement('div');
        amtBtnChild2.id = meatsArray[j] + "col1";
        amtBtnChild1.appendChild(amtBtnChild2);
        amtBtnDiv.appendChild(amtBtnChild1);

        var locationBtnDiv = document.createElement('div');
        locationBtnDiv.className = 'locationButtons';
        var locationBtnChild1 = document.createElement('div');
        locationBtnChild1.className = 'col2';
        var locationBtnChild2 = document.createElement('div');
        locationBtnChild2.id = meatsArray[j] + "col2";
        locationBtnChild1.appendChild(locationBtnChild2);
        locationBtnDiv.appendChild(locationBtnChild1);

        var divider = document.createElement('hr');
        divider.className = 'section-divider';

        wrapDiv.appendChild(nameDiv);
        wrapDiv.appendChild(amtBtnDiv);
        wrapDiv.appendChild(locationBtnDiv);
        toppingMainContainer.appendChild(wrapDiv);
        toppingMainContainer.appendChild(divider);
    }
    for (var k = 0; k < veggieArray.length; k++) {
        var wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrap toppingContainer';
        var nameDiv = document.createElement('div');
        nameDiv.className = "nameContainer"
        var toppingHeader = document.createElement('h4');
        toppingHeader.innerHTML = veggieArray[k].toUpperCase();
        nameDiv.appendChild(toppingHeader);
        var toppingImgNameDiv = document.createElement('div');
        toppingImgNameDiv.id = veggieArray[k];
        nameDiv.appendChild(toppingImgNameDiv);

        var amtBtnDiv = document.createElement('div');
        amtBtnDiv.className = 'amountButtons';
        var amtBtnChild1 = document.createElement('div');
        amtBtnChild1.className = 'col2';
        var amtBtnChild2 = document.createElement('div');
        amtBtnChild2.id = veggieArray[k] + "col1";
        amtBtnChild1.appendChild(amtBtnChild2);
        amtBtnDiv.appendChild(amtBtnChild1);

        var locationBtnDiv = document.createElement('div');
        locationBtnDiv.className = 'locationButtons';
        var locationBtnChild1 = document.createElement('div');
        locationBtnChild1.className = 'col2';
        var locationBtnChild2 = document.createElement('div');
        locationBtnChild2.id = veggieArray[k] + "col2";
        locationBtnChild1.appendChild(locationBtnChild2);
        locationBtnDiv.appendChild(locationBtnChild1);

        var divider = document.createElement('hr');
        divider.className = 'section-divider';

        wrapDiv.appendChild(nameDiv);
        wrapDiv.appendChild(amtBtnDiv);
        wrapDiv.appendChild(locationBtnDiv);
        toppingMainContainer2.appendChild(wrapDiv);
        toppingMainContainer2.appendChild(divider);
    }
}
createToppingElements();
function createPreBuilt() {
    // <h3 class="wrap">SUPREME</h3>
    for (var i = 0; i < preBuiltArray.length; i++) {
        var pizzaHeader = document.createElement('h3');
        pizzaHeader.className = 'wrap';
        pizzaHeader.innerHTML = preBuiltNamesArray[i];
        var wrapper = document.createElement('div');
        wrapper.className = 'wrap';
        var spcContainer = document.createElement('div');
        spcContainer.className = 'spcContainer';
        var spcContainerChild1 = document.createElement('div');
        spcContainerChild1.className = 'spcImgContiner';
        var spcContainerChild2 = document.createElement('div');
        spcContainerChild2.id = preBuiltArray[i] + "Pizza";
        spcContainerChild1.appendChild(spcContainerChild2);
        var descHolder = document.createElement('div');
        descHolder.className = 'spcDescHolder';
        var descHolderChild1 = document.createElement('p');
        descHolderChild1.id = 'spcdescText';
        descHolderChild1.innerHTML = 'STUFF';
        descHolder.appendChild(descHolderChild1);
        var selectContainer = document.createElement('div');
        selectContainer.className = 'selectContainer';
        var selectContainerChild1 = document.createElement('span');
        selectContainerChild1.className = 'wrap';
        selectContainerChild1.innerHTML = 'SELECT';
        var selectContainerChild2 = document.createElement('div');
        selectContainerChild2.style.marginLeft = '25px';
        var selectContainerChild3 = document.createElement('button');
        selectContainerChild3.className = 'rndBtn';
        selectContainerChild3.id = preBuiltArray[i] + "Btn";
        selectContainerChild2.appendChild(selectContainerChild3);
        selectContainer.appendChild(selectContainerChild1);
        selectContainer.appendChild(selectContainerChild2);
        // selectContainer.appendChild(selectContainerChild3);

        spcContainer.appendChild(spcContainerChild1);
        spcContainer.appendChild(descHolder);
        spcContainer.appendChild(selectContainer);
        wrapper.appendChild(spcContainer);

        var divider = document.createElement('hr');
        divider.className = 'section-divider';
        preBuiltContainer.appendChild(pizzaHeader);
        preBuiltContainer.appendChild(wrapper);
        preBuiltContainer.appendChild(divider);

    }

}
createPreBuilt();
//CRUSTS
var cheesy = "url(images/cheesy.png)";
var handToss = "url(images/handToss.png)";
var stuffed = "url(images/stuffed.png)";
var thin = "url(images/thin.png)";
//SAUCES
var aldredo = "url(images/alfredo.png)";
var bbq = "url(images/bbq.png)";
var buffalo = "url(images/buffalo.png)";
var garlicParm = "url(images/garlicParm.png)";
var marinara = "url(images/marinara.png)";
//CHEESE
var cheese = "url(images/cheese.png)";
var lightCheese = "url(images/lightCheese.png)";
var extraCheese = "url(images/extraCheese.png)";
//TOPPINGS
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
//VEGGIES
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

//PRE-BUILT BASE PRICES
var supremeBasePrice = 30;
var pepperoniBasePrice = 21;
var bbqBasePrice = 23;
var fivecheeseBasePrice = 20;
var meatsloversBasePrice = 24;



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
var crustCol1 = document.getElementById('crustcol1');
var crustCol2 = document.getElementById('crustcol2');
var sauceCol1 = document.getElementById('saucecol1');
var sauceCol2 = document.getElementById('saucecol2');
var sauceCol3 = document.getElementById('saucecol3');
var cheeseCol1 = document.getElementById('cheesecol1');
var cheeseCol2 = document.getElementById('cheesecol2');
var peppcol1 = document.getElementById('pepperonicol1');
var peppcol2 = document.getElementById('pepperonicol2');
var sausagecol1 = document.getElementById('sausagecol1');
var sausagecol2 = document.getElementById('sausagecol2');
var hamcol1 = document.getElementById('hamcol1');
var hamcol2 = document.getElementById('hamcol2');
var baconcol1 = document.getElementById('baconcol1');
var baconcol2 = document.getElementById('baconcol2');
var chickencol1 = document.getElementById('chickencol1');
var chickencol2 = document.getElementById('chickencol2');
var salamicol1 = document.getElementById('salamicol1');
var salamicol2 = document.getElementById('salamicol2');
var greenPeppercol1 = document.getElementById('greenPeppercol1');
var greenPeppercol2 = document.getElementById('greenPeppercol2');
var bananaPeppercol1 = document.getElementById('bananaPeppercol1');
var bananaPeppercol2 = document.getElementById('bananaPeppercol2');
var mushroomcol1 = document.getElementById('mushroomcol1');
var mushroomcol2 = document.getElementById('mushroomcol2');
var spinachcol1 = document.getElementById('spinachcol1');
var spinachcol2 = document.getElementById('spinachcol2');
var olivescol1 = document.getElementById('olivescol1');
var olivescol2 = document.getElementById('olivescol2');
var onioncol1 = document.getElementById('onioncol1');
var onioncol2 = document.getElementById('onioncol2');

var buttonNames = ['EXTRA', 'REGULAR', 'NONE', 'BOTH', 'LEFT', 'RIGHT']
var buttonNames2 = ['BOTH', 'LEFT', 'RIGHT'];
var crustNames = ['HAND-TOSSED', "THIN N' CRISPY"];
var crustNames2 = ['STUFFED CRUST', 'CHEESY CRUST'];
var sauceNames = ['MARINARA', 'BUFFALO'];
var sauceNames2 = ['BBQ', 'ALFREDO', 'GARLIC PARMESAN'];
var cheeseNames = ['REGULAR', "EXTRA"];
var cheeseNames2 = ['LIGHT', 'NONE'];

buildButton(crustNames, "crust", crustCol1);
buildButton(crustNames2, "crusts", crustCol2);
buildButton(sauceNames, "sauce", sauceCol1);
buildButton(sauceNames2, "sauces", sauceCol2);
buildButton(cheeseNames, "cheese", cheeseCol1);
buildButton(cheeseNames2, "cheeses", cheeseCol2);
buildButton(buttonNames, "pepperoni", peppcol1, peppcol2, true);
buildButton(buttonNames, "sausage", sausagecol1, sausagecol2, true);
buildButton(buttonNames, "ham", hamcol1, hamcol2, true);
buildButton(buttonNames, "bacon", baconcol1, baconcol2, true);
buildButton(buttonNames, "chicken", chickencol1, chickencol2, true);
buildButton(buttonNames, "salami", salamicol1, salamicol2, true);
buildButton(buttonNames, "greenPepper", greenPeppercol1, greenPeppercol2, true);
buildButton(buttonNames, "bananaPepper", bananaPeppercol1, bananaPeppercol2, true);
buildButton(buttonNames, "mushroom", mushroomcol1, mushroomcol2, true);
buildButton(buttonNames, "spinach", spinachcol1, spinachcol2, true);
buildButton(buttonNames, "olives", olivescol1, olivescol2, true);
buildButton(buttonNames, "onion", onioncol1, onioncol2, true);

var c1 = document.getElementById('crustBtn1');
var c2 = document.getElementById('crustBtn2');
var c3 = document.getElementById('crustsBtn1');
var c4 = document.getElementById('crustsBtn2');
var s1 = document.getElementById('sauceBtn1');
var s2 = document.getElementById('sauceBtn2');
var s3 = document.getElementById('saucesBtn1');
var s4 = document.getElementById('saucesBtn2');
var s5 = document.getElementById('saucesBtn3');
var ch1 = document.getElementById('cheeseBtn1');
var ch2 = document.getElementById('cheeseBtn2');
var ch3 = document.getElementById('cheesesBtn1');
var ch4 = document.getElementById('cheesesBtn2');

var crustsARR = [c1, c2, c3, c4];
var sauceARR = [s1, s2, s3, s4, s5];
var cheeseARR = [ch1, ch2, ch3, ch4];

//DEFAULT SETUP
pizza.style.background = cheese + "," + marinara + "," + handToss;
pizza.style.backgroundSize = "cover";
var currPriceHolder = 5;
currentPizzaCostLabel.innerHTML = '$' + currPriceHolder;
pizzaStack[0] = handToss;
pizzaStack[1] = marinara;
pizzaStack[2] = cheese;
pizzaCrust.innerHTML = "HAND-TOSSED";
pizzaCheese.innerHTML = "REGULAR";
pizzaSauce.innerHTML = "MARINARA";
pizzaTop.innerHTML = "";
medBtn.style.background = 'red';
pizzaSize.innerHTML = 'M';
c1.style.background = '#D82D2A';
ch1.style.background = '#D82D2A';
s1.style.background = '#D82D2A';


function buildButton(myarr, toppingName, containerName, containerName2, isTopping) {

    var arr = [];
    // console.log(myarr);
    for (var i = 0; i < myarr.length; i++) {
        arr[i] = myarr[i];
        var text;
        text = arr[i];
        // console.log(text);
        arr[i] = document.createElement('div');
        arr[i].textContent = text;
        arr[i].id = toppingName + "Btn" + (i + 1);
        if (isTopping && i > 2) {
            containerName2.appendChild(arr[i]);
            arr[i].setAttribute('class', 'toppingbtn');

        } else if (isTopping) {
            containerName.appendChild(arr[i]);
            arr[i].setAttribute('class', 'toppingbtn');
        } else {
            containerName.appendChild(arr[i]);
            arr[i].setAttribute('class', 'mybtn');
        }
        arr[i].addEventListener('click', btnClicked);
    }
    arr = [];
}
function backgroundSelected(elemARR, selectedIndex, clear) {
    if (clear) {
        for (var i = 0; i < elemARR.length; i++) {
            elemARR[i].style.background = '';
        }
    } else {
        for (var i = 0; i < elemARR.length; i++) {
            if (i == selectedIndex) {
                elemARR[i].style.background = '#D82D2A';
            } else {
                elemARR[i].style.background = '#8F0937';
            }
        }

    }
}

function btnClicked(evt) {
    // console.log(evt.target.innerText + evt.target.id + " clicked");
    console.log("CLIKED: " + TOPPINGS);
    var name = evt.target.innerText;
    var id = evt.target.id;
    var target = evt.target;
    // console.log("name: " + name);
    // console.log("ID: " + id);
    // console.log("target: " + target);
    switch (name) {
        case "HAND-TOSSED":
            pizzaStack[0] = "url(images/handToss.png)";
            backgroundSelected(crustsARR, 0, false);
            pizzaCrust.innerHTML = name;
            break;
        case "THIN N' CRISPY":
            pizzaStack[0] = "url(images/thin.png)";
            backgroundSelected(crustsARR, 1, false);
            pizzaCrust.innerHTML = name;
            break;
        case "STUFFED CRUST":
            pizzaStack[0] = "url(images/stuffed.png)";
            backgroundSelected(crustsARR, 2, false);
            pizzaCrust.innerHTML = name;
            break;
        case "CHEESY CRUST":
            pizzaStack[0] = "url(images/cheesy.png)";
            backgroundSelected(crustsARR, 3, false);
            pizzaCrust.innerHTML = name;
            break;
        //SAUCE    
        case "MARINARA":
            pizzaStack[1] = "url(images/marinara.png)";
            backgroundSelected(sauceARR, 0, false);
            pizzaSauce.innerHTML = name;
            break;
        case "BUFFALO":
            pizzaStack[1] = "url(images/buffalo.png)";
            backgroundSelected(sauceARR, 1, false);
            pizzaSauce.innerHTML = name;
            break;
        case "BBQ":
            pizzaStack[1] = "url(images/bbq.png)";
            backgroundSelected(sauceARR, 2, false);
            pizzaSauce.innerHTML = name;
            break;
        case "ALFREDO":
            pizzaStack[1] = "url(images/alfredo.png)";
            backgroundSelected(sauceARR, 3, false);
            pizzaSauce.innerHTML = name;
            break;
        case "GARLIC PARMESAN":
            pizzaStack[1] = "url(images/garlicParm.png)";
            backgroundSelected(sauceARR, 4, false);
            pizzaSauce.innerHTML = name;
            break;
        //CHEESE
        case "REGULAR":
            switch (id) {
                case "cheeseBtn1":
                    pizzaStack[2] = "url(images/cheese.png)";
                    backgroundSelected(cheeseARR, 0, false);
                    pizzaCheese.innerHTML = name;
                    break;
            }
            break;
        case "EXTRA":
            switch (id) {
                case "cheeseBtn2":
                    pizzaStack[2] = "url(images/extraCheese.png)";
                    backgroundSelected(cheeseARR, 1, false);
                    pizzaCheese.innerHTML = name;
                    break
            }
            break;
        case "LIGHT":
            pizzaStack[2] = "url(images/lightCheese.png)";
            backgroundSelected(cheeseARR, 2, false);
            pizzaCheese.innerHTML = name;
            break;
        case "NONE":
            switch (id) {
                case "cheesesBtn2":
                    pizzaStack[2] = "url()";
                    backgroundSelected(cheeseARR, 3, false);
                    pizzaCheese.innerHTML = name;
                    break;
            }
            break;
    }
    var topp = document.getElementById('meatsTab');
    var topp2 = document.getElementById('veggiesTab');

    //TOPPINGS
    if (topp.className == "button-tab active-tab" || topp2.className == "button-tab active-tab") {

        var toppingMatch = id.match(toppingRegex);
        console.log(toppingMatch[0]);
        var x = toppingMatch[0];
        switch (x) {
            case "pepperoni":
                toppingAdder(3, pepperoni, id);
                break;
            case "sausage":
                toppingAdder(4, sausage, id);
                break;
            case "ham":
                toppingAdder(5, ham, id);
                break;
            case "bacon":
                toppingAdder(6, bacon, id);
                break;
            case "chicken":
                toppingAdder(7, chicken, id);
                break;
            case "salami":
                toppingAdder(8, salami, id);
                break;
            case "greenPepper":
                toppingAdder(9, greenPepper, id);
                break;
            case "bananaPepper":
                toppingAdder(10, bananaPepper, id);
                break;
            case "mushroom":
                toppingAdder(11, mushroom, id);
                break;
            case "spinach":
                toppingAdder(12, spinach, id);
                break;
            case "olives":
                toppingAdder(13, olives, id);
                break;
            case "onion":
                toppingAdder(14, onion, id);
                break;
        }
    }
    resetBackground();
}

function resetBackground() {
    var s = "";
    for (var counter = pizzaStack.length - 1; counter >= 0; counter--) {
        // console.log("CT " + counter);
        if (counter > 0) {
            if (pizzaStack[counter] != undefined) {
                s += pizzaStack[counter] + ",";
            }

        } else if (counter == pizzaStack.length) {
            s += ";";
        } else {

            s += pizzaStack[counter];
        }
        // console.log(s);
        pizza.style.background = s;
        pizza.style.backgroundSize = 'cover';
    }
}

function resetBtns(resetBtncolor) {
    document.getElementById('pepperoniBtn1').style.background = resetBtncolor;
    document.getElementById('pepperoniBtn2').style.background = resetBtncolor;
    document.getElementById('pepperoniBtn3').style.background = resetBtncolor;
    document.getElementById('pepperoniBtn4').style.background = resetBtncolor;
    document.getElementById('pepperoniBtn5').style.background = resetBtncolor;
    document.getElementById('pepperoniBtn6').style.background = resetBtncolor;
    document.getElementById('sausageBtn1').style.background = resetBtncolor;
    document.getElementById('sausageBtn2').style.background = resetBtncolor;
    document.getElementById('sausageBtn3').style.background = resetBtncolor;
    document.getElementById('sausageBtn4').style.background = resetBtncolor;
    document.getElementById('sausageBtn5').style.background = resetBtncolor;
    document.getElementById('sausageBtn6').style.background = resetBtncolor;
    document.getElementById('hamBtn1').style.background = resetBtncolor;
    document.getElementById('hamBtn2').style.background = resetBtncolor;
    document.getElementById('hamBtn3').style.background = resetBtncolor;
    document.getElementById('hamBtn4').style.background = resetBtncolor;
    document.getElementById('hamBtn5').style.background = resetBtncolor;
    document.getElementById('hamBtn6').style.background = resetBtncolor;
    document.getElementById('baconBtn1').style.background = resetBtncolor;
    document.getElementById('baconBtn2').style.background = resetBtncolor;
    document.getElementById('baconBtn3').style.background = resetBtncolor;
    document.getElementById('baconBtn4').style.background = resetBtncolor;
    document.getElementById('baconBtn5').style.background = resetBtncolor;
    document.getElementById('baconBtn6').style.background = resetBtncolor;
    document.getElementById('chickenBtn1').style.background = resetBtncolor;
    document.getElementById('chickenBtn2').style.background = resetBtncolor;
    document.getElementById('chickenBtn3').style.background = resetBtncolor;
    document.getElementById('chickenBtn4').style.background = resetBtncolor;
    document.getElementById('chickenBtn5').style.background = resetBtncolor;
    document.getElementById('chickenBtn6').style.background = resetBtncolor;
    document.getElementById('salamiBtn1').style.background = resetBtncolor;
    document.getElementById('salamiBtn2').style.background = resetBtncolor;
    document.getElementById('salamiBtn3').style.background = resetBtncolor;
    document.getElementById('salamiBtn4').style.background = resetBtncolor;
    document.getElementById('salamiBtn5').style.background = resetBtncolor;
    document.getElementById('salamiBtn6').style.background = resetBtncolor;
    document.getElementById('greenPepperBtn1').style.background = resetBtncolor;
    document.getElementById('greenPepperBtn2').style.background = resetBtncolor;
    document.getElementById('greenPepperBtn3').style.background = resetBtncolor;
    document.getElementById('greenPepperBtn4').style.background = resetBtncolor;
    document.getElementById('greenPepperBtn5').style.background = resetBtncolor;
    document.getElementById('greenPepperBtn6').style.background = resetBtncolor;
    document.getElementById('bananaPepperBtn1').style.background = resetBtncolor;
    document.getElementById('bananaPepperBtn2').style.background = resetBtncolor;
    document.getElementById('bananaPepperBtn3').style.background = resetBtncolor;
    document.getElementById('bananaPepperBtn4').style.background = resetBtncolor;
    document.getElementById('bananaPepperBtn5').style.background = resetBtncolor;
    document.getElementById('bananaPepperBtn6').style.background = resetBtncolor;
    document.getElementById('mushroomBtn1').style.background = resetBtncolor;
    document.getElementById('mushroomBtn2').style.background = resetBtncolor;
    document.getElementById('mushroomBtn3').style.background = resetBtncolor;
    document.getElementById('mushroomBtn4').style.background = resetBtncolor;
    document.getElementById('mushroomBtn5').style.background = resetBtncolor;
    document.getElementById('mushroomBtn6').style.background = resetBtncolor;
    document.getElementById('spinachBtn1').style.background = resetBtncolor;
    document.getElementById('spinachBtn2').style.background = resetBtncolor;
    document.getElementById('spinachBtn3').style.background = resetBtncolor;
    document.getElementById('spinachBtn4').style.background = resetBtncolor;
    document.getElementById('spinachBtn5').style.background = resetBtncolor;
    document.getElementById('spinachBtn6').style.background = resetBtncolor;
    document.getElementById('olivesBtn1').style.background = resetBtncolor;
    document.getElementById('olivesBtn2').style.background = resetBtncolor;
    document.getElementById('olivesBtn3').style.background = resetBtncolor;
    document.getElementById('olivesBtn4').style.background = resetBtncolor;
    document.getElementById('olivesBtn5').style.background = resetBtncolor;
    document.getElementById('olivesBtn6').style.background = resetBtncolor;
    document.getElementById('onionBtn1').style.background = resetBtncolor;
    document.getElementById('onionBtn2').style.background = resetBtncolor;
    document.getElementById('onionBtn3').style.background = resetBtncolor;
    document.getElementById('onionBtn4').style.background = resetBtncolor;
    document.getElementById('onionBtn5').style.background = resetBtncolor;
    document.getElementById('onionBtn6').style.background = resetBtncolor;
}
var newArr = [];
function setPreBuiltBtns() {
    newArr = cleanArray(TOPPINGS);
    for (var i = 0; i < newArr.length; i++) {
        console.log("NEWARR: " + newArr[i]);
        var s = newArr[i].toLowerCase();
        if (s == 'greenpepper') {
            s = 'greenPepper';
        } else if (s == 'bananapepper') {
            s = 'bananaPepper';
        }
        console.log("NEWSSS: " + s);
        var z = document.getElementById(s + 'Btn2').style.background = activeBg;
    }
}
function resetApp() {
    pizzaSize.innerHTML = "M";
    pizzaCrust.innerHTML = "";
    pizzaCheese.innerHTML = "";
    pizzaSauce.innerHTML = "";
    pizzaTop.innerHTML = "";
    ch1.style.background = '#8F0937';
    ch2.style.background = '#8F0937';
    ch3.style.background = '#8F0937';
    ch4.style.background = '#8F0937';
    s1.style.background = '#8F0937';
    s2.style.background = '#8F0937';
    s3.style.background = '#8F0937';
    s4.style.background = '#8F0937';
    s5.style.background = '#8F0937';
    c1.style.background = '#8F0937';
    c2.style.background = '#8F0937';
    c3.style.background = '#8F0937';
    c4.style.background = '#8F0937';
    medBtn.style.background = 'red';
    szBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'black';
    document.getElementById('dealtext').style.visibility = 'hidden';
    pizza.style.width = '200px';
    pizza.style.height = '200px';
    pizza.style.background = cheese + "," + marinara + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = marinara;
    pizzaStack[2] = cheese;
    pizzaCrust.innerHTML = "HAND-TOSSED";
    pizzaCheese.innerHTML = "REGULAR";
    pizzaSauce.innerHTML = "MARINARA";
    currentPizzaCostLabel.innerHTML = "$" + 5;
    supremeBtn.style.background = 'black';
    pepperoniPizzaBtn.style.background = 'black';
    bbqBtn.style.background = 'black';
    fivecheeseBtn.style.background = 'black';
    meatloversBtn.style.background = 'black';
    c1.style.background = '#D82D2A';
    ch1.style.background = '#D82D2A';
    s1.style.background = '#D82D2A';
    resetBtns('#8F0937');
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
    var pizzaCtHeader = document.createElement('h2');
    pizzaCtHeader.id = 'pizzaHeader' + pizzaCt;
    pizzaCtHeader.className = 'wrap';
    pizzaCtHeader.innerHTML = "Pizza" + pizzaCt;
    pizzaString += "<h2 class='otherwrap'>" + "Pizza #" + pizzaCt + "</h2>";
    orderContainer.appendChild(pizzaCtHeader);

    dynListArr.push(pizzaSize.innerHTML);
    dynListArr.push(pizzaCrust.innerHTML);
    dynListArr.push(pizzaSauce.innerHTML);
    dynListArr.push(pizzaCheese.innerHTML);
    dynListArr.push(pizzaTop.innerHTML);

    for (var i = 0; i < dynListArr.length; i++) {
        console.log(dynListArr[i]);
        pizzaString += "<p class='listwrap'>" + dynListArr[i] + "</p>";
        orderContainer.innerHTML = pizzaString;
    }
    isSupreme = false;
    isPepperoni = false;
    isBBQChicken = false;
    isFiveCheese = false;
    isMeatLovers = false;
    // TOTALPRICE = currPriceHolder;
    console.log("TP" + TOTALPRICE);
    console.log("FN" + FNCUSTOMPRICE);
    var price = currentPizzaCostLabel.innerHTML;
    console.log(price);
    final += FNCUSTOMPRICE;
    console.log(final);
    totalCostLabel.innerHTML = "$" + final;
    dynListArr = [];
    console.log("BEFORE EM: " + TOPPINGS);
    TOPPINGS = [];
    pizzaStack = [];
    FNCUSTOMPRICE = 5;
    resetApp();
    console.log("AFTER: " + TOPPINGS);
    ///

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
    resetApp();
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
var pepperoniPizzaBtn = document.getElementById('pepperoniBtn');
var bbqBtn = document.getElementById('bbqBtn');
var fivecheeseBtn = document.getElementById('fivecheeseBtn');
var meatloversBtn = document.getElementById('meatloversBtn');
supremeBtn.addEventListener('click', addSupreme);
pepperoniPizzaBtn.addEventListener('click', addPepperoniPizza);
bbqBtn.addEventListener('click', addBBQ);
fivecheeseBtn.addEventListener('click', addFiveCheese);
meatloversBtn.addEventListener('click', addMeatLovers);

function addSupreme() {
    formatPreBuilt([true, false, false, false, false], ['red', 'black', 'black', 'black', 'black'], ["HAND-TOSSED", "REGULAR", "MARINARA", "EVERYTHING"]);
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
    TOPPINGS[3] = "PEPPERONI";
    TOPPINGS[4] = "SAUSAGE";
    TOPPINGS[5] = "HAM";
    TOPPINGS[6] = "BACON";
    TOPPINGS[7] = "CHICKEN";
    TOPPINGS[8] = "SALAMI";
    TOPPINGS[9] = "GREENPEPPER";
    TOPPINGS[10] = "BANANAPEPPER";
    TOPPINGS[11] = "MUSHROOM";
    TOPPINGS[12] = "SPINACH";
    TOPPINGS[13] = "OLIVES";
    TOPPINGS[14] = "ONION";
    setPreBuiltBtns();
    viewToppings();
}
function addPepperoniPizza() {
    formatPreBuilt([false, true, false, false, false], ['black', 'red', 'black', 'black', 'black'], ["HAND-TOSSED", "REGULAR", "MARINARA", "PEPPERONI"]);
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
    TOPPINGS[3] = "PEPPERONI";
    setPreBuiltBtns();
    viewToppings();
}
function addBBQ() {
    formatPreBuilt([false, false, true, false, false], ['black', 'black', 'red', 'black', 'black'], ["HAND-TOSSED", "REGULAR", "BBQ", "BACON<br/>CHICKEN<br/>ONION<br/>"]);
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
    TOPPINGS[7] = "CHICKEN";
    TOPPINGS[12] = "SPINACH";
    TOPPINGS[14] = "ONION";
    setPreBuiltBtns();
    viewToppings();
}
function addFiveCheese() {
    formatPreBuilt([false, false, false, true, false], ['black', 'black', 'black', 'red', 'black'], ["CHEESY", "MOZZARELLA<br/>CHEDDAR<br/>PARMESAN<br/>ASIAGO<br/>ROMANO<br/>", "GARLIC PARMESAN", "NONE"]);
    currentPizzaCostLabel.innerHTML = "$ " + 11;
    FNCUSTOMPRICE = fivecheeseBasePrice;
    currentPizzaCostLabel.innerHTML = "$ " + fivecheeseBasePrice;
    pizza.style.background = lightCheese + "," + cheese + "," + extraCheese + "," + garlicParm + "," + handToss;
    pizza.style.backgroundSize = "cover";
    pizzaStack[0] = handToss;
    pizzaStack[1] = garlicParm;
    pizzaStack[2] = extraCheese;
    setPreBuiltBtns();
    currPriceHolder = 11;
}
function formatPreBuilt(boolArray, btnBackArray, pizzaHTMLArray) {
    TOPPINGS = [];
    resetBtns(defaultBg);
    szBtn.style.background = 'black';
    medBtn.style.background = 'black';
    largeBtn.style.background = 'black';
    xlargeBtn.style.background = 'red';
    pizza.style.width = '300px';
    pizza.style.height = '300px';
    pizzaSize.innerHTML = "XL";
    isSupreme = boolArray[0];
    isPepperoni = boolArray[1];
    isBBQChicken = boolArray[2];
    isFiveCheese = boolArray[3];
    isMeatLovers = boolArray[4];
    supremeBtn.style.background = btnBackArray[0];
    pepperoniPizzaBtn.style.background = btnBackArray[1];
    bbqBtn.style.background = btnBackArray[2];
    fivecheeseBtn.style.background = btnBackArray[3];
    meatloversBtn.style.background = btnBackArray[4];
    pizzaCrust.innerHTML = pizzaHTMLArray[0];
    pizzaCheese.innerHTML = pizzaHTMLArray[1];
    pizzaSauce.innerHTML = pizzaHTMLArray[2];
    pizzaTop.innerHTML = pizzaHTMLArray[3];

}
function addMeatLovers() {
    formatPreBuilt([false, false, false, false, true], ['black', 'black', 'black', 'black', 'red'], ["HAND-TOSSED", "REGULAR", "MARINARA", "PEPPERONI<br/>SAUSAGE<br/>BACON<br/>HAM<br/>SALAMI<br/>CHICKEN"]);
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
    TOPPINGS[3] = "PEPPERONI";
    TOPPINGS[4] = "SAUSAGE";
    TOPPINGS[5] = "HAM";
    TOPPINGS[6] = "BACON";
    TOPPINGS[7] = "CHICKEN";
    TOPPINGS[8] = "SALAMI";
    setPreBuiltBtns();
    viewToppings();
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

var l = TOPPINGS.length;
var len = 0;
var newARR = [];
var FNCUSTOMPRICE = 5;
function viewToppings() {
    for (var y = 0; y < TOPPINGS.length; y++) {
        if (TOPPINGS[y] != undefined || TOPPINGS[y] != "," || !TOPPINGS[y].contains(',')) {
            newARR[y] = TOPPINGS[y];
        }
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
        if (len != 0) {
            currPrice = x + (len - 1);
        }
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
function toppingAdder(arrindex, topppingName, e) {
    var b1name = topppingName.id + 'Btn1';
    var b2name = topppingName.id + 'Btn2';
    var b3name = topppingName.id + 'Btn3';
    var b4name = topppingName.id + 'Btn4';
    var b5name = topppingName.id + 'Btn5';
    var b6name = topppingName.id + 'Btn6';
    s1 = document.getElementById(b1name);
    s2 = document.getElementById(b2name);
    s3 = document.getElementById(b3name);
    s4 = document.getElementById(b4name);
    s5 = document.getElementById(b5name);
    s6 = document.getElementById(b6name);
    var elementsARR = [s1, s2, s3, s4, s5, s6];
    switch (e) {
        case b1name:

            s1.style.background = '#D82D2A';
            s2.style.background = '#8F0937';
            s3.style.background = '#8F0937';
            // console.log(s5.style.background);
            //     if (s5.style.background == '#D82D2A') {
            //         s4.style.background = '#8F0937';
            //         s6.style.background = '#8F0937';
            //     } else if (s6.style.background == '#D82D2A') {
            //         s4.style.background = '#8F0937';
            //         s5.style.background = '#8F0937';
            //     } else {
            //         s4.style.background = '#D82D2A';
            //         s5.style.background = '#8F0937';
            //         s6.style.background = '#8F0937';
            //     }

            if (s5.style.background == '#D82D2A') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraLeft.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA, LEFT)";
            } else if (s6.style.background == '#D82D2A') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraRight.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA, RIGHT)";
            } else {

                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Extra.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA)";

            }
            break;
        case b2name:
            s1.style.background = '#8F0937';
            s2.style.background = '#D82D2A';
            s3.style.background = '#8F0937';
            // if (s5.style.background == '#D82D2A') {
            //     s4.style.background = '#8F0937';
            //     s6.style.background = '#8F0937';
            // } else if (s6.style.background == '#D82D2A') {
            //     s4.style.background = '#8F0937';
            //     s5.style.background = '#8F0937';
            // } else {
            //     s4.style.background = '#D82D2A';
            //     s5.style.background = '#8F0937';
            //     s6.style.background = '#8F0937';
            // }
            if (s5.style.background == '#D82D2A') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Left.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(LEFT)";
            } else if (s6.style.background == '#D82D2A') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Right.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(RIGHT)";
            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + ".png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "";
            }
            break;
        case b3name:
            var x = currPriceHolder;
            s1.style.background = '#8F0937';
            s2.style.background = '#8F0937';
            s3.style.background = '#D82D2A';
            s4.style.background = '#8F0937';
            s5.style.background = '#8F0937';
            s6.style.background = '#8F0937';
            pizzaStack[arrindex] = "url()";
            TOPPINGS[arrindex] = "";

            console.log("len inside DEL: " + len);
            console.log("DEL :" + TOPPINGS.length);

            len -= 1;

            // if (isSupreme) {
            //     switch (topppingName.id) {
            //         case "pepperoni":
            //             TOPPINGS[3] = "";
            //             pizza.style.background = greenPepper1 + "," + bananaPepper1 + "," + mushroom1 + "," + olives1 + ","
            //                 + onion1 + "," + spinach1 + "," + bacon1 + "," + salami1 + ","
            //                 + sausage1 + "," + ham1 + "," + chicken1 + "," + extraCheese + "," +
            //                 marinara + "," + handToss;
            //             pizza.style.backgroundSize = "cover";
            //             break;
            //     }
            // }
            break;
        case b4name:
            s3.style.background = '#8F0937';
            s4.style.background = '#D82D2A';
            s5.style.background = '#8F0937';
            s6.style.background = '#8F0937';
            if (s1.style.background == '#D82D2A') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Extra.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA)";

            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + ".png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "";
            }
            break;
        case b5name:
            s3.style.background = '#8F0937';
            s4.style.background = '#8F0937';
            s5.style.background = '#D82D2A';
            s6.style.background = '#8F0937';
            if (s1.style.background == '#D82D2A') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraLeft.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA, LEFT)";

            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "Left.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(LEFT)";
            }
            break;
        case b6name:
            s3.style.background = '#8F0937';
            s4.style.background = '#8F0937';
            s5.style.background = '#8F0937';
            s6.style.background = '#D82D2A';
            if (s1.style.background == '#D82D2A') {
                pizzaStack[arrindex] = "url(images/" + topppingName.id + "ExtraRight.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(EXTRA, RIGHT)";
            } else {
                pizzaStack[arrindex] = "url(images/" + topppingName.id.toUpperCase() + "Right.png)";
                TOPPINGS[arrindex] = topppingName.id.toUpperCase() + "(RIGHT)";
            }
            break;
        default:
            pizzaStack[arrindex] = "url()";
            break;
    }
    viewToppings();
    resetBackground();
}
