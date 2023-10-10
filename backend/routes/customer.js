const express = require("express")
const app = express()
app.use(express.json())

const md5 = require("md5")

const multer = require("multer")
const path = require("path")
const fs = require("fs")

const models = require("../models/index")
const customer = models.customer

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"../backend/image/customer")
    },
    filename: (req,file,cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage: storage})

const auth = require("../auth")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "TryMe"

app.post("/auth", async (req,res) => {
    let data= {
        email: req.body.email,
        password: md5(req.body.password)
    }

    let result = await customer.findOne({where: data})
    if(result){
        let payload = JSON.stringify(result)
        // generate token
        let token = jwt.sign(payload, SECRET_KEY)
        res.json({
            logged: true,
            data: result,
            token: token
        })
    }else{
        res.json({
            logged: false,
            message: "Invalid nama_user or password"
        })
    }
})

app.get("/", auth, (req,res) => {
    customer.findAll()
        .then(result => {
            res.json({
                customer : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.post("/", upload.single("foto"),  (req, res) =>{
    if (!req.file) {
        res.json({
            message: "No uploaded file"
        })
    } else {
        let data = {
            nama : req.body.nama,
            foto : req.file.filename,
            email : req.body.email,
            password : md5(req.body.password),
        }
        customer.create(data)
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
    }
})

app.put("/:id", upload.single("foto"), auth, (req, res) =>{
    let param = { id_customer: req.params.id}
    let data = {
        nama : req.body.nama,
        email : req.body.email,
        password : md5(req.body.password),
    }
    if (req.file) {
        const row = customer.findOne({where: param})
        .then(result => {
            let oldFileName = result.image
           
            let dir = path.join(__dirname,"../backend/image/customer",oldFileName)
            fs.unlink(dir, err => console.log(err))
        })
        .catch(error => {
            console.log(error.message);
        })

        data.image = req.file.filename
    }

    if(req.body.password){
        data.password = md5(req.body.password)
    }

    customer.update(data, {where: param})
        .then(result => {
            res.json({
                message: "data has been updated",
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.delete("/:id",  (req,res) => {
    let param = {
        id_customer : req.params.id
    }
    customer.destroy({where: param})
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