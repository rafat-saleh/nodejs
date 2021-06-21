const express=require('express')
const router= express.Router();
const todomodel=require('../controllers/todo')

router.post('/',async(req,res)=>{
    const {body} =req;
    await todomodel.createtodo(body)
    res.status(204).end();

})

router.get('/',async(req,res)=>{
    const a= await todomodel.findalltodo()
    res.json(a)
})


router.get('/:id',async(req,res)=>{
    const {id} =req.params;
    const a= await todomodel.findbyidtodo(id)
    if(!a){
        res.status(404).end();
        return
    }
    res.json(a)
})


router.patch('/:id',async(req,res)=>{
    const {body,params: {id}} =req;
    await todomodel.editbyidtodo(id,body)

    res.status(404).end();
})


router.delete('/:id',async (req,res)=>{
    const {id}=req.params
    await todomodel.deletebyidtodo(id)
    res.status(404).end();
})


module.exports=router;