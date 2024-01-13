const mongoose = require('mongoose');

// Schema for the Employee
const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  startDate: Date,
  department: String,
  dateOfBirth: Date,
  street: String,
  city: String,
  state: String,
  zipCode: String
});

// Model for the Employee
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
