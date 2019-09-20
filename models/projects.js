module.exports = function(sequelize, DataTypes) {
  let Project = sequelize.define("Project", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    eventTime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    photo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    participantCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Project.associate = function(models) {
    //Foreign key prevents projects from started made without a user
    Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Project.belongsToMany(models.User, { through: models.ProjectParticipant });
  };

  return Project;
};
