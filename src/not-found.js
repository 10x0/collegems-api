exports.notFound = (req, res, next) => {
  res.status(404);
  const error = new Error('NOT FOUND');
  next(error);
};
