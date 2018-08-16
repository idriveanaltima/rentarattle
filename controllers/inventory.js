var mongoose = require("mongoose"),
    Stock = mongoose.model("stock");

module.exports = {
  // all: function(req, res) {
  //   db.Stock
  //     .find(req.query)
  //     // .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  
  all: function(cb) {
    Stock.find({})
        .exec(function(err, items){
          cb(err, items);
        });
  },
  create: function(data, cb) {
    var stock = new Stock(data);
    stock.save(stock, function(err, createdStock){
      cb(err, createdStock);
    });
  },
  update: function(objColVals, condition, cb) {
    Stock.update(condition, objColVals, function(err, updateStock){
      cb(err, updatedStock);
    });
  },
  delete: function(id, cb){
    Stock.deleteOne({_id: id}, function(err){
      cb(err);
    });
  }
};
