const express =require('express')
const app=express();

app.use(express.json())
const todos=[];

app.post('/todos',(req,res)=>{
   todos.push(req.body)
   res.end();
})

app.get('/todos',(req,res)=>{
    res.json(todos)
})

app.get('/todos/:id',(req,res)=>{
    const {id}= req.params
    const todo= todos.find((rr)=>id===rr.id)
    if(!todo){
        res.status(404).end();
        return
    }
    res.json(todo)
})

app.patch('/todos/:id',(req,res)=>{
    const {id}= req.params
    const todo= todos.find((rr)=>id===rr.id)
    if(!todo){
        res.status(404).end();
        return
    }
    todo.id=req.body.id;
    res.json(todo)
})

app.delete('/todos/:id',(req,res)=>{
    const {id}= req.params
    const tood= todos.find((rr)=>id===rr.id)

    if(!tood){
        res.status(404).end();
        return
    }
    todos.splice(todos.indexOf(tood),1)
    res.json(todos);
})

app.listen(3000,()=>{console.log("listening")})
