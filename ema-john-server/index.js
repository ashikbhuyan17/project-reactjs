const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 5000
require('dotenv').config()
app.use(cors())    //middleware
app.use(bodyParser.json())  //middleware
const MongoClient = require('mongodb').MongoClient;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p0lzm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const productsCollection = client.db("emaJohnStore").collection("products");
    app.post('/addProduct', (req, res) => {    //for data create
        const products = req.body
        console.log(products);
        productsCollection.insertMany(products)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount)
            })
    })
    app.get('/products', (req, res) => {     //for data read
        productsCollection.find({}).limit(20)
            .toArray((err, documents) => {
                res.send(documents)
            })
    })


});
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port)