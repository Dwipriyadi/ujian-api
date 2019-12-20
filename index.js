const express = require ('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

//conection mongodb
mongoose.connect('mongodb://localhost/mhs_api')
    .then(db => console.log('db HORE CONNECT'))
    .catch(err => console.log(err))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
    })
)
    require('./router/router')(app)
    const PORT = process.env.PORT || 8000

    app.listen(PORT,()=>{
        console.log('BERHASIL MENJALANKAN SERVER PADA PORT 8000')
    })
