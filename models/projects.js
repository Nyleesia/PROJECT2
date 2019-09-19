const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    let Project = sequelize.define("Project", {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
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
        type: Sequelize.BLOB,
        allowNull: true,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      }, 
      participants: {
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
    };

    Project.associate = function(models) {
        //Foreign key prevents projects from started made without a user
          Project.hasOne(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
      };

    Project.associate = function(models) {
    // Allows a one to many relationship between project and participants (up to project "capacity")
        Project.hasMany(models.projectParticipants, {as: "participants"}, { 
            onDelete: "cascade"
        });
    };
    return Project;
  };