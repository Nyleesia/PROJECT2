module.exports = function(sequelize, DataTypes) {
  let Project = sequelize.define("Project", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
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
      type: DataTypes.STRING,
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

    Project.belongsToMany(models.User, {
      as: "attendees",
      through: models.ProjectParticipant
    });
  };

  return Project;
};
