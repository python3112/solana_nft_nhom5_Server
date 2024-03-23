const express = require('express');
const router = express.Router();
const missionController = require('../controller/api/missionController');

router.post('/createMission', missionController.createMission);

// Lấy danh sách tất cả nhiệm vụ
router.get('/', missionController.getAllMissions);

// Lấy thông tin nhiệm vụ bằng id
router.get('/missions/:id', missionController.getMissionById);

// Cập nhật thông tin nhiệm vụ
router.put('/updateMission/:id', missionController.updateMission);

// Xóa nhiệm vụ
router.delete('/deleteMissions/:id', missionController.deleteMission);

// Lấy thông tin nhiệm vụ hoàn thành và ID User
router.get('/missionsCompleted/:id',missionController.getMissionCompleted)

module.exports = router;