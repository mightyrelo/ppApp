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
    sendJSONResponse(res, 200, {"message":"sms read"});
};

//submodel instance operations
const smReadOne = (req, res) => {
    sendJSONResponse(res, 200, {"message":"sm read"});
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
