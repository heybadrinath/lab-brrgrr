// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

var bPatty = document.querySelector(".btn-patty")
var bcheese = document.querySelector(".btn-cheese")
var btomato = document.querySelector(".btn-tomatoes")
var bonion = document.querySelector(".btn-onions")
var blettuce = document.querySelector(".btn-lettuce")

var items = document.getElementsByClassName("items")
var price = 0;
var displayPrice = document.querySelector(".price-details");


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
    


  } else {
    patty.style.display = "none";


  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese");

  if(state.Cheese) {
	cheese.style.display = "inherit";


  }else{
	cheese.style.display = "none";
  }
  
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes  = document.getElementById("tomato")  
  if (state.Tomatoes){
    tomatoes.style.display = "inherit"


  } else {
    tomatoes.style.display = "none"

  } 
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById("onion");

  if(state.Onions) {
	onion.style.display = "inherit";


  }else{
	onion.style.display = "none";

  }

}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");  

  if (state.Lettuce){
    lettuce.style.display = "inherit"

  } else {
    lettuce.style.display = "none"

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

function renderButtons() {
  if(state.Patty) {
    bPatty.classList.add("active")
  } else {
    bPatty.classList.remove("active")
  }

  if(state.Cheese) {
    bcheese.classList.add("active")
  } else {
    bcheese.classList.remove("active")
  }

  if(state.Tomatoes) {
    btomato.classList.add("active")
  } else {
    btomato.classList.remove("active")
  }

  if(state.Onions) {
    bonion.classList.add("active")
  } else {
  bonion.classList.remove("active")
  }

  if(state.Lettuce) {
    blettuce.classList.add("active")
  } else {
    blettuce.classList.remove("active")
  }

}




//Challenge 2 - Render only the items selected in the ingredients board based on the state


function renderIngredientsBoard() {
  if(state.Patty) {
    items[0].textContent = "Patty"
  } else {
    items[0].textContent = ""
  }

  if(state.Cheese) {
  items[1].textContent = "Cheese"
  } else {
    items[1].textContent = ""
  }

  if(state.Tomatoes) {
    items[2].textContent = "Tomatoes"
  } else {
    items[2].textContent = ""
  }

  if(state.Onions) {
    items[3].textContent = "Onions"
  } else {
    items[3].textContent = ""
  }

  if(state.Lettuce) {
    items[4].textContent = "Lettuce"
  } else {
    items[4].textContent = ""
  }

}




//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice() {
  price = 0;
  if(state.Patty) {
    price += 80
  }
  if(state.Cheese) {
    price += 10
  }
  if (state.Tomatoes) {
    price += 20
  }
  if (state.Onions) {
    price += 20
  }
  if (state.Lettuce) {
    price += 20
  }

  displayPrice.textContent = `INR ${price+10}`;
}
