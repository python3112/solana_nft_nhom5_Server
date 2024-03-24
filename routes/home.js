var express = require('express');
var router = express.Router();


//Đường dẫn tới home.controller.js 
var homeCtrl = require('../controller/home.controller')

//Vào trang home theo địa chỉ '/'

router.get('/',homeCtrl.home)

// router.get('/logout' , homeCtrl.Logout)


//Xuất router
module.exports = router;
