const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Employee = require("./EmployeeModel");

/**
 * Initialize express app
 * @type {express.Application}
 */
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0/employeesDB");

/**
 * Route to get all employees
 * @route GET /api/employees
 * @returns {JSON} - List of employees
 */
app.get("/api/employees", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

/**
 * Route to create a new employee
 * @route POST /api/employees
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {JSON} - The created employee
 */
app.post("/api/employees", async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.status(201).json(newEmployee);
});

/**
 * Root endpoint
 * @route GET /
 * @returns {string} - Welcome message
 */
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon serveur API!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
