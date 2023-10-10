const sequelize = require(`sequelize`);
const operator = sequelize.Op;

const express = require("express")

const app = express()
app.use(express.json())

const models = require("../models/index")
const Kamar = models.kamar
const Tp_kamar = models.tipe_kamar
const detail_pemesanan = models.detail_pemesanan

app.post('/', auth, async (req, res) => {
    let checkInDate = req.body.check_in_date;
    let checkOutDate = req.body.check_out_date;

    let availableRoomTypes = await Tp_kamar.findAll({
        attributes: ["id_tipe_kamar", "nama_tipe_kamar", "harga", "deskripsi", "foto"],
        include: [
            {
                model: Kamar,
                as: "kamar",
                required: false,
                include: [
                    {
                        model: detail_pemesanan,
                        as: "detail_pemesanan",
                        attributes: ["tgl_akses"],
                        where: {
                            tgl_akses: {
                                [operator.or]: [
                                    { [operator.lt]: checkInDate }, // Kamar sudah check-out sebelum tanggal check-in
                                    { [operator.gt]: checkOutDate }, // Kamar sudah check-out setelah tanggal check-out
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    });

    let availableRoomTypesFiltered = availableRoomTypes.filter((roomType) => {
        return !roomType.kamar.some((kamar) => kamar.detail_pemesanan.length > 0);
    });

    return res.json({ room: availableRoomTypesFiltered });
});


module.exports = app