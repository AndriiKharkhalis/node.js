const { Router } = require('express');

const reportController = require('../controllers/report.controller');

const reportRouter = Router();

reportRouter.get('/', reportController.getReports);

module.exports = reportRouter;