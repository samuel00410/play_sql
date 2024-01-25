"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.hasMany(models.Employee, {
        foreignKey: "department_id",
      });
    }
  }
  Department.init(
    {
      department_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      department_name: DataTypes.STRING,
      manager_id: DataTypes.INTEGER,
      location_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Department",
      timestamps: false, // 添加這行
    }
  );
  return Department;
};
