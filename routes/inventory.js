const Inventory = require("../controllers/inventory");

module.exports = function (app, jwt) {

    // Create all our routes and set up logic within those routes where required. Probably don't need any of these.....
  app.get("/api/inventory", function(req, res) {
    Inventory.all(function(err, data) {
      console.log("here is the data for getting the inventory")
      console.log(data)
      res.json(data);
    });
  });

  app.post("/api/inventory", function(req, res) {
    console.log("route in node?")
    Inventory.create(req.body, function(err, result){
      if(!err){
        res.json({id: result._id});
      }
    });
  });

  app.put("/api/inventory/:id", function(req, res) {
    var condition = {_id : req.params.id};

    console.log("condition", condition);

    items.update({
      purchased: req.body.purchased
    }, condition, function(err, result) {
      if (err) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  app.delete("/api/inventory/:id", function(req, res) {
    items.delete(req.params.id, function(err) {
      if(err){
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
}


