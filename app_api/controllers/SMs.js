const mongoose = require('mongoose');
const M = mongoose.model('M');

const sendJSONResponse = (res, code, content) => {
    res
      .status(code)
      .json(content);
};


//submodel list operations
const doCreateSM = (req, res, m) => {
    const formSM = {
        b1: req.body.b1,
        b2: parseFloat(req.body.b2),
    };
    m.sms.push(formSM);
    m.save((err, m)=> {
        if(err) {sendJSONResponse(res, 400, err); return}
        if(!m) {sendJSONResponse(res, 404, {"message":"could not save m"}); return;}
        const thisSM = m.sms.slice(-1).pop();
        sendJSONResponse(res, 201, thisSM);
    })

};
const smCreateOne = (req, res) => {
    const mId = req.params.mId;
    if(!mId) {sendJSONResponse(res, 400, {"message":"m id required"}); return;}
    M
     .findById(mId)
     .select('sms')
     .exec((err, m) => {
        if(err) {sendJSONResponse(res, 400, err); return;}
        if(!m) {sendJSONResponse(res, 404, {"message":"m not found"}); return;}
        doCreateSM(req, res, m);
     });
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
