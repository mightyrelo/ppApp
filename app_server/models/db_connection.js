const mongoose = require('mongoose');

//connection string
const dbURI = 'mongodb://localhost/ppApp';

mongoose.connect(dbURI, {useNewUrlParser: true});

//mongoose fires connection events
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', dbURI);
});

mongoose.connection.on('error', (error) => {
    console.log('connection error ', error );
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected');
})

