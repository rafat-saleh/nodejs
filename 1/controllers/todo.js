const todomodel=require('../Models/todo')



const createtodo = (data) =>{
   return todomodel.create(data)
}

const findalltodo = () =>{
    return todomodel.findALL()
 }
 const findbyidtodo = (id) =>{
    return todomodel.findOne({where:{id}})
 }

 const editbyidtodo = (id,data) =>{
    return todomodel.update(data,{where:{id}})
 }

 const deletebyidtodo = (id ) =>{
    return todomodel.destory({where:{id}})
 }
 

module.exports={
createtodo,findalltodo,findbyidtodo,editbyidtodo,deletebyidtodo
}