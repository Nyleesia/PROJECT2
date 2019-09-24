//Get dependencies
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models"); //DB models

//Set up app and PORT
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Middleware
const passport = require("./config/passport");
const session = require("express-session");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Set up Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Get Routes
const apiLoginRoute = require("./routes/apiLoginRoutes");
const htmlRoute = require("./routes/htmlRoutes");
const userRoute = require("./routes/apiUserRoutes");
require("./routes/apiProjectRoutes")(app);
app.use("/api", apiLoginRoute, userRoute);
app.use("/", htmlRoute);

// logout route defined by passport
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// redirect any unknown request to /
app.get("*", function(req, res) {
  res.redirect("/");
});

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `db`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Start server and sync models
db.sequelize.sync({ force: syncOptions.force }).then(function() {
  app.listen(PORT, function() {
    console.log(
      `==>🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    );
  });
});

module.exports = app;
