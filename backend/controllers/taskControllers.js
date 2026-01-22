const Task=require('../models/Task')

exports.tasksreg=async(req,res)=>{
    //method1 :

    // const {title,description,status} = req.body
    // const existingTitle=await Task.findOne({title})
    // if(existingTitle){
    //     res.status(400).json({message:"title already existing"})
    // }
    // const tasksreg=await Task.create({
    //     title,
    //     description,
    //     status
    // })
    // res.status(201).json({msg:"Project Details Created Successfully"})


    //method 2 : 

    try{
        const task = await Task.create({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status || 'pending',
            user : req.user.id,
        })
        res.status(201).json({msg : 'task created successfully'})
    }
    catch(error){
        res.status(500).send(error);
    }
}

exports.getTask=async(req,res)=>{
    try{
      const task = await Task.find({user:req.user.id})
      res.json(task)
    }
    catch(error){
        res.status(500).json(error)
    }
}
exports.getTaskById=async(req,res) =>{
    try{
      const task = await Task.findOne({
        _id : req.params.id,
        user : req.user.id
      })
      res.json(task)
    }
    catch(error){
      res.json(error)
    }
}
exports.updateTask = async(req,res)=>{
    try{
       const task = await Task.findOneAndUpdate({
        _id : req.params.id,
         user : req.user.id
       },
       {
        title:req.body.title,
        description:req.body.description,
        status:req.body.status
       },{new : true})
       if(!task){
        res.json({msg:"no task exist"})
       }
       res.json(task)
    }
    catch(error){
        res.json(error)
    }
}
exports.updateTaskPatch=async(req,res)=>{
    try{
      const task = await Task.findOneAndUpdate({
        _id : req.params.id,
        user : req.user.id,
      },
        req.body,
        {new : true},
    )
    if(!task){
        res.json({msg : 'no task exist'})
    }
    res.json(task)
    }
    catch(error){
       res.status(500).json(error)
    }
}
exports.deleteTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndDelete({
         _id : req.params.id,
         user : req.user.id
        })

        if(!task){
            res.json({msg : 'no task exist'})
        }
        res.json(task)
    }
    catch(error){
     res.json(error)
    }
}