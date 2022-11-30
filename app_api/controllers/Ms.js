const mongoose = require('mongoose');
const M = mongoose.model('M');

const sendJSONResponse = (res, code, content) => {
    res
      .status(code)
      .json(content);
};

const formIsValid = (req) => {
    console.log(req.body.a1);
    if(!req.body.a1 || !req.body.a2 || !req.body.a3 ||!req.body.a4 ||!req.body.facilities) {
        return false;
    } else {
        return true;
    }
}

//list operations
const mCreateOne = (req, res) => {
    if(formIsValid(req)) {
        const formM = {
            a1: req.body.a1,
            a2: parseInt(req.body.a2),
            a3: req.body.a3,
            a4: req.body.a4,
            facilities: req.body.facilities.split(',')
        };
        M
         .create(formM, (err, m) => {
           if(err) {sendJSONResponse(res, 400, {"message":"could not load m"}); return;}
           sendJSONResponse(res, 201, m);        
         });    
    } else {
        sendJSONResponse(res, 400, {"message":"all fileds required"});
    }
};

const mReadAll = (req, res) => {
    M
     .find()
     .exec((err, ms)=>{
        if(err) {sendJSONResponse(res, 400, err); return}
        if(!ms) {sendJSONResponse(res, 404, {"message":"ms not found"}); return}
        sendJSONResponse(res, 200, ms);
     });
};

//instance operations
const mReadOne = (req, res) => {
    const mId = req.params.mId;
    if(!mId) {sendJSONResponse(res, 400, {"message":"m id required"}); return;}
    M
     .findById(mId)
     .exec((err, m)=>{
        if(err) {sendJSONResponse(res, 400, err); return}
        if(!m) {sendJSONResponse(res, 404, {"message":"m not found"});return;}
        sendJSONResponse(res, 200, m);
     });
};
const mUpdateOne = (req, res) => {
    if(!req.params.mId) {sendJSONResponse(res, 400, {"message":"m id required"}); return;}
    M
     .findById(req.params.mId)
     .exec((err, m) => {
        if(err) {sendJSONResponse(res, 400, err); return;}
        if(!m) {sendJSONResponse(res, 404, {"message":"m not found"}); return;}
        m.a1 = req.body.a1;
        m.a2 = parseInt(req.body.a2);
        m.a3 = req.body.a3;
        m.a4 = req.body.a4;
        m.facilities = req.body.facilities.split(',');
        m.save((err, savedM) => {
            if(err) {sendJSONResponse(res, 400, err);}
            if(!savedM) {sendJSONResponse(res, 404, {"message":"could not update m"});}
            sendJSONResponse(res, 200, savedM);
        })
     }); 
};
const mDeleteOne = (req, res) => {
    sendJSONResponse(res, 200, {"message":"m deleted"});
};


module.exports = {
    mCreateOne,
    mReadAll,
    mReadOne,
    mUpdateOne,
    mDeleteOne,
};