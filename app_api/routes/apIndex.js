/*There are three levels of endpoints; collection, document and subdocument. At each level of endpoint we define crud operations that are appropriate
for the level. For the collection level we define read and create, for document we define read,update and delete. This pattern repeats itself for a subdoc */
const express = require('express');
const router = express.Router();
const mCtrl = require('../controllers/Ms');
const smCtrl = require('../controllers/SMs');

//model/collection routes
//list
router
  .route('/ms')
  .get(mCtrl.mReadAll)
  .post(mCtrl.mCreateOne);
//instances/document routes
router
  .route('/ms/:mId')
  .get(mCtrl.mReadOne)
  .put(mCtrl.mUpdateOne)
  .delete(mCtrl.mDeleteOne);

//submodel routes
//list
router
  .route('/ms/:mId/sms')
  .get(smCtrl.smReadAll)
  .post(smCtrl.smCreateOne);
router
  .route('/ms/:mId/sms/new')
  .get(smCtrl.smCreateOne)
//instance
router
  .route('/ms/:mId/sms/:smId')
  .get(smCtrl.smReadOne)
  .put(smCtrl.smUpdateOne)
  .delete(smCtrl.smDeleteOne);

module.exports = router;
