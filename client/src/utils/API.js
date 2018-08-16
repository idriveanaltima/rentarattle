import axios from "axios";

export default {
  // Gets all books
  getStock: function() {
    return axios.get("/api/items");
  },
  getProfile: function() {
    return axios.get("/api/profile");
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  createAccount: function(account) {
    console.log("hitting this post route?")
    return axios.post("/register", account);
  },
  login: function(account) {
    console.log("hitting this login route?")
    return axios.post("/login", account);
},
addInventory: function(item) {
  console.log("hitting this addItem route?")
  return axios.post("/api/inventory", item);
},
getInventory: function(item) {
  console.log("hitting this Inventory route?")
  return axios.get("/api/inventory", item);
},
};
