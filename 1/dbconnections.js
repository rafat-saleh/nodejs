const Sequelize = require('sequelize');
const sequelize = new Sequelize('DB_sec2',{
  host: 'DESKTOP-D3TSP8U',
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true
  }
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

  const dbConn = new Sequelize("sesequelize");
  module.exports=dbConn;
  