// const db = require("../models");

// module.exports = function(app) {
//   // Find a post by the userName of the user who created that post
//   app.get("/api/Post/:userName", function(req, res) {
//     db.User.findAll({
//       include: [db.User],
//       where: {
//         userName: req.params.userName
//       }
//     })
//       .then(function(dbUser) {
//         res.json(dbUser);
//       })
//       .catch(function(err) {
//         res.json(err);
//       });
//   });
// };
