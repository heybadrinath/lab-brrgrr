// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

var bPatty = document.querySelector(".btn-patty")
var bcheese = document.querySelector(".btn-cheese")
var btomato = document.querySelector(".btn-tomatoes")
var bonion = document.querySelector(".btn-onions")
var blettuce = document.querySelector(".btn-lettuce")

var items = document.getElementsByClassName("items")


//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  //you can also use getElementById
let patty = document.getElementById("patty");

  if (state.Patty) {
    patty.style.display = "inherit";
    bPatty.classList.add("active")
    items[0].textContent = "Patty"


  } else {
    patty.style.display = "none";
    bPatty.classList.remove("active")
    items[0].textContent = ""


  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese");

  if(state.Cheese) {
	cheese.style.display = "inherit";
  bcheese.classList.add("active")
  items[1].textContent = "Cheese"


  }else{
	cheese.style.display = "none";
  bcheese.classList.remove("active")
  items[1].textContent = ""
  }
  
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes  = document.getElementById("tomato")  
  if (state.Tomatoes){
    tomatoes.style.display = "inherit"
    btomato.classList.add("active")
    items[2].textContent = "Tomatoes"


  } else {
    tomatoes.style.display = "none"
    btomato.classList.remove("active")
    items[2].textContent = ""

  } 
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById("onion");

  if(state.Onions) {
	onion.style.display = "inherit";
  bonion.classList.add("active")
  items[3].textContent = "Onions"


  }else{
	onion.style.display = "none";
  bonion.classList.remove("active")
  items[3].textContent = ""

  }

}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");  

  if (state.Lettuce){
    lettuce.style.display = "inherit"
    blettuce.classList.add("active")
    items[4].textContent = "Lettuce"

  } else {
    lettuce.style.display = "none"
    blettuce.classList.remove("active")
    items[4].textContent = ""

  } 
}






bPatty.onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};


// Trial 2 - Setup event listener for the cheese button

bcheese.onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};
// Trial 2 - Setup event listener for the tomatoes button
btomato.onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
bonion.onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
blettuce.onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
