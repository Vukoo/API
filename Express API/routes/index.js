const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicationController = require('../controllers/ApplicationController');

router.get('/', PagesController.home);

router.post('/applications', 
    ApplicationController.noramalizeData,
    ApplicationController.store);

module.exports = router;