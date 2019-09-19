//Get dependencies
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models"); //DB models

//Set up app and PORT
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Middleware
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

// Get Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `db`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Start server and sync models 
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      `==>🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
  });
});

module.exports = app;
