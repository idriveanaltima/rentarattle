const passport = require("passport"),
    User = require("../models/users"),
    path = require("path");


module.exports = function (app, jwt) {
    app.get("/", function(req, res){
        // res.sendFile(path.join(__dirname, "client/public/index.html")
    res.render("working or not?");
    });

    app.post('/login', 
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })
    );

    app.post('/register', function (req, res) {
        console.log(req)
        User.createAccount(req.body, function (err, account) {
            if (err) throw (err);
            res.redirect("/");
        });
    });

    app.get('/logout', function (req, res) {
        req.logout();
        req.flash('success message', "You are now logged out")
        res.redirect('/');
    });
}