const CourseModel = require('./course.model');

exports.createCourse = async (req, res, next) => {
  try {
    await CourseModel.create(req.body);
    res.status(201).json({ message: 'Course created.' });
  } catch (error) {
    next(error);
  }
};

exports.editCourse = async (req, res, next) => {
  try {
    await CourseModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Edit successful.' });
  } catch (error) {
    next(error);
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    await CourseModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Course removed.' });
  } catch (error) {
    next(error);
  }
};

exports.getAllCourses = async (req, res, next) => {
  try {
    const courses = await CourseModel.find().populate('modules');
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

exports.getCourseWithId = async (req, res, next) => {
  try {
    const course = await CourseModel.findById(req.params.id).populate(
      'modules'
    );
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};
