const express = require('express');
const router = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
// const cryptoText=require('crypto').randomBytes(64).toString('hex')
// console.log(`The cryptoText is: ${cryptoText}`);
var cors = require('cors')

app.use(cors())
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected mongoDB');
    })
    .catch((err) => {
        console.log('error' + err);
    })

router.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/', router);


app.listen(4200, () => {
    console.log("listening on port 4200");
})
