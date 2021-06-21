const User=require('../Models/user')



const createuser = (data) =>{
   return User.create(data)
}

const findalluser = () =>{
    return User.findALL()
 }
 const findbyiduser = (id) =>{
    return User.findOne({where:{id}})
 }

 const editbyiduser = (id,data) =>{
    return User.update(data,{where:{id}})
 }

 const deletebyiduser = (id ) =>{
    return User.destory({where:{id}})
 }
 

module.exports={
createuser,findalluser,findbyiduser,editbyiduser,deletebyiduser
}