var express = require('express');
var router = express.Router();
const loginCtrl = require('../controller/login.controller');


router.get('/' ,loginCtrl.Login);
router.post('/' ,loginCtrl.Login);



module.exports = router;