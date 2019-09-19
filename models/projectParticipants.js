const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    let ProjectParticipant = sequelize.define("ProjectParticipant", {
      userID: {
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
      projectID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      }, 
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    
    ProjectParticipant.associate = function(models) {
      //Foreign key prevents projects from started made without a user
      ProjectParticipant.belongsTo(models.Project, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    ProjectParticipant.associate = function(models) {
      ProjectParticipant.hasMany(models.Project, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return ProjectParticipant;
  };
  