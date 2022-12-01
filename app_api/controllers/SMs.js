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
     .select('a1 sms')
     .exec((err, m)=> {
        if(err) {sendJSONResponse(res, 400, err);}
        if(!m) {sendJSONResponse(res, 404, {"message":"m not found"});}
        const smS = m.sms;
        const response = {
            m: {
                a1: m.a1,
                id: req.params.mId
            },
            sms: smS
        };
        sendJSONResponse(res, 200, response);
     });

};



//submodel instance operations
const smReadOne = (req, res) => {
    M
    .findById(req.params.mId)
    .select('a1 sms')
    .exec((err, m)=>{
      if(!m) {
          sendJSONResponse(res, 404, {"message":"m id incorrect"});
          return;
      } else if(err) {
          sendJSONResponse(res, 404, err);
          return;
      }
      console.log(m.sms.id('6387650b8e9e19ba61a80d95'));
      if(m.sms && m.sms.length > 0) {
          const thisSM = m.sms.id(req.params.smId);
          if(!thisSM) {
              sendJSONResponse(res, 404, {"message":"sm id incorrect"});
              return;
          }
          const response = {
              m: {
                  a1: m.a1,
                  id: req.params.mId
              },
              sm: thisSM
          };
          sendJSONResponse(res, 200, thisSM);
      } else {
          sendJSONResponse(res, 400, {"message":"no sm found"});
      }
    });
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
