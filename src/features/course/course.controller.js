const CourseModel = require('./course.model');

exports.createCourse = async (req, res, next) => {
  try {
    await CourseModel.create(req.body);
    res.status(201).json({ message: 'Course created.' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.getAllCourses = async (req, res, next) => {
  try {
    const courses = await CourseModel.find().populate('modules');
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
