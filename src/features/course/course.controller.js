const CourseModel = require('./course.model');

exports.createCourse = async (req, res, next) => {
  try {
    await CourseModel.create(req.body);
    res.status(201).json({ message: 'Course created.' });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.editCourse = async (req, res, next) => {
  try {
    await CourseModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Edit successful.' });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    await CourseModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Course removed.' });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllCourses = async (req, res, next) => {
  try {
    const courses = await CourseModel.find().populate('modules');
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json(error);
  }
};
