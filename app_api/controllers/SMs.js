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
            m: {
                a1: m.a1,
                id: m._id

            },
            sms: smS
        };
        sendJSONResponse(res, 200, response);
     });

};

const getSM = (req, res, m) => {
    for(let i = 0; i < m.sms.length; i++) {
        console.log(m.sms[i]);
    }
}



//submodel instance operations
const smReadOne = (req, res) => {
    if(!req.params.mId || !req.params.smId) {sendJSONResponse(res, 404, {"message":"both parameters required"}); return}
    M
     .findById(req.params.mId)
     .select('a1 sms')
     .exec((err, m) => {
        if(err) {sendJSONResponse(res, 400, err); return}
        if(!m) {sendJSONResponse(res, 404, {"message":"m not found"}); return}
        if(!m.sms || m.sms.length === 0 ) {sendJSONResponse(res, 404, {"message":"no sms found"}); return}
        //console.log(m.sms);
        const sm = m.sms.id(req.params.smId); 
        //console.log(sm); 
        for(let i = 0; i < m.sms.length; i++) {
            console.log(sm.sms._id, req.params.smId);
        } 
        //console.log(m);
        const response = {
            m: {
               a1: m.a1,
               id: m._id
            },
            sm
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
