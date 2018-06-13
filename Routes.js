var express =require('express');
var PatientRoute = require('./src/Patient/Patient.Route');
<<<<<<< HEAD
var BedRoute = require('./src/BedandEquipment/Bed/Bed.Route');
var WardBedRoute = require('./src/BedandEquipment/WardBed/WardBed.Route');
var EquipmentRoute = require('./src/BedandEquipment/Equipment/Equipment.Route');
var DrugRoute = require('./src/BedandEquipment/Drug/Drug.Route');
const Routes = express.Router();

Routes.use('/patients/',PatientRoute);
Routes.use('/beds/',BedRoute);
Routes.use('/wardBeds/',WardBedRoute);
Routes.use('/equipments/',EquipmentRoute);
Routes.use('/drugs/',DrugRoute);
=======
var eTransferRoute = require('./src/Patient/eTransfer/eTransfer.Route');
var iTransferRoute = require('./src/Patient/iTransfer/iTransfer.Route');
var dischargeRoute = require('./src/Patient/discharge/discharge.Route');

const Routes = express.Router();

Routes.use('/patients/',PatientRoute);
Routes.use('/internalTransfer/',iTransferRoute);
Routes.use('/externalTransfer/',eTransferRoute);
Routes.use('/discharge/',dischargeRoute);
>>>>>>> patient

module.exports =Routes;
