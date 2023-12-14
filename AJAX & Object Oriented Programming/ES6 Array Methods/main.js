

// // Exercise 1 --- one 
// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         const users = response.data;
//         const mappedData = users.map(user => ({
//             email: user.email,
//             companyName: user.company.name
//         }));
//         console.log(mappedData);
//     })
//     .catch(error => console.error('Error fetching user data:', error));

// Exercise 1 --- tow
// Fetch user data from the API
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     // Map the data to create a new array with email and company name
//     let mappedData = users.map(user => {
//       return {
//         email: user.email,
//         companyName: user.company.name
//       };
//     });

//     console.log(mappedData);
//   })
//   .catch(error => console.error('Error fetching user data:', error));


// Exercise 2 --- 
// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     const users = response.data;

//     const filteredUsers = users.filter(user => user.address.zipcode.startsWith('5'));

//     console.log(filteredUsers);
//   })
//   .catch(error => console.error('Error fetching user data:', error));


// Exercise 3 --- 
// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     const users = response.data;

//     const filteredUserIDs = users
//       .filter(user => user.address.zipcode.startsWith('5'))
//       .map(user => user.id);

//     console.log(filteredUserIDs);
//   })
//   .catch(error => console.error('Error fetching user data:', error));


// Exercise 4 --- 

// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     const users = response.data;

//     const filteredNames = users
//       .map(user => user.name)
//       .filter(name => name.startsWith('C'));

//     console.log(filteredNames);
//   })
//   .catch(error => console.error('Error fetching user data:', error));


// Exercise 5 --- 
// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     const users = response.data;

//     const allLiveInSouthChristy = users.every(user => user.address.city === 'South Christy');

//     console.log(allLiveInSouthChristy);
//   })
//   .catch(error => console.error('Error fetching user data:', error));


// Exercise 6 --- 
// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     const users = response.data;

//     const userWithSuite950 = users.find(user => user.address.suite === 'Apt. 950');

//     if (userWithSuite950) {
//       console.log(userWithSuite950.company.name);
//     } else {
//       console.log('User with suite "Apt. 950" not found.');
//     }
//   })
//   .catch(error => console.error('Error fetching user data:', error));


// Exercise 7 --- 

// const axios = require('axios');

// function logUserInfo(user) {
//   console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
// }

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     const users = response.data;

//     users.forEach(logUserInfo);
//   })
//   .catch(error => console.error('Error fetching user data:', error));



