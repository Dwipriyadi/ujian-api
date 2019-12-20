const mhsController = require('../controller/mhsController')
const dosenController = require('../controller/dosenController')
const mataController = require('../controller/mataController')


module.exports = app => {
    app.get('/', mhsController.home)
  
    //APIMAHASISWA
    app.get('/mahasiswa', mhsController.listMahasiswa)
    app.get('/mahasiswa/:id', mhsController.detailMahasiswa)
    app.post('/mahasiswa/', mhsController.tambahMahasiswa)
    app.put('/mahasiswa/:id', mhsController.ubahMahasiswa)
    app.delete('/mahasiswa/:id', mhsController.hapusMahasiswa)

      //APIDOSEN
      app.get('/dosen', dosenController.listDosen)
      app.get('/dosen/:id', dosenController.detailDosen)
      app.post('/dosen/', dosenController.tambahDosen)
      app.put('/dosen/:id', dosenController.ubahDosen)
      app.delete('/dosen/:id', dosenController.hapusDosen)

      //API MATAKULIAH
        app.post('/mata/:id', mataController.addToMata)
        //  app.get('/mata/id', mataController.showMata)
        // app.get('/mata/remove/:id', mataController.removeMata)
        // app.put('/mata/:id', mataController.editMata)
        // app.delete('/mata/:id', mataController.deleteMata)
}