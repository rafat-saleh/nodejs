const {DataTypes}= require('sequelize');
const dbConn=require('../dbconnections')


const todo= dbConn.define('todo',{
    content:{
        type:DataTypes.STRING
    },
    createdAt: {
    type: Sequelize.STRING
    },
    updatedAt: {
    type: Sequelize.STRING,
    }
})
 
todo.sync({})

module.exports=todo;