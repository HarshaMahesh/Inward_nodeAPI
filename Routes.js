var express =require('express');
var PatientRoute = require('./src/Patient/Patient.Route');

var BedRoute = require('./src/BedandEquipment/Bed/Bed.Route');
var BedTypeRoute = require('./src/BedandEquipment/BedType/BedType.Route');
var WardBedRoute = require('./src/BedandEquipment/WardBed/WardBed.Route');
var EquipmentRoute = require('./src/BedandEquipment/Equipment/Equipment.Route');
var EquipmentTypeRoute = require('./src/BedandEquipment/EquipmentType/EquipmentType.Route');
var DrugRoute = require('./src/BedandEquipment/Drug/Drug.Route');
const Routes = express.Router();

Routes.use('/patients/',PatientRoute);
Routes.use('/beds/',BedRoute);
Routes.use('/bedType/',BedTypeRoute);
Routes.use('/wardBeds/',WardBedRoute);
Routes.use('/equipments/',EquipmentRoute);
Routes.use('/equipmentType/',EquipmentTypeRoute);
Routes.use('/drugs/',DrugRoute);

var eTransferRoute = require('./src/Patient/eTransfer/eTransfer.Route');
var iTransferRoute = require('./src/Patient/iTransfer/iTransfer.Route');
var dischargeRoute = require('./src/Patient/discharge/discharge.Route');



Routes.use('/patients/',PatientRoute);
Routes.use('/internalTransfer/',iTransferRoute);
Routes.use('/externalTransfer/',eTransferRoute);
Routes.use('/discharge/',dischargeRoute);


module.exports =Routes;
