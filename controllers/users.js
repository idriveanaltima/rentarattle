// Import the ORM to create functions that will interact with the database.
//var orm = require("../config/orm.js");

//Import the mongo model
var mongoose = require("mongoose"),
    UserAccount = mongoose.model("useraccount");

module.exports = {
  update: function(objColVals, condition, cb) {
    UserAccount.update(condition, objColVals, function(err, userAccount){
      cb(err, userAccount);
    });
  },
  delete: function(id, cb) {
    UserAccount.remove({_id: id}, function(err){
      cb(err);
    })
  },
  createAccount: function(account, cb) {
    console.log("What's in " + JSON.stringify(account))
    var userAccount = new UserAccount(account);
    userAccount.save(function(err, savedAccount){
      cb(err, savedAccount);
    });
  },
  findUser: function(email, password, cb) {
    UserAccount.findOne({$and: [
      {email: email}, 
      {password: password}
    ]}, function(err, user){
      cb(err, user);
    })
  },
  findById: function(id, cb){
    UserAccount.findById(id, function(err, user){
      cb(err, user);
    });
  }
};
