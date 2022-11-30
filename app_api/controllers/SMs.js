const mongoose = require('mongoose');
const M = mongoose.model('M');

const sendJSONResponse = (res, code, content) => {
    res
      .status(code)
      .json(content);
};


//submodel list operations
const smCreateOne = (req, res) => {
    sendJSONResponse(res, 200, {"message":"sm created"});
};

const smReadAll = (req, res) => {
    if(!req.params.mId) {sendJSONResponse(res, 404, {"message":"m id parameter required"})}
    M
     .findById(req.params.mId)
     .exec((err, m)=> {
        if(err) {sendJSONResponse(res, 400, err);}
        if(!m) {sendJSONResponse(res, 404, {"message":"m not found"});}
        const smS = m.sms;
        const response = {
            k: m.a1,
            j: smS
        };
        sendJSONResponse(res, 200, response);
     });

};



//submodel instance operations
const smReadOne = (req, res) => {
    if(!req.params.mId || !req.params.smId) {sendJSONResponse(res, 404, {"message":"both parameters required"})}
    M
     .findById(req.params.mId)
     .exec((err, m) => {
        if(err) {sendJSONResponse(res, 400, err);}
        if(!m) {sendJSONResponse(res, 404, {"message":"m not found"});}
        const sm = m.sms.id(req.params.smId);
        const response = {
            k: m.a1,
            j: sm
        };
        sendJSONResponse(res, 200, response);
     })
};

  

  
  
   


const smUpdateOne = (req, res) => {
    sendJSONResponse(res, 200, {"message":"sm updated"});
};
const smDeleteOne = (req, res) => {
    sendJSONResponse(res, 200, {"message":"sm deleted"});
};

module.exports = {
    smCreateOne,
    smReadAll,
    smReadOne,
    smUpdateOne,
    smDeleteOne,
};
