
// /* --------- Exercise 1 + Exercise 2 ---------

  // let ul = $("<ul>").appendTo("body");
  // $("<li>").text(" list human ").appendTo(ul);

  // $("button").on("click", function () {
  //   let inputValue = $("#my-input").val();

  //   if (inputValue.trim() !== "") {
  //     let newLi = $("<li>").text(inputValue);

  //     ul.append(newLi);

  //     newLi.on("click", function () {
  //       $(this).remove(); 
  //     });

      
  //     $("#my-input").val("");
  //   }
  // });

  
  // ul.on("click", "li", function () {
  //   $(this).remove(); 
  // });



  // -------------- Exercise 3 --------------

  // let box1 = $("<div>").addClass("box").appendTo("body");
  // let box2 = $("<div>").addClass("box").appendTo("body");

  // box1.hover(
  //   function () {
  //     $(this).css("background-color", "#3498db");
  //     box2.css("background-color", "#8e44ad");
  //   },
  //   function () {
  //     $(this).css("background-color", "#8e44ad");
  //   }
  // );

  // box2.hover(
  //   function () {
  //     $(this).css("background-color", "#3498db");
  //     box1.css("background-color", "#8e44ad");
  //   },
  //   function () {
  //     $(this).css("background-color", "#8e44ad");
  //   }
  // );



// ----------------------------------------------
// Exercise 4
  // $(".item[data-instock='true']").on("click", function () {
  //     let itemName = $(this).text();
  //     let cartItem = `<div class="cart-item">${itemName}</div>`;
  //     $("#cart").append(cartItem);
  // });

// ----------------------------------------------



// Exercise 5 
const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" }
]


for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i];
  let div = $("<div>");
  div.text(fruit.name);
  div.addClass(fruit.color);
  $("#basket").append(div);
}

