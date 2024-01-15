const mongoose = require('mongoose');

/**
 * Employee Schema
 * @typedef {Object} EmployeeSchema
 * @property {string} firstName - The first name of the employee
 * @property {string} lastName - The last name of the employee
 * @property {Date} startDate - The start date of the employee in the company
 * @property {string} department - The department of the employee
 * @property {Date} dateOfBirth - The date of birth of the employee
 * @property {string} street - The street address of the employee
 * @property {string} city - The city of the employee
 * @property {string} state - The state of the employee
 * @property {string} zipCode - The zip code of the employee
 */

/**
 * Mongoose schema definition for the Employee.
 * @type {mongoose.Schema<EmployeeSchema>}
 */
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

/**
 * Model for the Employee
 * @type {mongoose.Model<EmployeeSchema>}
 */
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
