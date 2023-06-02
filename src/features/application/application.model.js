const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  placeOfBirth: { type: String },
  gender: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  currentAddress: {
    type: String,
    required: true,
  },
  lastAcademicInfo: {
    type: String,
    required: true,
  },
  hostel: {
    type: String,
  },
  transportation: {
    type: String,
  },
  lunch: {
    type: String,
  },
  fatherName: {
    type: String,
    required: true,
  },
  fatherContactNumber: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherContactNumber: {
    type: String,
    required: true,
  },
  guardianName: {
    type: String,
    required: true,
  },
  guardianContactNumber: {
    type: String,
    required: true,
  },
  siblingInfo: {
    type: String,
  },
  aboutUs: {
    type: String,
  },
  applicantName: {
    type: String,
    required: true,
  },
  applicantRelation: {
    type: String,
    required: true,
  },
  applicantContactNumber: {
    type: String,
    required: true,
  },
  applicantEmail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Application', applicationSchema);
