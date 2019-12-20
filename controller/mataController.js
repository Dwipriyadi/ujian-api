const Mata = require('../models/mata')
const mahasiswa = require('../models/mahasiswa')

exports.addToMata = async (req,res) => {
    const dosenMata = req.params.id
    const mahasiswaMata = req.body.mahasiswaMata
    const jml = Number.parseInt(req.body.jmlMata)

    const dataMata = await Mata.count({dosenMata  : dosenMata , mahasiswaMata : mahasiswaMata})
    if(dataMata == 0){
        const data = {
            mahasiswaMata : mahasiswaMata,
            jmlMata : jml,
            dosenMata: dosenMata
        }
        console.log(data)
        const matas = new Mata(data)
        const saveMata = await matas.save()
        res.send(JSON.stringify({"status": 200, "error": null, "response": "Success addd to matakuliah"}))
    }else{
        const dataMata = await Mata.count({dosenMata : dosenMata,mahasiswaMata : mahasiswaMata}).lean()
        dataMata.forEach(async row => {
            const newJml = Number.parseInt(row.jmlMata) + qty
            const updateMata = await Mata.updateOne({_id : row._id}, {jmlMata : newJml})
        })
        res.send(JSON.stringify({"status": 200, "error": null, "response": "Success addd to cart"}))
    }
}