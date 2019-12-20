var mongoose = require('mongoose')


var MahasiswaSchema = mongoose.Schema({
    nama:{
        type: String,
        required : true
    },
    alamat:{
        type: String,
        required: true
    },
    jurusan:{
        type: String,
        required: true
    },
    npm: {
        type: Number,
        required: true
    },
},
{
    timestamps: true
})

var Mahasiswa = module.exports = mongoose.model('mahasiswa', MahasiswaSchema)