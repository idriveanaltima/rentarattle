
const db = require("../datamodels");

module.exports = {
  createAccount: function(req, res) {
    console.log("are we getting this far?")
    db.Accounts
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Accounts
      .findById(req.params.email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}