const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 9000
require('dotenv').config()
app.use(cors())    //middleware
app.use(bodyParser.json())  //middleware
//file upload
const fileUpload = require('express-fileupload');
app.use(express.static('doctors'));   //doctors name folder create hbe jekhane upload kora pic gulu takhbe
app.use(fileUpload());

const MongoClient = require('mongodb').MongoClient;






// const ObjectId = require('mongodb').ObjectId
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p0lzm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(process.env.DB_USER);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
    const appointmentCollection = client.db("doctorsPortal").collection("appointments");
    const doctorCollection = client.db("doctorsPortal").collection("doctors");
    app.post('/addAppointment', (req, res) => {
        const appointment = req.body
        console.log("app", appointment);
        appointmentCollection.insertOne(appointment)
            .then(result => {
                console.log(result);
                res.send(result.insertedCount > 0)
            })
    })
    // app.post('/addAppointment', (req, res) => {
    //     const appointment = req.body
    //     console.log("app", appointment);
    //     appointmentCollection.insertOne(appointment)
    //         .then(result => {
    //             console.log(result);
    //             res.send(result.insertedCount > 0)
    //         })
    // })
    app.post('/appointmentByDate', (req, res) => {
        const date = req.body
        console.log(date);
        console.log(date.date);
        appointmentCollection.find({ date: date.date })
            .toArray((err, documents) => {
                res.send(documents)
            })

    })


    app.get('/appointments', (req, res) => {
        appointmentCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    app.post('/addDoctor', (req, res) => {
        const file = req.files.file  //file means => type=file => client site
        const name = req.body.name
        const email = req.body.email
        console.log(name, email, file);


        // uploadPath = __dirname + '/doctors' + file.name;
        const filePath = `${__dirname}/doctors/${file.name}`
        file.mv(filePath, (err) => {
            if (err) {
                res.status(500).send({ msg: "failed to upload" });
            }
            // res.status(200).send({ name: file.name });
        });

        const newImg = file.data;
        // const newImg = fs.readFileSync(filePath)
        const encImg = newImg.toString('base64');
        var image = {
            contentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64')
        };

        doctorCollection.insertOne({ name, email, image })
            .then(result => {
                fs.rm(filePath, err => {
                    if (err) {
                        console.log(err);
                        res.status(500).send({ msg: "failed to upload" })
                    }
                    res.send(result.insertedCount > 0);



                })
            })
    })

})

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
app.listen(port)