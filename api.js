//inisiasi llibrary
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const moment = require("moment")
const siwaroute = require("./siswa")
const userroute = require("./user")
const pelanggaranroute = require("./pelanggaran")
const transaksirouter = require("./transaksi")

//implementation
const app = express()
app.use(express.json())
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//create MySQL Connection


app.use(siwaroute)
app.use(userroute)
app.use(pelanggaranroute)
app.use(transaksirouter)



app.listen(8000, () => {
    console.log("YEYY BERHASILL")
})
