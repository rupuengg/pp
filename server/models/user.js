module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  user.associate = function (models) {
    // user.hasOne(models.auth, {
    //   foreignKey: "user_id"
    // })
    // associations can be defined here
  };

  return user;
};