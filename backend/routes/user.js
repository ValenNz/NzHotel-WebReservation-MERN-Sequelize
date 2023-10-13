const express = require("express")
const app = express()
app.use(express.json())

const md5 = require("md5")

const multer = require("multer")
const path = require("path")
const fs = require("fs")

const { Op } = require("sequelize")

const models = require("../models/index")
const user = models.user

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"../backend/image/user")
    },
    filename: (req,file,cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage: storage})

const auth = require("../auth")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "TryMe"

app.post("/", upload.single("foto"), auth,  (req, res) =>{
    if (!req.file) {
        res.json({
            message: "No uploaded file"
        })
    } else {
        let data = {
            nama_user : req.body.nama_user,
            foto : req.file.filename,
            email : req.body.email,
            password : md5(req.body.password),
            role : req.body.role
        }
        user.create(data)
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

app.get("/", auth, (req,res) => {
    user.findAll()
        .then(result => {
            res.json({
                user : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.get("/:id", auth, (req, res) =>{
    user.findOne({ where: {id_user: req.params.id}})
    .then(result => {
        res.json({
            user: result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.put("/:id", upload.single("foto"), auth, (req, res) => {
    let param = { id_user: req.params.id }
    let data = {
        nama_user: req.body.nama_user,
        email: req.body.email,
        role: req.body.role
    }

    if (req.file) {
        const row = user.findOne({ where: param })
            .then(result => {
                let oldFileName = result.image
                let dir = path.join(__dirname, "../backend/image/user", oldFileName)
                fs.unlink(dir, err => console.log(err))
            })
            .catch(error => {
                console.log(error.message);
            })

        data.foto = req.file.filename
    }

    // Cek apakah ada input password dari pengguna
    if (req.body.password) {
        data.password = md5(req.body.password);
    }

    // Menghapus properti password dari objek data jika tidak ada input password
    if (!req.body.password) {
        delete data.password;
    }

    user.update(data, { where: param })
        .then(result => {
            if (result[0] === 0) {
                return res.status(404).json({
                    message: "Data not found"
                });
            }
            res.json({
                message: "data has been updated",
            });
        })
        .catch(error => {
            res.json({
                message: error.message
            });
        });
});


app.delete("/:id", auth,  (req,res) => {
    let param = {
        id_user : req.params.id
    }
    user.destroy({where: param})
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

app.post("/auth", async (req,res) => {
    let data= {
        email: req.body.email,
        password: md5(req.body.password)
    }

    let result = await user.findOne({where: data})
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

app.post("/search", auth, (req, res) => {
    user
      .findAll({
        where: {
          [Op.or]: [
            { nama_user: { [Op.like]: "%" + req.body.nama_user + "%" } },
          ],
        },
      })
      .then((result) => {
        res.json({
          user: result,
        });
      })
      .catch((error) => {
        res.json({
          message: error.message,
        });
      });
});

module.exports = app