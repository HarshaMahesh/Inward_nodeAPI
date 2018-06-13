var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const PatientSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
});

//Add new schema here
//Bed Schema...
const BedSchema = new Schema({
    bedNumber: {
        type: String,
        require: true
    },
    bedType: {
        type: String,
        require: true
    },
    bedStatus: {
        type: String,
        default: 'Available',
        require: false
    }
});
//Ward Beds Schema...
const WardBedSchema = new Schema({
    bedNumber: {
        type: String,
        require: true
    },
    bedType: {
        type: String,
        require: true
    },
    wardNumber: {
        type: String,
        require: true
    },
    level: {
        type: String,
        require: true
    },
    bedStatus: {
        type: String,
        default: 'Not Used',
        require: false
    }
});
//Equipment Schema...
const EquipmentSchema = new Schema({
    equipName: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
});
//Drug Schema...
const DrugSchema = new Schema({
    drugName: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
});



mongoose.model('Patient', PatientSchema);
mongoose.model('Bed', BedSchema);
mongoose.model('WardBed', WardBedSchema);
mongoose.model('Equipment', EquipmentSchema);
mongoose.model('Drug', DrugSchema);
//

mongoose.connect('mongodb://localhost:27017/Hospital_ward', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;