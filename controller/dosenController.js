const Dosen = require('../models/dosen')

exports.home = (req, res) => {
    res.send("Wellcome To API MAHASISWA")
}
exports.listDosen = async (req, res) => {
    let data = await Dosen.find()
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : data}))
}
exports.detailDosen = async (req, res) => {
    let data = await Dosen.findById(req.params.id)
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : data}))
}
exports.tambahDosen = async (req, res) => {
    let dosen = new Dosen(req.body)
    const status = await dosen.save()
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : status}))
}
exports.ubahDosen = async (req, res) => {
    let {id} = req.params
    const status = await Dosen.update({_id : id}, req.body)
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : status}))
}
exports.hapusDosen = async (req, res) => {
    let {id} = req.params
    const status = await Dosen.remove({_id : id})
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : status}))
}