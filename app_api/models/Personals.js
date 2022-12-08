const mongoose = require('mongoose');

const PersonalSchema = mongoose.Schema({
    name: String,
    gender: String,
    idNo: String,
    race: String,
    languages: [String],
    passions: [String],
    maritalStatus: String,
    userId: String, 

});