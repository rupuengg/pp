// authService

const bcrypt = require('bcrypt');
const userDao = require('../dao/user.dao');
const CustomError = require('../helpers/custom.error.helper');
const httpConstant = require('../constants/http.constant');
const errorMessageConstant = require('../constants/error.message.constant');
const authDao = require('../dao/auth.dao');
const jwtHelper = require('../helpers/jwt.helper');

const authenticate = async (body) => {
  const user = await userDao.getUserByEmail({ email: body.email });
  if (!user) throw new CustomError(httpConstant.NOT_FOUND, errorMessageConstant.user.INVALID_EMAIL_ADDRESS);

  const hash = await bcrypt.compare(body.password, user.password);
  if (!hash) throw new CustomError(httpConstant.NOT_FOUND, errorMessageConstant.user.INVALID_LOGIN_CREDENTIAL);

  const jwt_token = await jwtHelper.createToken({ id: user.id });

  const auth = await authDao.createToken({
    user_id: user.id,
    token: jwt_token
  });

  return {
    message: errorMessageConstant.LOGIN_SUCCESSFUL,
    data: {
      token: auth.token,
      user
    }
  }
};

const getUserWithToken = async (token, user_id) => {
  return await authDao.getUserWithToken({
    token,
    user_id
  });
};

const logout = async (token) => {
  const result = await authDao.deleteToken({
    token
  });
  return {
    message: errorMessageConstant.user.LOGOUT_SUCCESSFULL
  }
};

module.exports = {
  authenticate,
  getUserWithToken,
  logout,
};