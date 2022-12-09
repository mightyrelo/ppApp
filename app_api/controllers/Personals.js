const mongoose = require('mongoose');
require('../models/Personals');
const Personal = mongoose.model('Personal');


const sendJSONResponse = (res, code, content) => {
    res
      .status(code)
      .json(content);
};

//collection endpoint
const personalsCreateOne = (req, res) => {
    if(!req.body.name || !req.body.gender || !req.body.idNo  || !req.body.languages || !req.body.passions || !req.body.maritalStatus || !req.body.nationality || !req.body.race)
      {sendJSONResponse(res, 400, {"message":"all fields required"}); return}
    const formPersonal = {
        name: req.body.name,
        gender: req.body.gender,
        idNo: parseInt(req.body.idNo),
        languages: req.body.languages.split(','),
        passions: req.body.passions.split(','),
        userId: req.body.user,
        nationality: req.body.nationality,
        race: req.body.race
    };
    Personal
     .create(formPersonal, (err, dbPersonal) => {
        if(err) {sendJSONResponse(res, 400, err); return}
        if(!dbPersonal) {sendJSONResponse(res, 404, {"message":"personal could not be saved"}); return}
        sendJSONResponse(res, 201, dbPersonal);
     })
};

const personalsReadAll = (req, res) => {
    Personal
     .find()
     .exec((err, personals)=>{
        console.log('greet');
        if(err) {sendJSONResponse(res, 400, err); return}
        if(!personals) {sendJSONResponse(res, 404, {"message":"personals not found"}); return}
        sendJSONResponse(res, 200, personals);
     });
};


//document end point
const personalsReadOne = (req, res) => {
    const personalId = req.params.personalId;
    if(!personalId) {sendJSONResponse(res, 400, {"message":"personal id required"}); return}
    Personal
     .findById(personalId)
     .exec((err, personal)=>{
        if(err) {sendJSONResponse(res, 400, err); return}
        if(!personal) {sendJSONResponse(res, 404, {"message":"personal not found"}); return}
        sendJSONResponse(res, 200, personal);
     });
};

const doUpdatePersonals = (req, res, personal) => {
    personal.name = req.body.name;
    personal.gender = req.body.gender;
    personal.nationality = req.body.nationality;
    personal.maritalStatus = req.body.maritalStatus;
    personal.idNo = parseInt(req.body.idNo);
    personal.languages = req.body.languages.split(',');
    personal.passions = req.body.passions.split(',');
    personal.race = req.body.race;
    personal.save((err, savedPersonal)=>{
        if(err) {sendJSONResponse(res, 400, err);}
        if(!savedPersonal) {sendJSONResponse(res, 404, {"message":"personal could not be updated"});}
        sendJSONResponse(res, 200, savedPersonal);            
    })
}

const personalsUpdateOne = (req, res) => {
    if(!req.params.personalId) {sendJSONResponse(res, 400, {"message":"personal id required"}); return}
    Personal
     .findById(req.params.personalId)
     .exec((err, personal)=> {
        if(err) {sendJSONResponse(res, 400, err); return}
        if(!personal) {sendJSONResponse(res, 404, {"message":"personal not found"}); return}
        doUpdatePersonals(req, res, personal);
     });
};

const personalsDeleteOne = (req, res) => {
    if(!req.params.personalId) {sendJSONResponse(res, 400, {"message":"personal id required"}); return;}
    Personal
     .findByIdAndRemove(req.params.personalId)
     .exec((err, personal) => {
        if(err) {sendJSONResponse(res, 404, err); return;}
        sendJSONResponse(res, 204, null);
     });
};


module.exports = {
    personalsCreateOne,
    personalsReadAll,
    personalsReadOne,
    personalsUpdateOne,
    personalsDeleteOne,
};