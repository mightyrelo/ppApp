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
        b2: parseInt(req.body.b2)
    };
    m.sms.push(formSM);
    m.save((err, savedM) => {
        if(err) {sendJSONResponse(res, 400, err);return}
        if(!savedM) {sendJSONResponse(res, 404, {"message":"m could not be updated"}); return}
        const thisSM = savedM.sms.slice(-1).pop();
        sendJSONResponse(res, 201, thisSM);
    });
}

const smCreateOne = (req, res) => {
    if(!req.body.b1 || !req.body.b2) {sendJSONResponse(res, 400, {"message":"all fields required"}); return}
    if(!req.params.mId) {sendJSONResponse(res, 400, {"message":"m id required"});return}
    M
     .findById(req.params.mId)
     .exec((err, m) => {
        if(err) {sendJSONResponse(res, 400, err);return}
        if(!m) {sendJSONResponse(res, 404, {"message":"m not found"}); return}
        doCreateSM(req, res, m);
     });
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
          sendJSONResponse(res, 200, response);
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
