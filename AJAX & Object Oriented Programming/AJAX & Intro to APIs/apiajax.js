{/* <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

$.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people", function(data, status){
    const person19 = data[18];
    
    if (person19.pets.length > 0) {
        const firstPetType = person19.pets[0].type;
        console.log("The type of the 19th person's first pet is:", firstPetType);
    } else {
        console.log("The 19th person has no pets.");
    }
}); */}


const axios = require('axios');

const apiEndpoint = "https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people";

axios.get(apiEndpoint)
  .then(response => {
    const person19 = response.data[18];
    
    if (person19.pets.length > 0) {
      const firstPetType = person19.pets[0].type;
      console.log("The type of the 19th person's first pet is:", firstPetType);
    } else {
      console.log("The 19th person has no pets.");
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

  $.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people", function(data, status) {
  let peopleWithoutFamily = 0;

  data.people.forEach(person => {
    if (person.family.spouse === null && person.family.children.length === 0) {
      peopleWithoutFamily++;
    }
  });

  console.log("Number of people without children or spouses:", peopleWithoutFamily);
});




$.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people", function(data, status){
    const person19 = data[18];
    
    if (person19.pets.length > 0) {
        const firstPetType = person19.pets[0].type;
        console.log("The type of the 19th person's first pet is:", firstPetType);
    } else {
        console.log("The 19th person has no pets.");
    }
});

