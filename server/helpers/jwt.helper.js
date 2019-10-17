// jwtHelper

const jwt = require('jsonwebtoken');
const CustomError = require('./custom.error.helper');
const httpConstant = require('../constants/http.constant');
const errorMessageConstant = require('../constants/error.message.constant');

const createToken = async (payload = {}) => {
  return await jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
};

const verifyToken = async (token) => {
  try {
    return await jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  } catch (err) {
    throw new CustomError(httpConstant.UNAUTHORIZED, errorMessageConstant.auth.TOKEN_NOT_VERIFIED);
  }
};

module.exports = {
  createToken,
  verifyToken
};