// authController

const { OK, SERVER_ERROR } = require('../constants/http.constant');
const authService = require('../services/auth.service');

const authenticate = async (req, res) => {
  try {
    const user = await authService.authenticate(req.body);
    return res.status(OK).json(user);
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
};

const logout = async (req, res) => {
  try {
    const result = await authService.logout(req.token);
    return res.status(OK).json(result);
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
};

module.exports = {
  authenticate,
  logout
};