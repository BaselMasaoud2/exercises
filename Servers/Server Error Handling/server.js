const express = require('express');
const app = express();

const users = [
    { id: 1, username: "lil", country: "Greece", age: 40 },
    // Add more users as needed
];

// Your existing code goes here

app.get('/', function (req, res) {
    res.send(users.map(user => `User ID: ${user.id}, Username: ${user.username}`));
});

// Route to get all users
app.get('/users', function (req, res) {
    res.send(users);
});
app.use(function(req, res, next) {
    if (req.path.endsWith('/') && req.path.length > 1) {
        const query = req.url.slice(0, -1) + req.url.slice(-1).replace('/', '');
        res.redirect(301, query);
    } else {
        next();
    }
});

app.get('/users', function (req, res) {
    const username = req.query.username;

    // Find the user in the array
    const user = users.find(user => user.username === username);

    // Check if the user was found
    if (!user) {
        res.status(404).send({ "Error": `User with username ${username} not found.` });
        return;
    }

    // If user found, send user details
    res.send(user);
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
