const mongoose = require('mongoose')

const schema = mongoose.Schema({
    classStudent: Number,
    name: String,
    sex: String
})
const StudentModel = mongoose.model('student', schema)

module.exports = StudentModel
