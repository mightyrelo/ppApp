const mongoose = require('mongoose');

require('./SMs');

//schema defines model
const MSchema = mongoose.Schema({
    //pathname : propertiesObject
    a1: {
        type: String,
        required: true,
        unique: true
    },
    a2: {
        //data characteristics
        type: String,
        required: true,
        'default': 0,
        min: 0,
        max: 5
    },
    a3: String,
    a4: String,
    facilities: [String],
    duration: DurationSchema,
    sms: [SMSchema]
});

//create model by compiing schema
mongoose.model('M', MSchema);