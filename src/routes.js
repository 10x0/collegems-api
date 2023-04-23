const express = require('express');
const {
  createCourse,
  getAllCourses,
  editCourse,
  deleteCourse,
} = require('./features/course/course.controller');
const {
  createmodule,
  getAllModules,
  editModule,
  deleteModule,
} = require('./features/module/module.controller');

const router = express.Router();

router.route('/courses').post(createCourse).get(getAllCourses);
router.route('/courses/:id').put(editCourse).delete(deleteCourse);
router.route('/modules').post(createmodule).get(getAllModules);
router.route('/modules/:id').put(editModule).delete(deleteModule);

module.exports = router;
