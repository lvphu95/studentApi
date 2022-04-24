const mongoose = require('mongoose')

async function db(){
    await mongoose.connect('mongodb://localhost:27017/student')
}

db()
console.log('database is connected');
