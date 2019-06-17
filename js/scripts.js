
// Business Logic //


var medium = ["Medium"];
var large = ["Large"];
var mutton = ["Mutton"];
var veggie = ["Vegetarian"];
var pep = ["Pepperoni"];
var crispy = ["Crispy"];
var stuffed = ["Stuffed"];
var glutten = ["Glutten-free"];

function Pizza(pSize, topping, crust, price) {
  this.pSize = pSize;
  this.topping = topping;
  this.crust = crust;
  this.price = 0;
}

Pizza.prototype.addToPrice = function () {
  if (small.includes(this.pSize)) {
    this.price += 500;
  }
  if (medium.includes(this.pSize)) {
    this.price += 1000;
  }
  if (large.includes(this.pSize)) {
    this.price += 1500;
  }
  if (mutton.includes(this.topping)) {
    this.price += 200;
  }
  if (veggie.includes(this.topping)) {
    this.price += 100;
  }
  if (pep.includes(this.topping)) {
    this.price += 150;
  }
  if (crispy.includes(this.crust)) {
    this.price += 100;
  }
  if (stuffed.includes(this.crust)) {
    this.price += 100;
  }
  if (glutten.includes(this.crust)) {
    this.price += 50;
  }
};

// User Interface //

$(document).ready(function () {
  $(".formInput").submit(function (event) {
    event.preventDefault();
    var pSize = $("#pSize").val();
    var topping = $("#topping").val();
    var crust = $("#crust").val();
    var price = 0;

    function invoice(){ var newPizza = new Pizza(pSize, toppings, crust, price);

    newPizza.addToPrice();

    console.log(newPizza);
    $("#list").append("<ul>" + newPizza.pSize + "</ul>");
    $("#list").append("<ul>" + newPizza.topping + "</ul>");
    $("#list").append("<ul>" + newPizza.crust + "</ul>");
    $("#list").append("<ul>" + "Total." + newPizza.price + "</ul>");

    $(".formInput").hide();
    $("#orderConfirmation").show();
  });
  
});
