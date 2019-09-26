const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  let BlogPost = sequelize.define("BlogPost", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true
    },
    blogPhoto: {
      type: Sequelize.STRING,
      allowNull: true
    },
    blogPost: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    }
  });

  BlogPost.associate = function(models) {
    //Foreign key prevents posts from being made without a user
    BlogPost.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    BlogPost.hasMany(models.BlogComments, {
      as: "commentPosts",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return BlogPost;
};
