const express = require('express');
const {
  createCourse,
  getAllCourses,
} = require('./features/course/course.controller');
const {
  createmodule,
  getAllModules,
} = require('./features/module/module.controller');

const router = express.Router();

router.route('/courses').post(createCourse).get(getAllCourses);
router.route('/modules').post(createmodule).get(getAllModules);

module.exports = router;
