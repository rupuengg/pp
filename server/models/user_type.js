'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_type = sequelize.define('user_type', {
    key: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  user_type.associate = function (models) {
    // associations can be defined here
  };
  return user_type;
};