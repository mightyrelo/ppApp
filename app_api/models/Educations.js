const mongoose = require('mongoose');

const EducationSchema = mongoose.Schema({
    institution: String,
    qualification: String,
    term: String,
    interests: [String],
    userId: String

});