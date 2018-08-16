
const db = require("../datamodels");

var mongoose = require("mongoose"),
    Item = mongoose.model("item");

module.exports = {

  findAll: function(req, res) {
    db.Stock
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Stock
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Item
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Stock
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Stock
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    all: function(cb) {
      Item.find({})
          .select({item_name: 1, price: 1, purchased: 1})
          .exec(function(err, items){
            cb(err, items);
          });
    },
    // The variables cols and vals are arrays.
    create: function(data, cb) {
      var item = new Item(data);
      item.save(function(err, savedItem){
        cb(err, savedItem);
      });
    },
    update: function(objColVals, condition, cb) {
      Item.update(condition, objColVals, function(err, savedItem){
        cb(err, savedItem);
      });
    },
    delete: function(id, cb) {
      Item.deleteOne({_id: id}, function(err){
        cb(err);
      });
    }
  };






