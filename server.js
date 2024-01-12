const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0/employeesDB');

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

// Routes
app.get('/api/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.post('/api/employees', async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.status(201).json(newEmployee);
});

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur API!');
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
