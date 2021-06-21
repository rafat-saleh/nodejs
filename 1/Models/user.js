const {DataTypes}= require('sequelize');
const dbConn=require('../dbconnections')


const User= dbConn.define('user',{
    username:{
        type:DataTypes.STRING
    }
})
User.sync({})
module.exports=User;