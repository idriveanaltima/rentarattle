
const db = require("../datamodels");

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
  }
};



  // Create all our routes and set up logic within those routes where required. Probably don't need any of these.....
//   app.get("/api/items", function(req, res) {
//     items.all(function(err, data) {
//       res.json(data);
//     });
//   });

//   app.post("/api/items", function(req, res) {
//     items.create(req.body, function(err, result){
//       if(!err){
//         res.json({id: result._id});
//       }
//     });
//   });

//   app.put("/api/items/:id", function(req, res) {
//     var condition = {_id : req.params.id};

//     console.log("condition", condition);

//     items.update({
//       purchased: req.body.purchased
//     }, condition, function(err, result) {
//       if (err) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

//   app.delete("/api/items/:id", function(req, res) {
//     items.delete(req.params.id, function(err) {
//       if(err){
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
// }

