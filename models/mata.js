var mongoose = require('mongoose')

var MataScehma = mongoose.Schema({
    dosenMata:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'dosen'
    },
    mahasisaMata:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mahasiswa'
    },
    jmlMata:{
        type: String,
        required: true
    }
},
{
    timestamps: true

})

var mata = module.exports = mongoose.model('Mata',MataScehma)