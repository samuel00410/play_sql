"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Department, {
        foreignKey: "department_id",
        as: "DepartmentInfo",
      });
    }
  }
  Employee.init(
    {
      employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      hire_date: DataTypes.DATE,
      job_id: DataTypes.STRING,
      salary: DataTypes.DOUBLE(8, 2),
      commission_pct: DataTypes.DOUBLE(2, 2),
      manager_id: DataTypes.INTEGER,
      department_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Employee",
      timestamps: false, // 添加這行
    }
  );
  return Employee;
};
