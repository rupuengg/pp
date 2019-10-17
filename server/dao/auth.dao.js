// authDao

const authModel = require('../models').auth;
const userModel = require('../models').user;

const createToken = async (data) => {
  return await authModel.build(data).save();
};

const getUserWithToken = async (filters) => {
  return await authModel.findOne({
    where: filters,
    includes: [{
      user: userModel
    }]
  });
};

const deleteToken = async (filters) => {
  return await authModel.destroy({
    where: filters
  })
};

module.exports = {
  createToken,
  getUserWithToken,
  deleteToken,
};