// userDao
const userModel = require('../models').user;
console.log(userModel);

const getUserByEmail = async (filters) => {
  const user = await userModel.findOne({
    where: filters
  });
  return user;
};

module.exports = {
  getUserByEmail
};