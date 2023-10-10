const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Op } = require("sequelize");

const models = require("../models/index");
const tipe_kamar = models.tipe_kamar;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../backend/image/tipe_kamar");
  },
  filename: (req, file, cb) => {
    cb(null, "img-" + Date.now() + path.extname(file.originalname));
  },
});
let upload = multer({ storage: storage });

const auth = require("../auth");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "TryMe";

app.post("/", upload.single("foto"), auth, (req, res) => {
  if (!req.file) {
    res.json({
      message: "No uploaded file",
    });
  } else {
    let data = {
      nama_tipe_kamar: req.body.nama_tipe_kamar,
      harga: req.body.harga,
      deskripsi: req.body.deskripsi,
      foto: req.file.filename,
    };
    tipe_kamar
      .create(data)
      .then((result) => {
        res.json({
          message: "data has been inserted",
        });
      })
      .catch((error) => {
        res.json({
          message: error.message,
        });
      });
  }
});

app.get("/", auth, (req, res) => {
  tipe_kamar
    .findAll()
    .then((result) => {
      res.json({
        tipe_kamar: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

app.get("/:id", auth, (req, res) => {
  tipe_kamar
    .findOne({ where: { id_tipe_kamar: req.params.id } })
    .then((result) => {
      res.json({
        kamar: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

app.put("/:id", upload.single("foto"), auth, (req, res) => {
  let param = { id_tipe_kamar: req.params.id };
  let data = {
    nama_tipe_kamar: req.body.nama_tipe_kamar,
    harga: req.body.harga,
    deskripsi: req.body.deskripsi,
  };
  if (req.file) {
    // get data by id
    const row = tipe_kamar
      .findOne({ where: param })
      .then((result) => {
        let oldFileName = result.image;

        // delete old file
        let dir = path.join(
          __dirname,
          "../backend/image/tipe_kamar",
          oldFileName
        );
        fs.unlink(dir, (err) => console.log(err));
      })
      .catch((error) => {
        console.log(error.message);
      });

    // set new filename
    data.foto = req.file.filename;
  }

  tipe_kamar
    .update(data, { where: param })
    .then((result) => {
      res.json({
        message: "data has been updated",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

app.delete("/:id", auth, (req, res) => {
  let param = {
    id_tipe_kamar: req.params.id,
  };
  tipe_kamar
    .destroy({ where: param })
    .then((result) => {
      res.json({
        message: "data has been deleted",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

app.post("/search", auth, (req, res) => {
  tipe_kamar
    .findAll({
      where: {
        [Op.or]: [
          { nama_tipe_kamar: { [Op.like]: "%" + req.body.nama_tipe_kamar + "%" } },
        ],
      },
    })
    .then((result) => {
      res.json({
        tipe_kamar: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

module.exports = app;
