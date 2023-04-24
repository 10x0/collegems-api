const ApplicationModel = require('./application.model');

exports.sendApplication = async (req, res, next) => {
  try {
    await ApplicationModel.create(req.body);
    res.status(201).json({ message: 'Application sent.' });
  } catch (error) {
    next(error);
  }
};

exports.deleteApplication = async (req, res, next) => {
  try {
    await ApplicationModel.findByIdAndRemove(req.params.id);
    res.status(201).json({ message: 'Application sent.' });
  } catch (error) {
    next(error);
  }
};

exports.getApplications = async (req, res, next) => {
  try {
    const applications = await ApplicationModel.find().populate('course');
    res.status(200).json(applications);
  } catch (error) {
    next(error);
  }
};
