const StudentModel = require('../models/student')

exports.getStudents = (req, res) => {
    StudentModel.find()
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.status(500).json({
                message: 'Not Found'
            })
        })
}

exports.getDetailStudent = (req, res) => {
    var idStudent = req.params.id
    StudentModel.findOne({_id : idStudent})
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.status(500).json({
                message: 'Not Found'
            })
        })
}

exports.addStudent = (req, res) => {
    var classStudent = req.body.class
    var name = req.body.name
    var sex = req.body.sex
    console.log(classStudent, name, sex);
    var student = new StudentModel({
        classStudent,
        name,
        sex
    })
    student.save()
        .then((data) => {
            return res.json({
                message: 'Added Successfully'
            })
        })
        .catch((err) => {
            return res.status(500).json(err)
        })    

}

exports.updateStudent = (req, res) => {
    var idStudent = req.params.id
    StudentModel.updateOne({_id : idStudent}, {name: 'long'})
        .then((data) => {
            res.json({
                message: 'Update Successfully'  
            })
        })    
        .catch((err) => {
            res.json({
                message: 'Update Failed'
            })
        })
}

exports.deleteStudent = (req, res) => {

}
