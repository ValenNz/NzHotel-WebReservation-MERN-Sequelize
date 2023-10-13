const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();
app.use(cors());

app.use('/image/tipe_kamar', express.static(path.join(__dirname,'./image/tipe_kamar')))
app.use('/image/user', express.static(path.join(__dirname,'./image/user')))
app.use('/image/customer', express.static(path.join(__dirname,'./image/customer')))

const user = require('./routes/user')
app.use("/user", user)

const tipe_kamar = require('./routes/tipe_kamar')
app.use("/tipe_kamar", tipe_kamar)

const kamar = require('./routes/kamar')
app.use("/kamar", kamar)

const pemesanan = require('./routes/pemesanan')
app.use("/pemesanan", pemesanan)

const detail_pemesanan = require('./routes/detail_pemesanan')
app.use("/detail_pemesanan", detail_pemesanan)

const customer = require('./routes/customer')
app.use("/customer", customer)

const filter_kamar = require('./routes/filter_kamar')
app.use("/filter_kamar", filter_kamar)

app.listen(8000, () => {
    console.log('💕💕💕💕 server run on port 8000 💕💕💕💕')
})
