const express = require('express');
const {
  createCourse,
  getAllCourses,
  editCourse,
  deleteCourse,
  getCourseWithId,
} = require('./features/course/course.controller');
const {
  createmodule,
  getAllModules,
  editModule,
  deleteModule,
} = require('./features/module/module.controller');
const {
  sendApplication,
  getApplications,
  deleteApplication,
} = require('./features/application/application.controller');

const router = express.Router();

router.route('/courses').post(createCourse).get(getAllCourses);
router
  .route('/courses/:id')
  .get(getCourseWithId)
  .put(editCourse)
  .delete(deleteCourse);

router.route('/modules').post(createmodule).get(getAllModules);
router.route('/modules/:id').put(editModule).delete(deleteModule);

router.route('/applications').post(sendApplication).get(getApplications);
router.route('/applications/:id').delete(deleteApplication);

module.exports = router;
