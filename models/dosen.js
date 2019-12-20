var mongoose = require('mongoose')


var DosenSchema = mongoose.Schema({
    nama:{
        type: String,
        required : true
    },
    alamat:{
        type: String,
        required: true
    },
    matkul:{
        type: String,
        required: true
    },
    nik: {
        type: Number,
        required: true
    },
},
{
    timestamps: true
})

var Dosen = module.exports = mongoose.model('dosen', DosenSchema)