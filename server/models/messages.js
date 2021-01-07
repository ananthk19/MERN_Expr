const mongoose = require('mongoose');
const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
});

const messageModel = mongoose.model('messageModel', messageSchema);
module.exports = messageModel;
