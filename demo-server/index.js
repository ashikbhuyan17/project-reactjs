const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 9000
require('dotenv').config()
app.use(cors())    //middleware
app.use(bodyParser.json())  //middleware
const MongoClient = require('mongodb').MongoClient;



// const ObjectId = require('mongodb').ObjectId
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p0lzm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(process.env.DB_USER);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
    const Collection = client.db("doctorsPortal").collection("appointments");
    app.get('/extra', (req, res) => {
        console.log(req.body);
        res.send("ok ")
    })
})

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
app.listen(port)