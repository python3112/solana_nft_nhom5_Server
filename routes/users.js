var express = require('express');
var router = express.Router();
var api_users = require('../controller/api/user.api.Controller')

router.get('/',api_users.listUser);      

router.get('/topusers', api_users.getTopUsers); 
router.get('/getone/:id',api_users.oneUser);     
router.post('/',api_users.addUser);           
router.post('/userslogin',api_users.userLogin);           
router.put('/:idu',api_users.updateUser);    
router.delete('/:idu',api_users.deleteUser); 

// lấy ra 10 người dùng có điểm cao nhất

module.exports = router;
