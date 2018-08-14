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
  }
};
