var express =require('express');
var PatientRoute = require('./src/Patient/Patient.Route');
var eTransferRoute = require('./src/Patient/eTransfer/eTransfer.Route');
var iTransferRoute = require('./src/Patient/iTransfer/iTransfer.Route');
var dischargeRoute = require('./src/Patient/discharge/discharge.Route');

const Routes = express.Router();

Routes.use('/patients/',PatientRoute);
Routes.use('/internalTransfer/',iTransferRoute);
Routes.use('/externalTransfer/',eTransferRoute);
Routes.use('/discharge/',dischargeRoute);

module.exports =Routes;
