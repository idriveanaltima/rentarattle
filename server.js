const express = require("express");
const path = require("path");
const passport = require("passport");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const app = express();
const auth = require("./middleware/auth");
const jwt = require('jwt-express');
//Add the mongoose initializer
require("./config/mongoose");
//Add the passport configureation
require("./passport/passport");

const PORT = process.env.PORT || 4000;

// app.use(express.static("public"));
//change views directory to public, and move CSS and other stuff to it. Compare to what's in public directory on cats activity
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(jwt.init("WCFQC9PY8QAFVHUR6XZHG225ZGG5GFTJGILN", {
  cookies: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

//Add unauthenticated controllers
require("./routes/unauthenticated.js") (app, jwt);
require("./routes/items.js") (app, jwt);
require("./routes/inventory.js") (app, jwt);


//Require auth middleware
// app.use(auth.validateRequest);

//Add authenticated controllers
// require("./controllers/itemsController");
// require("./controllers/account");

//Start listening
app.listen(PORT, () => {
    console.log("App listening on PORT: localhost:" + PORT);
});

