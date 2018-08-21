const mongoose = require("mongoose");
const db = require("../datamodels");

// This file empties the Products collection and inserts the products below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/paknplay"
);

const productSeed = [
  {
    item_type: "Stuffed Animals",
    item_name: "Teddy Bear",
    item_description: "The teddy bear is always a fan favorite. It's a must have product for any child. Just look at that face",
    quantity: 1,
    item_url: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492f6735e2c55d60fe2f791f1c546280&auto=format&fit=crop&w=3300&q=80",
    total_uses: 10,
    created_at: new Date(Date.now())
  },
  {
    item_type: "Stuffed Animals",
    item_name: "Teddy Bear",
    item_description: "The teddy bear is always a fan favorite. It's a must have product for any child. Just look at that face",
    quantity: 1,
    item_url: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492f6735e2c55d60fe2f791f1c546280&auto=format&fit=crop&w=3300&q=80",
    total_uses: 10,
    created_at: new Date(Date.now())
  },
  {
    item_type: "Stuffed Animals",
    item_name: "Teddy Bear",
    item_description: "The teddy bear is always a fan favorite. It's a must have product for any child. Just look at that face",
    quantity: 1,
    item_url: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492f6735e2c55d60fe2f791f1c546280&auto=format&fit=crop&w=3300&q=80",
    total_uses: 10,
    created_at: new Date(Date.now())
  },
  {
    item_type: "Stuffed Animals",
    item_name: "Teddy Bear",
    item_description: "The teddy bear is always a fan favorite. It's a must have product for any child. Just look at that face",
    quantity: 1,
    item_url: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492f6735e2c55d60fe2f791f1c546280&auto=format&fit=crop&w=3300&q=80",
    total_uses: 10,
    created_at: new Date(Date.now())
  },
  {
    item_type: "Stuffed Animals",
    item_name: "Teddy Bear",
    item_description: "The teddy bear is always a fan favorite. It's a must have product for any child. Just look at that face",
    quantity: 1,
    item_url: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492f6735e2c55d60fe2f791f1c546280&auto=format&fit=crop&w=3300&q=80",
    total_uses: 10,
    created_at: new Date(Date.now())
  },
  {
    item_type: "Stuffed Animals",
    item_name: "Teddy Bear",
    item_description: "The teddy bear is always a fan favorite. It's a must have product for any child. Just look at that face",
    quantity: 1,
    item_url: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492f6735e2c55d60fe2f791f1c546280&auto=format&fit=crop&w=3300&q=80",
    total_uses: 10,
    created_at: new Date(Date.now())
  },
  {
    item_type: "Stuffed Animals",
    item_name: "Teddy Bear",
    item_description: "The teddy bear is always a fan favorite. It's a must have product for any child. Just look at that face",
    quantity: 1,
    item_url: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492f6735e2c55d60fe2f791f1c546280&auto=format&fit=crop&w=3300&q=80",
    total_uses: 10,
    created_at: new Date(Date.now())
  },
  {
    item_type: "Stuffed Animals",
    item_name: "Teddy Bear",
    item_description: "The teddy bear is always a fan favorite. It's a must have product for any child. Just look at that face",
    quantity: 1,
    item_url: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492f6735e2c55d60fe2f791f1c546280&auto=format&fit=crop&w=3300&q=80",
    total_uses: 10,
    created_at: new Date(Date.now())
  }
];

db.Stock
  .remove({})
  .then(() => db.Stock.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
