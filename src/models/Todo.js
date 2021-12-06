const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todoSchema = schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    finished:{
        type: Boolean,
        required: false,
    },
    date:{
        type: Date,
        default: Date.now(),
    },
});

module.exports = Todo = mongoose.model("all", todoSchema);