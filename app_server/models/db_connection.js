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
    //
});

process.on('SIGINT', () => {
    gracefulShutdown('app termination', ()=> {
        process.exit(0);
    })
});

const gracefulShutdown = (source, callback) => {
    mongoose.connection.close(() => {
        console.log('mongoose disconnected through ', source);
        callback();
    });

}

