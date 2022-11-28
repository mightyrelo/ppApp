var express = require('express');
var router = express.Router();

var homeCtrl = require('../controllers/home');
const mCtrl = require('../controllers/Ms')

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
  .get(mCtrl.readSMs)
  .post(mCtrl.createSM);
//instance
router
  .route('/ms/:mId/sms/:smId')
  .get(mCtrl.readSM)
  .put(mCtrl.updateSM)
  .delete(mCtrl.deleteSM);


module.exports = router;
