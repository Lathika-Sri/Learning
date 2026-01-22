const express=require('express')
const router=express.Router()

const {tasksreg,getTask,getTaskById,updateTask,updateTaskPatch,deleteTask} = require('../controllers/taskControllers')
const {protect} = require('../middleware/authmiddleware')

router.post('/tasksreg',protect,tasksreg) //->end point  //middleware is work before the controllers
router.get('/getTask',protect,getTask)
router.get('/getTask/:id',protect,getTaskById)
router.put('/updateTask/:id',protect,updateTask)
router.patch('/updateTaskPatch/:id',protect,updateTaskPatch)
router.delete ('/deleteTask/:id',protect,deleteTask)
module.exports=router