if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');
const app = express();
app.use(cors())
app.use(express.json())

const mongoUri = process.env.MONGO_URI;
const mongoOptions = { useUnifiedTopology: true, useNewUrlParser: true }

//mongodb connection
mongoose.connect(mongoUri, mongoOptions)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
    console.log("Database is up and running!")
})

app.use('/api/admin', adminRoute)
app.use('/api', userRoute)


const port = process.env.PORT
const env = process.env.NODE_ENV
app.listen(port, () => {
    console.log(`Server is running at port ${port} in ${env} environment`)
})