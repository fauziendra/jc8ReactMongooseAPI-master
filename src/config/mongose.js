const mongoose = require('mongoose')

const localhost = 'mongodb://127.0.0.1:27017/nyobamongoose'

mongoose.connect('mongodb+srv://fauziendra:<password>@cluster0-irgpb.mongodb.net/test?retryWrites=true', { // Generate connection to database
    useNewUrlParser: true, // Parsing URL to the form mongodb needs
    useCreateIndex: true, // Auto generate Indexes from mongodb, to get access to the data
    useFindAndModify: false //  deprecated
})