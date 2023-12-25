const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', function (req, res) {
    res.send('Server is up and running smoothly');
});

// Data for Exercise 2
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
];


// 
// Price check route
app.get('/priceCheck/:name', function (req, res) {
    const itemName = req.params.name;
    const item = store.find(item => item.name === itemName);

    if (item) {
        res.json({ price: item.price });
    } else {
        res.json({ price: null });
    }
});

// Start the server
app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});

/// 3  

app.get('/buy/:name', function (req, res) {
  const itemName = req.params.name;
  const itemIndex = store.findIndex(item => item.name === itemName);

  if (itemIndex !== -1 && store[itemIndex].inventory > 0) {
    // Decrease the inventory by 1
    store[itemIndex].inventory -= 1;
    // Send the updated item details as a response
    res.json({
      name: store[itemIndex].name,
      inventory: store[itemIndex].inventory,
      price: store[itemIndex].price
    });
  } else {
    res.status(404).json({ error: 'Item not available for purchase' });
  }
});






