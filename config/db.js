const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://hahoangphuc1357:matkhau@cluster0.sd1yg8z.mongodb.net/newBadeasy').on('open', ()=>{
    console.log("mongodb connected");
}).on('error', ()=>{
    console.log('mongodb connection error');
});

module.exports = connection;