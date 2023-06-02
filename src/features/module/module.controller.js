const mongoose = require('mongoose');
const ModuleModel = require('./module.model');
const CourseModel = require('../course/course.model');

exports.createmodule = async (req, res, next) => {
  try {
    const module = await ModuleModel.create(req.body);
    await CourseModel.findByIdAndUpdate(req.body.course, {
      $push: { modules: module },
    });
    res.status(201).json({ message: 'Module created.' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.editModule = async (req, res, next) => {
  try {
    await ModuleModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Edit successful.' });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteModule = async (req, res, next) => {
  try {
    await ModuleModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Module removed.' });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllModules = async (req, res, next) => {
  try {
    const modules = await ModuleModel.find().populate('course');
    res.status(200).json(modules);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
