class CustomError extends Error {
  constructor(status, message, error, ...params) {
    super(...params);

    this.status = status;
    this.message = message;
    this.error = error;
  }
}

module.exports = CustomError;