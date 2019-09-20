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
      blogPhoto: {
        type: Sequelize.BLOB,
        allowNull: false,
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
    };

    return BlogPost;
  };
