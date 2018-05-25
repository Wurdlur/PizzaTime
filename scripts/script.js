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

var pizzaStack = [];
pizzaStack.push('images/pizza.png');

var pizza = document.getElementById('pizza');
pizza.style.background = "url("+ pizzaStack[0] + ")";
