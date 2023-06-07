const express = require('express');
const passport = require('passport');
const companyController = require('../controllers/companyController');
const router = express.Router();

router.get(
  '/home',
  passport.checkAuthentication,
  companyController.companyPage
);

router.get(
  '/allocate',
  passport.checkAuthentication,
  companyController.allocateInterview
);

router.post(
  '/schedule-interview',
  passport.checkAuthentication,
  companyController.scheduleInterview
);
router.post(
  '/update-status/:id',
  passport.checkAuthentication,
  companyController.updateStatus
);

module.exports = router;
