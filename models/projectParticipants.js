module.exports = function(sequelize, DataTypes) {
  let ProjectParticipant = sequelize.define("ProjectParticipant", {
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return ProjectParticipant;
};
