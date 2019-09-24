module.exports = function(sequelize, DataTypes) {
  let BlogLikes = sequelize.define("BlogLikes", {
    blogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  BlogLikes.associate = function(models) {
    //Foreign key prevents projects from started made without a user
    BlogLikes.belongsTo(models.User, {
      as: "likers",
      foreignKey: {
        allowNull: false
      }
    });
    BlogLikes.belongsTo(models.BlogPost, {
      as: "blogLikes",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return BlogLikes;
};
