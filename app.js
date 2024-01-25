const express = require("express");
const app = express();
const db = require("./models");
const Department = db.Department;
const Employee = db.Employee;
const Sequelize = require("sequelize");
const myModule = require("./myModules");

console.log(myModule.try1());
console.log(myModule.try2());

// 創建一個 Sequelize 實例，並連接到你的數據庫
const sequelize = new Sequelize("atguigudb", "root", "root", {
  host: "localhost",
  dialect: "mysql", // 或其他數據庫類型，如 'postgres', 'sqlite', 'mssql'
});

// app.get("/test", async (req, res) => {
//   const findResult = await Employee.findAll({
//     attributes: ["employee_id", "first_name", "salary"],
//     include: [
//       {
//         model: Department,
//         as: "DepartmentInfo", // 使用在 Employee 模型中定义的别名
//       },
//     ],
//   });

//   return res.send({ data: findResult });
// });

// app.get("/test2", async (req, res) => {
//   const result = await Employee.find({
//     where: {
//       [Op.gt]: [{ department_id: 10, department_id: 20, department_id: 30 }],
//     },
//     attributes: ["employee_id", "first_name", "last_name", "salary"],
//   });
// });

// 確保 sequelize 可以正常連接和同步到數據庫
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//     sequelize.sync();
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// 在开始服务器前同步所有模型(Model)
sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log("伺服器正在聆聽port 8000...");
  });
});
