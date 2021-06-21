const express=require('express')
const router= express.Router();
const usermodel=require('../controllers/user')

router.post('/',async(req,res)=>{
    const {body} =req;
   await usermodel.createuser(body)
    res.status(204).end();

})

router.get('/',async(req,res)=>{
    const a= await usermodel.findalluser()
    res.json(a)
})


router.get('/:id',async(req,res)=>{
    const {id} =req.params;
    const a= await usermodel.findbyiduser(id)
    if(!a){
        res.status(404).end();
        return
    }
    res.json(a)
})


router.patch('/:id',async(req,res)=>{
    const {body,params: {id}} =req;
    await usermodel.editbyiduser(id,body)

    res.status(404).end();
})


router.delete('/:id',async (req,res)=>{
    const {id}=req.params
    await usermodel.deletebyiduser(id)
    res.status(404).end();
})


module.exports=router;