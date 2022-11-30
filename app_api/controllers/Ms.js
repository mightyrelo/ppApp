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
    sendJSONResponse(res, 200, {"message":"m read"});
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