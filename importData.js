const mongoose = require("mongoose");
const fs = require("fs");
const Employee = require("./EmployeeModel");

//Connect to MongoDB database
mongoose.connect("mongodb://0.0.0.0/employeesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//import data from JSON file
const importData = async () => {
  try {
    Employee.deleteMany({});
    const data = JSON.parse(fs.readFileSync("employees.json", "utf-8"));
    await Employee.insertMany(data);
    console.log("Data successfully imported!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

importData();
