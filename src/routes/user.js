const express =require('express');
const router=express.Router();

const personController=require('../controllers/user');

//to do getUser, createUser, updateUser, deleteUser routes
router.get('/', personController.getUsers);
router.get('/:id', personController.getUsers);
router.post('/', personController.createUser);
router.put('/:id', personController.updateUser);
router.delete('/:id', personController.deleteUser);


module.exports=router;