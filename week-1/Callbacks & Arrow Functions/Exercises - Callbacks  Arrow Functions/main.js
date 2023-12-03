
// Exercise 1 - Callbacks

const push = function () {
    console.log("pushing it!");
  };
  
  const pull = function () {
    console.log("pulling it!");
  };
  
  const pushPull = function (callback) {
    callback();
  };
  
  pushPull(push); 
  pushPull(pull); 
  


  // Exercise 2 - Callbacks

  const returnTime = function (time) {
    alert('The current time is: ' + time);
  };
  
  const getTime = function (callback) {
    const currentTime = new Date();
    callback(currentTime);
  };
  
  getTime(returnTime);
  
  

  // Exercise 4 - Arrow Functions
  const sum = (a, b, c) => a + b + c;



  // Exercise 5 - Arrow Functions
  // toLowerCase -  changes all the letters in a string to lowercase 
  // replace(/\b\w/g, c => c.toUpperCase()): - replaces the first characters of each word in a string with uppercase letters 


  const capitalize = (str) => str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  console.log(capitalize("bOb")); // return "Bob"
  console.log(capitalize("TAYLOR")); // return "Taylor"
  console.log(capitalize("feliSHIA")); // return "Felishia"


