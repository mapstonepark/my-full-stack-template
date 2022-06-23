const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dontenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'eyeOfTheWorld',
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection =db.collection('characters')
    })

 // ejs require not setup yet