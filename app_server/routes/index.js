var express = require('express');
var router = express.Router();

var homeCtrl = require('../controllers/home');
const mCtrl = require('../controllers/Ms');
const smCtrl = require('../controllers/SMs')

/* GET home page. */
router.get('/', homeCtrl.home);

//model routes
//list
router
  .route('/ms')
  .get(mCtrl.readMs)
  .post(mCtrl.createM);
//instances
router
  .route('/ms/:mId')
  .get(mCtrl.readM)
  .put(mCtrl.updateM)
  .delete(mCtrl.deleteM);

//submodel routes
//list
router
  .route('/ms/:mId/sms')
  .get(smCtrl.readSMs)
  .post(smCtrl.createSM);
//instance
router
  .route('/ms/:mId/sms/:smId')
  .get(smCtrl.readSM)
  .put(smCtrl.updateSM)
  .delete(smCtrl.deleteSM);


module.exports = router;
