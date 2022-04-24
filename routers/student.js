const express = require('express')
const studentRouter = express.Router()
const studentController = require('../controllers/student')

studentRouter.get('/', studentController.getStudents)
studentRouter.get('/:id', studentController.getDetailStudent)
studentRouter.post('/', studentController.addStudent)
studentRouter.put('/:id', studentController.updateStudent)
studentRouter.delete('/:id', studentController.deleteStudent)

module.exports = studentRouter
