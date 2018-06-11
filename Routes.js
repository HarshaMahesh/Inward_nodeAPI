var express =require('express');
var PatientRoute = require('./src/Patient/Patient.Route');
const Routes = express.Router();

Routes.use('/patients/',PatientRoute);

module.exports =Routes;