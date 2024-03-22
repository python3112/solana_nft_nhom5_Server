const Mission = require('../../models/mission')

exports.createMission = (req, res) => {
    // Kiểm tra xem tất cả các trường cần thiết đã được cung cấp hay không
    if (!req.body.title || !req.body.point || !req.body.detail) {
        return res.status(400).send("Missing required fields");
    }

    const newMission = new Mission({
        title: req.body.title,
        point: req.body.point,
        completed: req.body.completed || false,
        detail: req.body.detail
    });

    newMission.save()
        .then(mission => {
            res.json(mission);
        })
        .catch(err => {
            res.status(400).send("Unable to save mission to database");
        });
};

exports.getAllMissions = (req, res) => {
    Mission.find()
        .then(missions => {
            res.json(missions);
        })
        .catch(err => {
            res.status(400).send("Unable to fetch missions");
        });
};

exports.getMissionById = (req, res) => {
    Mission.findById(req.params.id)
        .then(mission => {
            if (!mission) {
                return res.status(404).send("Mission not found");
            }
            res.json(mission);
        })
        .catch(err => {
            res.status(400).send("Unable to fetch mission");
        });
};

exports.updateMission = (req, res) => {
    Mission.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(mission => {
            if (!mission) {
                return res.status(404).send("Mission not found");
            }
            res.json(mission);
        })
        .catch(err => {
            res.status(400).send("Unable to update mission");
        });
};

exports.deleteMission = (req, res) => {
    Mission.findOneAndDelete({ _id: req.params.id })
        .then(mission => {
            if (!mission) {
                return res.status(404).send("Mission not found");
            }
            res.json({ message: "Mission deleted successfully" });
        })
        .catch(err => {
            res.status(400).send("Unable to delete mission");
        });
};