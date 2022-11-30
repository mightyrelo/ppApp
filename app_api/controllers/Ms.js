const mongoose = require('mongoose');
const M = mongoose.model('M');

const sendJSONResponse = (res, code, content) => {
    res
      .status(code)
      .json(content);
};

//list operations
const mCreateOne = (req, res) => {
    sendJSONResponse(res, 200, {"message":"m created"});
};

const mReadAll = (req, res) => {
    sendJSONResponse(res, 200, {"message":"ms read"});
};

//instance operations
const mReadOne = (req, res) => {
    const mId = req.params.mId;
    if(!mId) {sendJSONResponse(res, 400, {"message":"m id required"});}
    M
     .findById(mId)
     .exec((err, m)=>{
        if(err) {sendJSONResponse(res, 400, err);}
        if(!m) {sendJSONResponse(res, 404, {"message":"m not found"});}
        sendJSONResponse(res, 200, m);
     });
};
const mUpdateOne = (req, res) => {
    sendJSONResponse(res, 200, {"message":"m updated"});
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