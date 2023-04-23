exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  const message = err.message || 'INTERNAL SERVER ERROR';
  res.status(statusCode).json({ message });
};
