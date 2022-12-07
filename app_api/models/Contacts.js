const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    cellphone: [String],
    landline: String,
    facebook: String,
    twitter: String,
    instagram: [String],
    
});