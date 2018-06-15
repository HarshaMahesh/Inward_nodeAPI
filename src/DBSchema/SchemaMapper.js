var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const PatientSchema = new Schema({
    BHTNo:{
        type:Number,
        require:true
        },

    patientName: {
        type: String,
        require: true
    },
    wardNo: {
        type: Number,
        require: true
    },
    bedNo:{
        type:Number,
        require:true
    },
    admittedDate:{
      type:String,
      require:true
    },
    admittedTime:{
       type:String,
       require:true
    }
    }
);
const iTransferSchema = new Schema({

        transferWard:{
            type:String,
            require:true
        },

        reason: {
            type: String,
            require: true
        },
        treatment: {
            type: String,
            require: true
        },
        date:{
            type:String,
            require:true
        }

    }
);
const eTransferSchema = new Schema({

    fromHospital:{
            type:String,
            require:true
        },

    toHospital: {
            type: String,
            require: true
        },
    reason: {
            type: String,
            require: true
        },
    treatment:{
            type:String,
            require:true
        },
    date:{
        type:String,
        require:true
    },
    nameGuardian:{
        type:String,
        require:true
    },
    addressGuardian:{
        type:String,
        require:true
    }


    }
);
const PatientdischargeSchema = new Schema({

        fromHospital:{
            type:String,
            require:true
        },

        toHospital: {
            type: String,
            require: true
        },
        reason: {
            type: String,
            require: true
        },
        treatment:{
            type:String,
            require:true
        },
        date:{
            type:String,
            require:true
        },
        nameGuardian:{
            type:String,
            require:true
        },
        addressGuardian:{
            type:String,
            require:true
        }


    }
);

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

//BedType Schema...
const BedTypeSchema = new Schema({
    typeName: {
        type: String,
        require: true
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
//EquipmentType Schema...
const EquipmentTypeSchema = new Schema({
    equipType: {
        type: String,
        require: true
    }
});
//Drug Schema...
const DrugSchema = new Schema({
    drugName: {
        type: String,
        require: true
    },
    drugCount: {
        type: String,
        require: true
    },
    addedDate: {
        type: Date,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
});




mongoose.model('Bed', BedSchema);
mongoose.model('BedType', BedTypeSchema);
mongoose.model('WardBed', WardBedSchema);
mongoose.model('Equipment', EquipmentSchema);
mongoose.model('EquipmentType', EquipmentTypeSchema);
mongoose.model('Drug', DrugSchema);
//


mongoose.model('Patient', PatientSchema);
mongoose.model('eTransfer',eTransferSchema);
mongoose.model('iTransfer',iTransferSchema);
mongoose.model('discharge',PatientdischargeSchema);


mongoose.connect('mongodb://localhost:27017/Hospital_ward', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;