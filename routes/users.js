var express = require('express');
var router = express.Router();
var api_users = require('../controller/api/api_users')

router.get('/users',api_users.listUser);      
router.get('/user/:username',api_users.oneUser);      
router.post('/users',api_users.addUser);           
router.post('/userslogin',api_users.userLogin);           
router.put('/users/:idu',api_users.updateUser);    
router.delete('/users/:idu',api_users.deleteUser); 

module.exports = router;
