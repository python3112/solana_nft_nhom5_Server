const express = require('express');
const router = express.Router();
const missionController = require('../controller/missionController');

router.post('/missions', missionController.createMission);

// Lấy danh sách tất cả nhiệm vụ
router.get('/missions', missionController.getAllMissions);

// Lấy thông tin nhiệm vụ bằng id
router.get('/missions/:id', missionController.getMissionById);

// Cập nhật thông tin nhiệm vụ
router.put('/missions/:id', missionController.updateMission);

// Xóa nhiệm vụ
router.delete('/missions/:id', missionController.deleteMission);

module.exports = router;