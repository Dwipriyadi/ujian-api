const Mahasiswa = require('../models/mahasiswa')

exports.home = (req,res) => {
    res.send("Working")
}

exports.listMahasiswa = async (req, res) => {
    let data = await Mahasiswa.find()
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : data}))
}
exports.detailMahasiswa = async (req, res) => {
    let data = await Mahasiswa.findById(req.params.id)
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : data}))
}
exports.tambahMahasiswa = async (req, res) => {
    let mahasiswa = new Mahasiswa(req.body)
    const status = await mahasiswa.save()
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : status}))
}
exports.ubahMahasiswa = async (req,res) => {
    let {id} = req.params
    const status = await Mahasiswa.update({_id : id}, req.body)
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : status}))
}
exports.hapusMahasiswa = async (req,res) => {
    let {id} = req.params
    const status = await Mahasiswa.remove({_id : id})
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : status}))
}