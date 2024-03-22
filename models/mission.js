const mongoose = require('mongoose');
const missSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    point: {
        type: Number,
    },
    completed: {
        type: Boolean,
    },
    detail: {
        type: String,
    },
})
const miss = mongoose.model('mission', missSchema)
module.exports = miss