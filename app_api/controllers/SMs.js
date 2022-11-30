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
        if(!smS) {sendJSONResponse(res, 404, {"message":"no sms found"})}
        if(smS && smS.length > 0) {
            const response = {
                m: {
                   a1 : m.a1,
                   id: req.params.mId 
                },
                sms: smS
        };
        sendJSONResponse(res, 200, response);
        } else {
            sendJSONResponse(res, 404, {"message":"no sms"})
        }
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
        if(m.sms && m.sms.length > 0) {
            const sm = m.sms.id(req.params.smId);
            if(!sm) {sendJSONResponse(res, 404, {"message":"sm not found"})}
            const response = {
                m: {
                    a1: m.a1,
                    id: m._id
                },
                sm
            };
            sendJSONResponse(res, 200, response);    
        }
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
