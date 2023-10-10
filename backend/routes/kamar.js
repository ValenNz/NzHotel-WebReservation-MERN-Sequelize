const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const { Op } = require("sequelize")

const model = require('../models/index');
const kamar = model.kamar
const tipe_kamar = model.tipe_kamar

const auth = require("../auth")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "TryMe"

app.get("/", auth, (req,res) => {
    kamar.findAll({include: [{model: tipe_kamar, as:'tipe_kamar'}]})
        .then(result => {
            res.json({
                kamar : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.get("/:id", auth, (req, res) =>{
    kamar.findOne({ where: {id_kamar: req.params.id}})
    .then(result => {
        res.json({
            kamar: result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.post("/search", auth, (req, res) => {
    kamar
      .findAll({
        include: [{model: tipe_kamar, as:'tipe_kamar'}],
        where: {
          [Op.or]: [
            { nomor_kamar: req.body.nomor_kamar},
          ],
        },
      })
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

app.post("/", auth, (req,res) => {
    let data = {
        nomor_kamar : req.body.nomor_kamar,
        id_tipe_kamar : req.body.id_tipe_kamar
    }

    kamar.create(data)
        .then(result => {
            res.json({
                message: "data has been inserted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.put("/:id", auth, (req,res) => {
    let param = {
        id_kamar : req.params.id
    }
    let data = {
        nomor_kamar : req.body.nomor_kamar,
        id_tipe_kamar : req.body.id_tipe_kamar
    }
    kamar.update(data, {where: param})
        .then(result => {
            res.json({
                message: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.delete("/:id", auth, (req,res) => {
    let param = {
        id_kamar : req.params.id
    }
    kamar.destroy({where: param})
        .then(result => {
            res.json({
                message: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})


module.exports = app