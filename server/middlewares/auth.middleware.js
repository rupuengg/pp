// authMiddleware
const CustomError = require('../helpers/custom.error.helper');
const httpConstants = require('../constants/http.constant');
const errorMessageConstants = require('../constants/error.message.constant');
const { verifyToken } = require('../helpers/jwt.helper');
const authService = require('../services/auth.service');

const catchValidationErrors = (err, req, res, next) => {
  // if (err instanceof validator.ValidationError) {
  //   const errorDetails = lodash.map(err.errors, lodash.partialRight(lodash.pick, ['field', 'messages']));
  //   const error = new CustomError(err.status, err.message, errorDetails);
  //   return res.status(err.status).json(error);
  // }
  if (err instanceof CustomError) {
    const error = new CustomError(err.status, err.message, err.errors);
    return res.status(err.status).json(error).end();
  }
  return next();
};

const authentication = async (req, res, next) => {
  try {
    const token = req.token;
    if (!token) return next(new CustomError(httpConstants.UNAUTHORIZED, errorMessageConstants.auth.TOKEN_MISSING));

    const authObj = await verifyToken(token);
    if (!authObj) return next(new CustomError(httpConstants.UNAUTHORIZED, errorMessageConstants.auth.TOKEN_NOT_VERIFIED));

    const user = await authService.getUserWithToken(token, authObj.id);
    if (!user) return next(new CustomError(httpConstants.UNAUTHORIZED, errorMessageConstants.auth.TOKEN_NOT_VERIFIED));

    req.user = {
      id: authObj.user_id,
      verify_token_id: authObj.id,
      data: authObj
    };

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  catchValidationErrors,
  authentication
};